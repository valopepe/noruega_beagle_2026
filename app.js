document.addEventListener("DOMContentLoaded", () => {
  // Check if data is loaded
  if (typeof NORWAY_TRAVEL_DATA === "undefined") {
    console.error("NORWAY_TRAVEL_DATA is not defined. Please load data.js before app.js.");
    return;
  }

  // DOM Elements
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const menuToggle = document.getElementById("menuToggle");
  const themeToggle = document.getElementById("themeToggle");
  const mainSectionTitle = document.getElementById("mainSectionTitle");
  
  // Navigation
  const navBtns = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".content-section");

  // Home Shortcuts
  const btnStartItinerary = document.getElementById("btnStartItinerary");
  const btnGoToLogistics = document.getElementById("btnGoToLogistics");

  // Itinerary Section
  const daySelectorBar = document.getElementById("daySelectorBar");
  const dayDetailContainer = document.getElementById("dayDetailContainer");

  // Gastronomy Section
  const gastronomyGrid = document.getElementById("gastronomyGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Souvenirs Section
  const souvenirsGrid = document.getElementById("souvenirsGrid");

  // Logistics Section
  const bookingsTableBody = document.getElementById("bookingsTableBody");
  const drivingRulesList = document.getElementById("drivingRulesList");
  const bookingProgressFill = document.getElementById("bookingProgressFill");
  const bookingProgressText = document.getElementById("bookingProgressText");

  // Recommended Apps Section
  const appsGrid = document.getElementById("appsGrid");

  // Tools Section
  const inputNok = document.getElementById("inputNok");
  const inputEur = document.getElementById("inputEur");
  const EXCHANGE_RATE = 11.50; // 1 EUR = 11.5 NOK
  let activeDayNum = 2; // Default to Day 2 for nice display

  // Initialize
  initApp();

  function initApp() {
    setupNavigation();
    setupTheme();
    setupCountdown();
    setupItinerary();
    setupGastronomy("all");
    setupSouvenirs();
    setupLogistics();
    setupApps();
    setupCurrencyConverter();
    setupAccommodations();
    setupWeather();
    setupTranslator();
    updateBookingProgress();
  }

  /* --- SETUP NAVIGATION --- */
  function setupNavigation() {
    // Menu toggle for mobile
    menuToggle.addEventListener("click", () => {
      document.body.classList.toggle("sidebar-open");
    });

    sidebarOverlay.addEventListener("click", () => {
      document.body.classList.remove("sidebar-open");
    });

    // Sidebar navigation buttons
    navBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetSection = btn.getAttribute("data-section");
        switchSection(targetSection);
        document.body.classList.remove("sidebar-open");
      });
    });

    // Shortcut buttons on Home Screen
    btnStartItinerary.addEventListener("click", () => {
      switchSection("itinerary");
    });

    btnGoToLogistics.addEventListener("click", () => {
      switchSection("logistics");
    });
  }

  function switchSection(sectionId) {
    // Update active nav button
    navBtns.forEach(btn => {
      if (btn.getAttribute("data-section") === sectionId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Update visible section
    sections.forEach(section => {
      if (section.id === `section-${sectionId}`) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });

    // Update Top Bar Title
    const activeNav = document.querySelector(`.nav-btn[data-section="${sectionId}"]`);
    if (activeNav) {
      mainSectionTitle.textContent = activeNav.querySelector(".nav-label").textContent;
    }
    
    // Scroll content to top
    document.querySelector(".content-body").scrollTop = 0;
  }

  /* --- SETUP THEME --- */
  function setupTheme() {
    // Load persisted theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
      }
    });
  }

  /* --- SETUP COUNTDOWN --- */
  function setupCountdown() {
    const targetDate = new Date("August 1, 2026 23:55:00").getTime();
    
    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        document.getElementById("cd-days").textContent = "00";
        document.getElementById("cd-hours").textContent = "00";
        document.getElementById("cd-mins").textContent = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      document.getElementById("cd-days").textContent = String(days).padStart(2, "0");
      document.getElementById("cd-hours").textContent = String(hours).padStart(2, "0");
      document.getElementById("cd-mins").textContent = String(mins).padStart(2, "0");
    }

    updateTimer();
    setInterval(updateTimer, 60000); // Update every minute
  }

  /* --- SETUP ITINERARY --- */

  function setupItinerary() {
    daySelectorBar.innerHTML = "";
    
    // Generate Day Buttons
    NORWAY_TRAVEL_DATA.days.forEach(day => {
      const btn = document.createElement("button");
      btn.className = `day-btn ${day.dayNum === activeDayNum ? "active" : ""}`;
      btn.textContent = `Día ${day.dayNum}`;
      btn.addEventListener("click", () => {
        // Toggle Day Button
        document.querySelectorAll(".day-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        // Render Day details
        activeDayNum = day.dayNum;
        renderDayDetails(day);
      });
      daySelectorBar.appendChild(btn);
    });

    // Render initial active day
    const defaultDay = NORWAY_TRAVEL_DATA.days.find(d => d.dayNum === activeDayNum) || NORWAY_TRAVEL_DATA.days[0];
    renderDayDetails(defaultDay);
  }

  function renderDayDetails(day) {
    // Generate quick tags
    let quickTagsHTML = "";
    if (day.travelTimes && day.travelTimes.length > 0) {
      day.travelTimes.forEach(t => {
        const fromUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.from)}`;
        const toUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.to)}`;
        quickTagsHTML += `<span class="tag-label">🚗 De <a href="${fromUrl}" target="_blank" rel="noopener noreferrer" style="color:inherit; text-decoration:underline;"><strong>${t.from} ↗</strong></a> a <a href="${toUrl}" target="_blank" rel="noopener noreferrer" style="color:inherit; text-decoration:underline;"><strong>${t.to} ↗</strong></a>: ${t.desc}</span>`;
      });
    }

    // Build schedule / timeline
    let timelineHTML = "";
    if (day.schedule && day.schedule.length > 0) {
      day.schedule.forEach(item => {
        timelineHTML += `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-time">${item.time}</div>
            <div class="timeline-content">${item.desc}</div>
          </div>
        `;
      });
    } else if (day.itinerary && day.itinerary.length > 0) {
      day.itinerary.forEach(item => {
        if (item.time) {
          timelineHTML += `
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-time">${item.time}</div>
              <div class="timeline-content">${item.activity}</div>
            </div>
          `;
        }
      });
    }

    // Build city guide contents (if present)
    let cityGuideHTML = "";
    if (day.cityGuide) {
      const guideKeys = {
        shopping: "🛒 Compra",
        breakfast: "☕ Desayuno",
        eating: "🍽️ Dónde comer",
        drinks: "🍻 Dónde tomar algo",
        whatToSee: "👀 Qué ver",
        adrenaline: "⚡ Adrenalina"
      };

      let tabButtons = "";
      let tabContents = "";
      let isFirst = true;

      Object.entries(guideKeys).forEach(([key, label]) => {
        if (day.cityGuide[key]) {
          tabButtons += `
            <button class="nested-tab-btn ${isFirst ? 'active' : ''}" data-day="${day.dayNum}" data-tab="${key}">
              ${label}
            </button>
          `;
          tabContents += `
            <div class="nested-tab-content ${isFirst ? 'active' : ''}" id="tab-content-${day.dayNum}-${key}">
              <p>${day.cityGuide[key]}</p>
            </div>
          `;
          isFirst = false;
        }
      });

      if (tabButtons) {
        cityGuideHTML = `
          <div class="card card-glass">
            <h3 class="card-title">💡 Guía de la Zona</h3>
            <div class="nested-tabs">${tabButtons}</div>
            <div class="nested-tabs-content">${tabContents}</div>
          </div>
        `;
      }
    }

    // Build Itinerary sub-items if present
    let customItineraryHTML = "";
    if (day.itinerary && day.itinerary.some(i => i.section)) {
      day.itinerary.forEach((sec, secIdx) => {
        if (sec.section) {
          const sectionImages = sec.items
            .filter(item => item.image)
            .map(item => ({ url: item.image, caption: item.name }));

          const carouselHolderId = `sec-carousel-${day.dayNum}-${secIdx}`;
          const carouselHeaderHTML = sectionImages.length > 1 ? `
            <div id="${carouselHolderId}" style="margin-top: 0.75rem; margin-bottom: 1rem;"></div>
          ` : '';

          customItineraryHTML += `
            <div class="card card-glass" style="margin-top: 1rem;">
              <h3 class="card-title">📌 ${sec.section}</h3>
              ${carouselHeaderHTML}
              <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-top: 0.75rem;">
                ${sec.items.map(item => {
                  const placeUrl = item.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name)}`;
                  const imageHTML = (item.image && sectionImages.length <= 1) ? `
                    <div style="width: 100%; height: 200px; overflow: hidden; border-radius: 8px; margin: 0.5rem 0 0.6rem 0;">
                      <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
                    </div>
                  ` : '';
                  return `
                    <div style="border-bottom: 1px solid var(--border-card); padding-bottom: 0.75rem;">
                      <h4 style="color: var(--primary); font-size: 0.95rem; margin-bottom: 0.2rem;">
                        <a href="${placeUrl}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">📍 ${item.name} ↗</a>
                      </h4>
                      ${imageHTML}
                      <p style="font-size: 0.85rem; color: var(--text-main); line-height: 1.45;">${item.desc}</p>
                    </div>
                  `;
                }).join("")}
              </div>
            </div>
          `;
        }
      });
    }

    // Build Nature Section
    let natureHTML = "";
    if (day.nature) {
      natureHTML = `
        <div class="accordion" id="natureAccordion-${day.dayNum}">
          <div class="accordion-header" onclick="document.getElementById('natureAccordion-${day.dayNum}').classList.toggle('open')">
            <span>🌿 Fauna, Flora y Geología</span>
            <span class="accordion-icon">▼</span>
          </div>
          <div class="accordion-content">
            ${day.nature.fauna ? `<div class="nature-item"><strong>Fauna:</strong> ${day.nature.fauna}</div>` : ""}
            ${day.nature.flora ? `<div class="nature-item"><strong>Flora:</strong> ${day.nature.flora}</div>` : ""}
            ${day.nature.geology ? `<div class="nature-item"><strong>Geología:</strong> ${day.nature.geology}</div>` : ""}
          </div>
        </div>
      `;
    }

    // Accommodation Card
    let accommodationHTML = "";
    if (day.accommodation) {
      const mapsUrl = day.accommodation.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(day.accommodation.name + ', ' + day.accommodation.address)}`;
      accommodationHTML = `
        <div class="card card-glass">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
            <h3 class="card-title" style="margin: 0;">🏠 Alojamiento</h3>
            <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="badge badge-primary" style="text-decoration: none; font-size: 0.75rem;">🗺️ Google Maps ↗</a>
          </div>
          <h4 style="font-size: 1.1rem; color: var(--primary); margin-top: 0.25rem;">
            <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">${day.accommodation.name}</a>
          </h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">
            📍 <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--primary); text-decoration: underline;">${day.accommodation.address}</a>
          </p>
          <p style="font-size: 0.85rem; line-height: 1.4;">${day.accommodation.details}</p>
        </div>
      `;
    }

    // Tips Box
    let tipsHTML = "";
    if (day.tips && day.tips.length > 0) {
      tipsHTML = `
        <div class="day-tips">
          <h4>A tener en cuenta:</h4>
          <ul>
            ${day.tips.map(tip => `<li>${tip}</li>`).join("")}
          </ul>
        </div>
      `;
    }

    // Final Assembly
    dayDetailContainer.innerHTML = `
      <div class="day-header">
        <img src="${day.image || 'assets/images/image3.png'}" alt="${day.title}" class="day-header-img">
        <div class="day-header-info">
          <div class="day-header-date">${day.date} · ${day.subHeader}</div>
          <h2 class="day-header-title">${day.title}</h2>
        </div>
      </div>

      <div class="day-quick-tags">${quickTagsHTML}</div>

      <div class="day-grid">
        <!-- Left Column: Summary, Timeline, Detailed content -->
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div class="card card-glass">
            <h3 class="card-title">Resumen y Objetivo</h3>
            <p style="line-height: 1.5; font-size: 0.95rem; margin-bottom: 0.75rem;">${day.summary}</p>
            <p style="line-height: 1.5; font-size: 0.9rem; color: var(--text-muted); font-style: italic;">🎯 Objetivo: ${day.goal}</p>
          </div>

          <div class="card card-glass timeline-card">
            <h3 class="card-title">🕐 Horario sugerido</h3>
            <div class="timeline">${timelineHTML}</div>
          </div>

          ${customItineraryHTML}
          ${day.detailsText ? `<div class="card card-glass"><p style="line-height:1.5; font-size:0.9rem;">${day.detailsText}</p></div>` : ""}
          ${tipsHTML}
        </div>

        <!-- Right Column: Accommodation, Nature, City Guide -->
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${accommodationHTML}
          ${natureHTML}
          ${cityGuideHTML}
        </div>
      </div>
    `;

    // Hook up Day-Specific Tabs Click Listeners
    if (day.cityGuide) {
      const nestedTabs = dayDetailContainer.querySelectorAll(".nested-tab-btn");
      nestedTabs.forEach(tab => {
        tab.addEventListener("click", () => {
          const tabKey = tab.getAttribute("data-tab");
          const dayNum = tab.getAttribute("data-day");

          // Remove active from other buttons in the same day
          dayDetailContainer.querySelectorAll(`.nested-tab-btn[data-day="${dayNum}"]`).forEach(btn => {
            btn.classList.remove("active");
          });
          tab.classList.add("active");

          // Hide other contents
          dayDetailContainer.querySelectorAll(`.nested-tab-content`).forEach(c => {
            c.classList.remove("active");
          });
          const targetContent = dayDetailContainer.querySelector(`#tab-content-${dayNum}-${tabKey}`);
          if (targetContent) {
            targetContent.classList.add("active");
          }
        });
      });
    }

    // Initialize Section Carousels for Itinerary Attractions
    if (day.itinerary) {
      day.itinerary.forEach((sec, secIdx) => {
        if (sec.section) {
          const sectionImages = sec.items
            .filter(item => item.image)
            .map(item => ({ url: item.image, caption: item.name }));
          if (sectionImages.length > 1) {
            const holder = dayDetailContainer.querySelector(`#sec-carousel-${day.dayNum}-${secIdx}`);
            if (holder) {
              renderCarousel(holder, sectionImages);
            }
          }
        }
      });
    }
  }

  /* --- SETUP GASTRONOMY --- */
  function setupGastronomy(filterType) {
    if (!gastronomyGrid) return;
    gastronomyGrid.innerHTML = "";
    
    const gFilterBtns = document.querySelectorAll("#section-gastronomy .filter-btn");

    // Filter active tab buttons
    gFilterBtns.forEach(btn => {
      if (btn.getAttribute("data-filter") === filterType) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const gastronomyData = NORWAY_TRAVEL_DATA.gastronomy;
    let itemsToRender = [];

    if (filterType === "all" || filterType === "omnivore") {
      itemsToRender = itemsToRender.concat(gastronomyData.omnivore.map(item => ({ ...item, type: "omnivore", badgeText: "Tradicional", badgeClass: "badge-primary" })));
    }
    if (filterType === "all" || filterType === "vegetarian") {
      itemsToRender = itemsToRender.concat(gastronomyData.vegetarian.map(item => ({ ...item, type: "vegetarian", badgeText: "Vegetariano", badgeClass: "badge-accent" })));
    }
    if (filterType === "all" || filterType === "drinks") {
      itemsToRender = itemsToRender.concat(gastronomyData.drinks.map(item => ({ ...item, type: "drinks", badgeText: "Bebida", badgeClass: "badge-primary" })));
    }

    itemsToRender.forEach(item => {
      const card = document.createElement("div");
      card.className = "card card-glass item-card";
      card.innerHTML = `
        <span class="badge ${item.badgeClass} item-badge">${item.badgeText}</span>
        <h3 class="item-name">${item.name}</h3>
        <p class="item-desc">${item.desc}</p>
      `;
      gastronomyGrid.appendChild(card);
    });

    // Re-bind click event safely
    gFilterBtns.forEach(btn => {
      btn.onclick = () => {
        const filter = btn.getAttribute("data-filter");
        setupGastronomy(filter);
      };
    });
  }

  /* --- SETUP SOUVENIRS --- */
  function setupSouvenirs() {
    souvenirsGrid.innerHTML = "";
    NORWAY_TRAVEL_DATA.souvenirs.forEach((souvenir, idx) => {
      const icons = ["🧥", "🔪", "👺", "💍", "🍯", "🍫", "🏺"];
      const icon = icons[idx % icons.length];
      const card = document.createElement("div");
      card.className = "card card-glass item-card";
      card.innerHTML = `
        <span style="font-size: 2.25rem; margin-bottom: 0.5rem;">${icon}</span>
        <h3 class="item-name">${souvenir.name}</h3>
        <p class="item-desc">${souvenir.desc}</p>
      `;
      souvenirsGrid.appendChild(card);
    });
  }

  /* --- SETUP LOGISTICS --- */
  function setupLogistics() {
    // Populate driving rules
    drivingRulesList.innerHTML = "";
    NORWAY_TRAVEL_DATA.generalRules.driving.forEach(rule => {
      const li = document.createElement("li");
      li.textContent = rule;
      drivingRulesList.appendChild(li);
    });

    // Populate Parkings table
    const parkingsTableBody = document.getElementById("parkingsTableBody");
    if (parkingsTableBody && NORWAY_TRAVEL_DATA.generalRules.parkings) {
      parkingsTableBody.innerHTML = "";
      NORWAY_TRAVEL_DATA.generalRules.parkings.forEach(pkg => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><span class="badge badge-accent">${pkg.day}</span></td>
          <td><strong style="color:var(--text-main); font-weight:600;">${pkg.name}</strong></td>
          <td><span style="font-size:0.8rem; color:var(--text-muted);">📍 ${pkg.location}</span></td>
          <td><span style="font-size:0.8rem;">${pkg.notes}</span></td>
          <td><a href="${pkg.mapsUrl}" target="_blank" rel="noopener noreferrer" class="badge badge-primary">Abrir Mapa ↗</a></td>
        `;
        parkingsTableBody.appendChild(tr);
      });
    }

    // Populate Bookings table
    bookingsTableBody.innerHTML = "";
    NORWAY_TRAVEL_DATA.generalRules.bookings.forEach((booking, idx) => {
      const tr = document.createElement("tr");
      
      // Load saved state from localStorage or default to booking.reserved
      const savedState = localStorage.getItem(`booking-${idx}`);
      const isChecked = savedState !== null ? savedState === "true" : Boolean(booking.reserved);
      
      const placeMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(booking.place + ' Noruega')}`;
      tr.innerHTML = `
        <td>Día ${booking.day}</td>
        <td>
          <strong style="color:var(--text-main); font-weight:600;">${booking.item}</strong><br>
          <span style="font-size:0.75rem; color:var(--text-muted);">📍 <a href="${placeMapsUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--primary); text-decoration:underline;">${booking.place} ↗</a> · Fecha: ${booking.date}</span>
        </td>
        <td>${booking.time}</td>
        <td>${booking.price}</td>
        <td><a href="https://${booking.url}" target="_blank" class="badge ${isChecked ? 'badge-accent' : 'badge-primary'}">${isChecked ? '✓ Reservado' : 'Reservar ↗'}</a></td>
        <td class="text-center">
          <input type="checkbox" class="custom-checkbox booking-checkbox" data-index="${idx}" ${isChecked ? "checked" : ""}>
        </td>
      `;
      bookingsTableBody.appendChild(tr);
    });

    // Hook up checkboxes listeners
    const checkboxes = document.querySelectorAll(".booking-checkbox");
    checkboxes.forEach(chk => {
      chk.addEventListener("change", () => {
        const idx = chk.getAttribute("data-index");
        localStorage.setItem(`booking-${idx}`, chk.checked);
        updateBookingProgress();
        setupLogistics(); // Refresh table badge
      });
    });

    updateBookingProgress();
  }

  function updateBookingProgress() {
    const totalBookings = NORWAY_TRAVEL_DATA.generalRules.bookings.length;
    let checkedCount = 0;

    for (let i = 0; i < totalBookings; i++) {
      const savedState = localStorage.getItem(`booking-${i}`);
      const isChecked = savedState !== null ? savedState === "true" : Boolean(NORWAY_TRAVEL_DATA.generalRules.bookings[i].reserved);
      if (isChecked) {
        checkedCount++;
      }
    }

    const pct = totalBookings > 0 ? (checkedCount / totalBookings) * 100 : 0;
    
    // Update Home Widgets
    if (bookingProgressFill) {
      bookingProgressFill.style.width = `${pct}%`;
    }
    if (bookingProgressText) {
      bookingProgressText.textContent = `${checkedCount} de ${totalBookings} completadas`;
    }
  }

  /* --- SETUP APPS --- */
  function setupApps() {
    appsGrid.innerHTML = "";
    NORWAY_TRAVEL_DATA.recommendedApps.forEach(app => {
      const card = document.createElement("div");
      card.className = "card card-glass item-card";
      card.innerHTML = `
        <span class="badge badge-accent item-badge">${app.category}</span>
        <h3 class="item-name">${app.name}</h3>
        <p class="item-desc">${app.desc}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1rem; border-top:1px solid var(--border-card); padding-top:0.75rem;">
          <span style="font-size:0.75rem; color:var(--text-muted);">Compatible iOS / Android</span>
          <span style="font-size:0.8rem; color:var(--primary); font-weight:600;">Descargar 📥</span>
        </div>
      `;
      appsGrid.appendChild(card);
    });
  }

  /* --- SETUP CURRENCY CONVERTER --- */
  function setupCurrencyConverter() {
    // Bidirectional event listeners
    inputNok.addEventListener("input", () => {
      const nokVal = parseFloat(inputNok.value);
      if (isNaN(nokVal)) {
        inputEur.value = "";
      } else {
        inputEur.value = (nokVal / EXCHANGE_RATE).toFixed(2);
      }
    });

    inputEur.addEventListener("input", () => {
      const eurVal = parseFloat(inputEur.value);
      if (isNaN(eurVal)) {
        inputNok.value = "";
      } else {
        inputNok.value = (eurVal * EXCHANGE_RATE).toFixed(2);
      }
    });
  }

  /* --- SETUP ACCOMMODATIONS --- */
  function setupAccommodations() {
    const homeGrid = document.getElementById("homeAccommodationsGrid");
    const sectionGrid = document.getElementById("accommodationsSectionGrid");
    const tableBody = document.getElementById("accommodationsTableBody");

    if (!NORWAY_TRAVEL_DATA.accommodationsDetailed) return;

    // Populate Summary Table
    if (tableBody && NORWAY_TRAVEL_DATA.accommodationsSummary) {
      tableBody.innerHTML = "";
      NORWAY_TRAVEL_DATA.accommodationsSummary.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><span class="badge badge-accent">${item.day}</span></td>
          <td><strong style="color:var(--text-main); font-weight:600;">${item.city}</strong></td>
          <td><strong style="color:var(--primary); font-weight:600;">${item.name}</strong></td>
          <td><span style="font-size:0.8rem; color:var(--text-muted);">${item.details}</span></td>
          <td>${item.mapsUrl ? `<a href="${item.mapsUrl}" target="_blank" rel="noopener noreferrer" class="badge badge-primary">Abrir Mapa ↗</a>` : '—'}</td>
        `;
        tableBody.appendChild(tr);
      });
    }

    // Populate Card Grids (both Home screen & Dedicated Section screen)
    const targets = [homeGrid, sectionGrid].filter(Boolean);
    targets.forEach(grid => {
      grid.innerHTML = "";
      NORWAY_TRAVEL_DATA.accommodationsDetailed.forEach(acc => {
        const card = document.createElement("div");
        card.className = "card card-glass accommodation-home-card";
        card.style.cssText = "display: flex; flex-direction: column; overflow: hidden; padding: 0;";

        const amenitiesListHTML = acc.amenities.map(item => `
          <li style="font-size: 0.8rem; color: var(--text-main); display: flex; align-items: center; gap: 0.35rem; margin-bottom: 0.25rem;">
            ${item}
          </li>
        `).join("");

        // Build Carousel Header
        const carouselHeader = document.createElement("div");
        carouselHeader.style.cssText = "position: relative; width: 100%; overflow: hidden;";

        const carouselEl = document.createElement("div");
        const galleryImages = acc.gallery || [{ url: acc.image, caption: acc.name }];
        renderCarousel(carouselEl, galleryImages);

        const badgeDays = document.createElement("span");
        badgeDays.className = "badge badge-accent";
        badgeDays.style.cssText = "position: absolute; top: 0.75rem; left: 0.75rem; background: rgba(11, 15, 25, 0.85); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2); color: #fff; z-index: 10;";
        badgeDays.textContent = acc.stayDays;

        const badgeLoc = document.createElement("span");
        badgeLoc.className = "badge badge-primary";
        badgeLoc.style.cssText = "position: absolute; top: 0.75rem; right: 0.75rem; background: rgba(14, 165, 233, 0.9); color: #fff; z-index: 10;";
        badgeLoc.innerHTML = `📍 ${acc.location}`;

        carouselHeader.appendChild(carouselEl);
        carouselHeader.appendChild(badgeDays);
        carouselHeader.appendChild(badgeLoc);
        card.appendChild(carouselHeader);

        const cardBody = document.createElement("div");
        cardBody.style.cssText = "padding: 1.25rem; display: flex; flex-direction: column; flex-grow: 1; gap: 0.75rem;";
        cardBody.innerHTML = `
          <div>
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.25rem;">
              <a href="${acc.mapsUrl}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">${acc.name} ↗</a>
            </h3>
            <p style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.3;">📍 ${acc.address}</p>
          </div>

          <div style="background: rgba(var(--primary-rgb), 0.08); padding: 0.5rem 0.75rem; border-radius: 6px; border-left: 3px solid var(--primary);">
            <div style="font-size: 0.8rem; font-weight: 600; color: var(--primary);">${acc.roomType}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">${acc.mealPlan}</div>
          </div>

          <p style="font-size: 0.85rem; color: var(--text-main); line-height: 1.45;">${acc.description}</p>

          <div style="border-top: 1px solid var(--border-card); padding-top: 0.75rem; margin-top: auto;">
            <h4 style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent); margin-bottom: 0.5rem;">✨ Equipamiento y Servicios:</h4>
            <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 0.2rem;">
              ${amenitiesListHTML}
            </ul>
          </div>

          <div style="margin-top: 0.5rem;">
            <a href="${acc.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="width: 100%; text-decoration: none;">
              🗺️ Ver en Google Maps ↗
            </a>
          </div>
        `;
        card.appendChild(cardBody);
        grid.appendChild(card);
      });
    });
  }

  /* --- REUSABLE CAROUSEL HELPER --- */
  function renderCarousel(containerEl, images) {
    if (!containerEl || !images || images.length === 0) return;

    containerEl.className = "app-carousel";
    let currentIdx = 0;

    const slidesHTML = images.map((imgObj) => {
      const url = typeof imgObj === "string" ? imgObj : imgObj.url;
      const caption = typeof imgObj === "object" && imgObj.caption ? imgObj.caption : "";
      return `
        <div class="app-carousel-slide">
          <img src="${url}" alt="${caption || 'Foto'}" loading="lazy">
          ${caption ? `<div class="app-carousel-caption">${caption}</div>` : ''}
        </div>
      `;
    }).join("");

    const dotsHTML = images.length > 1 ? `
      <div class="app-carousel-dots">
        ${images.map((_, idx) => `<span class="app-carousel-dot ${idx === 0 ? 'active' : ''}" data-idx="${idx}"></span>`).join('')}
      </div>
    ` : '';

    const navBtnsHTML = images.length > 1 ? `
      <button class="app-carousel-btn prev" aria-label="Anterior">❮</button>
      <button class="app-carousel-btn next" aria-label="Siguiente">❯</button>
    ` : '';

    containerEl.innerHTML = `
      <div class="app-carousel-track" style="transform: translateX(0%);">
        ${slidesHTML}
      </div>
      ${navBtnsHTML}
      ${dotsHTML}
    `;

    const track = containerEl.querySelector(".app-carousel-track");
    const dots = containerEl.querySelectorAll(".app-carousel-dot");
    const prevBtn = containerEl.querySelector(".app-carousel-btn.prev");
    const nextBtn = containerEl.querySelector(".app-carousel-btn.next");

    function goToSlide(idx) {
      if (idx < 0) idx = images.length - 1;
      if (idx >= images.length) idx = 0;
      currentIdx = idx;
      track.style.transform = `translateX(-${currentIdx * 100}%)`;
      dots.forEach((d, i) => {
        d.classList.toggle("active", i === currentIdx);
      });
    }

    if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); goToSlide(currentIdx - 1); });
    if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); goToSlide(currentIdx + 1); });

    dots.forEach(d => {
      d.addEventListener("click", (e) => {
        e.stopPropagation();
        goToSlide(parseInt(d.getAttribute("data-idx")));
      });
    });

    let touchStartX = 0;
    containerEl.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    containerEl.addEventListener("touchend", (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 40) goToSlide(currentIdx + 1);
      if (touchEndX > touchStartX + 40) goToSlide(currentIdx - 1);
    }, { passive: true });
  }

  /* --- SETUP WEATHER / METEOROLOGÍA --- */
  function setupWeather() {
    const weatherGrid = document.getElementById("weatherGrid");
    const weatherFilterBtns = document.querySelectorAll(".weather-filter-btn");
    const btnRefreshWeather = document.getElementById("btnRefreshWeather");
    const weatherLastUpdatedText = document.getElementById("weatherLastUpdatedText");

    if (!weatherGrid || !NORWAY_TRAVEL_DATA.weatherDestinations) return;

    let currentFilter = "all";
    let cachedWeatherData = {};

    function getWeatherCodeInfo(code) {
      if (code === 0) return { icon: "☀️", text: "Soleado" };
      if ([1, 2].includes(code)) return { icon: "🌤️", text: "Parcialmente nublado" };
      if (code === 3) return { icon: "⛅", text: "Nublado" };
      if ([45, 48].includes(code)) return { icon: "🌫️", text: "Niebla" };
      if ([51, 53, 55, 56, 57].includes(code)) return { icon: "🌦️", text: "Llovizna" };
      if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { icon: "🌧️", text: "Lluvia" };
      if ([71, 73, 75, 77, 85, 86].includes(code)) return { icon: "🌨️", text: "Nieve" };
      if ([95, 96, 99].includes(code)) return { icon: "⛈️", text: "Tormenta" };
      return { icon: "🌤️", text: "Variable" };
    }

    async function fetchWeatherForDestinations() {
      if (weatherLastUpdatedText) {
        weatherLastUpdatedText.textContent = "Obteniendo datos meteorológicos en tiempo real...";
      }

      await Promise.all(
        NORWAY_TRAVEL_DATA.weatherDestinations.map(async (dest) => {
          try {
            const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${dest.lat}&longitude=${dest.lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&timezone=Europe%2FOslo`);
            if (!res.ok) throw new Error("API error");
            const data = await res.json();
            cachedWeatherData[dest.id] = data.daily;
          } catch (err) {
            console.warn(`Weather fetch fallback for ${dest.name}`, err);
          }
        })
      );

      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      if (weatherLastUpdatedText) {
        weatherLastUpdatedText.textContent = `Última actualización: hoy a las ${timeStr} · Próximo auto-refresco en 30 min`;
      }

      renderWeatherCards();
    }

    function renderWeatherCards() {
      weatherGrid.innerHTML = "";
      
      const filteredDests = NORWAY_TRAVEL_DATA.weatherDestinations.filter(d => {
        if (currentFilter === "all") return true;
        return d.category === currentFilter;
      });

      filteredDests.forEach(dest => {
        const card = document.createElement("div");
        card.className = "card card-glass weather-card";
        card.style.cssText = "display: flex; flex-direction: column; overflow: hidden; padding: 0;";

        const liveDaily = cachedWeatherData[dest.id];
        
        let daysHTML = "";
        if (liveDaily && liveDaily.time && liveDaily.time.length >= 3) {
          for (let i = 0; i < 3; i++) {
            const dateObj = new Date(liveDaily.time[i]);
            const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
            const dayLabel = i === 0 ? "Hoy" : i === 1 ? "Mañana" : `${dayNames[dateObj.getDay()]} ${dateObj.getDate()}`;
            
            const code = liveDaily.weathercode[i];
            const info = getWeatherCodeInfo(code);
            const tMax = Math.round(liveDaily.temperature_2m_max[i]);
            const tMin = Math.round(liveDaily.temperature_2m_min[i]);
            const rain = (liveDaily.precipitation_sum[i] || 0).toFixed(1);
            const wind = Math.round(liveDaily.windspeed_10m_max[i] || 0);

            daysHTML += `
              <div style="background: rgba(var(--primary-rgb), 0.05); padding: 0.65rem 0.4rem; border-radius: 8px; text-align: center; border: 1px solid var(--border-card); flex: 1;">
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--primary); text-transform: uppercase; margin-bottom: 0.2rem;">${dayLabel}</div>
                <div style="font-size: 1.7rem; line-height: 1.1; margin: 0.2rem 0;">${info.icon}</div>
                <div style="font-size: 0.68rem; color: var(--text-muted); line-height: 1.2; height: 2.1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 0.2rem;">${info.text}</div>
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.15rem;">${tMax}° <span style="font-size:0.75rem; font-weight:400; color:var(--text-muted);">${tMin}°</span></div>
                <div style="font-size: 0.68rem; color: var(--text-muted);">🌧️ ${rain} mm</div>
                <div style="font-size: 0.68rem; color: var(--text-muted);">💨 ${wind} km/h</div>
              </div>
            `;
          }
        } else {
          // Fallback realistic display
          const fallbackDays = [
            { label: "Hoy", icon: "🌤️", text: "Parcialmente nublado", tMax: 19, tMin: 11, rain: 0.2, wind: 12 },
            { label: "Mañana", icon: "☀️", text: "Soleado", tMax: 21, tMin: 12, rain: 0.0, wind: 10 },
            { label: "Pasado Mañana", icon: "⛅", text: "Nublado", tMax: 18, tMin: 10, rain: 1.5, wind: 15 }
          ];
          daysHTML = fallbackDays.map(d => `
            <div style="background: rgba(var(--primary-rgb), 0.05); padding: 0.65rem 0.4rem; border-radius: 8px; text-align: center; border: 1px solid var(--border-card); flex: 1;">
              <div style="font-size: 0.75rem; font-weight: 700; color: var(--primary); text-transform: uppercase; margin-bottom: 0.2rem;">${d.label}</div>
              <div style="font-size: 1.7rem; line-height: 1.1; margin: 0.2rem 0;">${d.icon}</div>
              <div style="font-size: 0.68rem; color: var(--text-muted); line-height: 1.2; height: 2.1rem; display: flex; align-items: center; justify-content: center; margin-bottom: 0.2rem;">${d.text}</div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.15rem;">${d.tMax}° <span style="font-size:0.75rem; font-weight:400; color:var(--text-muted);">${d.tMin}°</span></div>
              <div style="font-size: 0.68rem; color: var(--text-muted);">🌧️ ${d.rain} mm</div>
              <div style="font-size: 0.68rem; color: var(--text-muted);">💨 ${d.wind} km/h</div>
            </div>
          `).join("");
        }

        card.innerHTML = `
          <div style="position: relative; height: 130px; width: 100%; overflow: hidden;">
            <img src="${dest.image || 'assets/images/image3.png'}" alt="${dest.name}" style="width: 100%; height: 100%; object-fit: cover;">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(11,15,25,0.9), transparent 60%);"></div>
            <span class="badge badge-accent" style="position: absolute; top: 0.75rem; left: 0.75rem; background: rgba(11,15,25,0.85); backdrop-filter: blur(8px); color: #fff;">
              ${dest.days}
            </span>
            <div style="position: absolute; bottom: 0.6rem; left: 0.8rem; right: 0.8rem;">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: #fff; margin: 0;">${dest.name}</h3>
              <span style="font-size: 0.75rem; color: rgba(255,255,255,0.8);">${dest.region}</span>
            </div>
          </div>

          <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.85rem; flex-grow: 1;">
            <div style="display: flex; gap: 0.5rem; justify-content: space-between;">
              ${daysHTML}
            </div>

            <div style="background: rgba(var(--accent-rgb), 0.08); padding: 0.6rem 0.75rem; border-radius: 6px; border-left: 3px solid var(--accent); font-size: 0.8rem; color: var(--text-main); line-height: 1.35;">
              <strong>💡 Consejo de Ropa:</strong> ${dest.clothingTip}
            </div>
          </div>
        `;
        weatherGrid.appendChild(card);
      });
    }

    // Filter listeners
    weatherFilterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        weatherFilterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-weather-filter");
        renderWeatherCards();
      });
    });

    // Refresh button listener
    if (btnRefreshWeather) {
      btnRefreshWeather.addEventListener("click", () => {
        fetchWeatherForDestinations();
      });
    }

    // Initial fetch & set interval 30 min (1800000 ms)
    fetchWeatherForDestinations();
    setInterval(fetchWeatherForDestinations, 30 * 60 * 1000);
  }

  /* --- SETUP ONLINE TRANSLATOR --- */
  function setupTranslator() {
    const transSourceText = document.getElementById("transSourceText");
    const transTargetText = document.getElementById("transTargetText");
    const btnSwapLang = document.getElementById("btnSwapLang");
    const btnClearTrans = document.getElementById("btnClearTrans");
    const btnCopyTrans = document.getElementById("btnCopyTrans");
    const transSourceLangLabel = document.getElementById("transSourceLangLabel");
    const transTargetLangLabel = document.getElementById("transTargetLangLabel");
    const transChips = document.querySelectorAll(".trans-chip");

    if (!transSourceText || !transTargetText) return;

    let langPair = "no|es"; // Default: Norwegian to Spanish
    let debounceTimer = null;

    const localDict = {
      "takk": "Gracias",
      "tusen takk": "Muchas gracias",
      "god morgen": "Buenos días",
      "hei": "Hola",
      "hallo": "Hola",
      "hvor er toalettet?": "¿Dónde está el baño?",
      "hvor er toalettet": "¿Dónde está el baño?",
      "hvor mye koster det?": "¿Cuánto cuesta esto?",
      "hvor mye koster det": "¿Cuánto cuesta esto?",
      "parkering forbudt": "Prohibido aparcar",
      "røykelaks og egg": "Salmón ahumado y huevo",
      "kan jeg betale med kort?": "¿Puedo pagar con tarjeta?",
      "har dere noe vegetaralternativ?": "¿Tienen alguna opción vegetariana?",
      "skrei": "Bacalao ártico noruego salvaje",
      "brunost": "Queso marrón dulce caramelizado"
    };

    async function performTranslation() {
      const query = transSourceText.value.trim();
      if (!query) {
        transTargetText.innerHTML = `<span style="color: var(--text-muted); font-style: italic;">La traducción aparecerá aquí automáticamente...</span>`;
        return;
      }

      const normQuery = query.toLowerCase();
      if (langPair === "no|es" && localDict[normQuery]) {
        transTargetText.innerHTML = `<strong>${localDict[normQuery]}</strong>`;
        return;
      }

      transTargetText.innerHTML = `<span style="color: var(--primary);">Traduciendo... ⏳</span>`;

      try {
        const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(query)}&langpair=${langPair}`);
        if (!res.ok) throw new Error("API Network Error");
        const data = await res.json();
        if (data && data.responseData && data.responseData.translatedText) {
          transTargetText.innerHTML = `<strong>${data.responseData.translatedText}</strong>`;
        } else {
          transTargetText.innerHTML = `<span style="color: var(--accent);">No se pudo traducir.</span>`;
        }
      } catch (err) {
        console.warn("Translation API error, fallback check", err);
        if (localDict[normQuery]) {
          transTargetText.innerHTML = `<strong>${localDict[normQuery]}</strong>`;
        } else {
          transTargetText.innerHTML = `<span style="color: var(--text-muted);">Sin conexión. Verifica tu red e inténtalo de nuevo.</span>`;
        }
      }
    }

    transSourceText.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(performTranslation, 350);
    });

    if (btnSwapLang) {
      btnSwapLang.addEventListener("click", () => {
        if (langPair === "no|es") {
          langPair = "es|no";
          transSourceLangLabel.innerHTML = "🇪🇸 Español";
          transTargetLangLabel.innerHTML = "🇳🇴 Noruego (Norsk)";
          transSourceText.placeholder = "Escribe o pega texto en español... (ej. ¿Dónde podemos aparcar el coche?)";
        } else {
          langPair = "no|es";
          transSourceLangLabel.innerHTML = "🇳🇴 Noruego (Norsk)";
          transTargetLangLabel.innerHTML = "🇪🇸 Español";
          transSourceText.placeholder = "Escribe o pega texto en noruego aquí... (ej. Hvor er toalettet? / Parkering forbudt)";
        }
        if (transSourceText.value.trim()) {
          performTranslation();
        }
      });
    }

    if (btnClearTrans) {
      btnClearTrans.addEventListener("click", () => {
        transSourceText.value = "";
        transTargetText.innerHTML = `<span style="color: var(--text-muted); font-style: italic;">La traducción aparecerá aquí automáticamente...</span>`;
      });
    }

    if (btnCopyTrans) {
      btnCopyTrans.addEventListener("click", () => {
        const textToCopy = transTargetText.innerText;
        if (textToCopy && !textToCopy.includes("aparecerá aquí")) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = btnCopyTrans.textContent;
            btnCopyTrans.textContent = "✓ ¡Copiado!";
            setTimeout(() => { btnCopyTrans.textContent = originalText; }, 1500);
          });
        }
      });
    }

    transChips.forEach(chip => {
      chip.addEventListener("click", () => {
        const text = chip.getAttribute("data-text");
        if (langPair !== "no|es" && btnSwapLang) {
          btnSwapLang.click();
        }
        transSourceText.value = text;
        performTranslation();
      });
    });

    // Google Lens & Camera Translation Launchers
    const btnLaunchGoogleLens = document.getElementById("btnLaunchGoogleLens");
    const btnScanPhotoApp = document.getElementById("btnScanPhotoApp");
    const lensPhotoInput = document.getElementById("lensPhotoInput");

    if (btnLaunchGoogleLens) {
      btnLaunchGoogleLens.addEventListener("click", () => {
        const isAndroid = /Android/i.test(navigator.userAgent);
        if (isAndroid) {
          window.location.href = "intent://lens/#Intent;scheme=googlelens;package=com.google.ar.lens;end";
          setTimeout(() => {
            window.open("https://translate.google.com/?sl=no&tl=es&op=images", "_blank");
          }, 800);
        } else {
          window.open("https://translate.google.com/?sl=no&tl=es&op=images", "_blank");
        }
      });
    }

    if (btnScanPhotoApp && lensPhotoInput) {
      btnScanPhotoApp.addEventListener("click", () => {
        lensPhotoInput.click();
      });

      lensPhotoInput.addEventListener("change", () => {
        if (lensPhotoInput.files && lensPhotoInput.files[0]) {
          window.open("https://translate.google.com/?sl=no&tl=es&op=images", "_blank");
        }
      });
    }
  }

});
