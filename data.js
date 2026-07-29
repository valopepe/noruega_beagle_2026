const NORWAY_TRAVEL_DATA = {
  tripInfo: {
    title: "Viaje a Noruega",
    subtitle: "Itinerario detallado · Oslo — Jotunheimen — Fiordos — Bergen — Oslo",
    dates: "1 – 10 de agosto de 2026 · 10 días · 4 adultos",
    lastUpdated: "Revisado y verificado — última actualización: julio de 2026"
  },
  days: [
    {
      dayNum: 1,
      title: "Día 1 — Llegada a Oslo",
      date: "SÁBADO, 1 DE AGOSTO DE 2026",
      subHeader: "Aeropuerto de Oslo (Gardermoen)",
      image: "assets/images/image3.png",
      accommodation: {
        name: "Thon Hotel Oslo Airport",
        address: "Balder Allè 22, 2060 Gardermoen, Noruega",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Thon+Hotel+Oslo+Airport,+Balder+All%C3%A8+22,+2060+Gardermoen,+Noruega",
        details: "2 habitaciones dobles (twin) con desayuno incluido · hotel ecológico a 7 km del aeropuerto"
      },
      summary: "Llegada al aeropuerto de Oslo (Gardermoen), recogida del coche de alquiler y traslado inmediato al hotel situado en las inmediaciones del aeropuerto para descansar tras el vuelo.",
      goal: "Resolver la logística inicial del viaje (vehículo y descanso) sin el estrés de entrar en la ciudad, dejando todo listo para empezar la ruta por carretera a la mañana siguiente.",
      nature: {
        flora: "Composiciones fitocenóticas dominadas por el bosque boreal (taiga) de coníferas.",
        geology: "Presencia de depósitos morénicos y sedimentación glaciar correspondientes al Pleistoceno."
      },
      travelTimes: [
        { from: "Terminal Aeropuerto Oslo (OSL)", to: "Thon Hotel Oslo Airport", desc: "≈ 10 km · 12 min en coche / autobús shuttle" }
      ],
      itinerary: [
        { time: "23:55", activity: "Llegada al Aeropuerto de Oslo (OSL) el sábado 01/08." },
        { time: "00:30", activity: "Recogida del coche de alquiler tras el equipaje." },
        { time: "Noche", activity: "Check-in en Thon Hotel Oslo Airport." }
      ],
      detailsText: "El hotel dispone de wifi gratuita y gimnasio de acceso gratuito. Si llegáis cansados, se puede solicitar el traslado del hotel desde el aeropuerto (con suplemento) para evitar complicaciones.",
      cityGuide: {
        intro: "Llegada a Oslo (Aeropuerto de Oslo-Gardermoen). Traslado al hotel cercano, recogida del coche de alquiler y primer contacto con Noruega.",
        shopping: "<p><a href='https://www.google.com/maps/search/?api=1&query=Coop+Extra+Gardermoen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Coop Extra Gardermoen ↗</a> y tiendas del aeropuerto de Gardermoen para provisiones iniciales, agua y snacks para el trayecto.</p>",
        breakfast: "<p>Buffet de desayuno completo incluido en el <a href='https://www.google.com/maps/search/?api=1&query=Thon+Hotel+Oslo+Airport+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Thon Hotel Oslo Airport ↗</a> (amplia variedad de opciones frías, calientes, frutas y alternativas vegetarianas).</p>",
        eating: "<p>Restaurante y bistró del <a href='https://www.google.com/maps/search/?api=1&query=Thon+Hotel+Oslo+Airport+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Thon Hotel Oslo Airport ↗</a> (menú buffet y a la carta con platos noruegos e internacionales, opciones vegetarianas adaptadas).</p><p>Restaurantes y cafeterías en la terminal del aeropuerto de Gardermoen.</p>",
        drinks: "<p>Bar y lounge del hotel para una primera cerveza de bienvenida o café relajado tras el vuelo.</p>",
        whatToSee: "<p><a href='https://www.google.com/maps/search/?api=1&query=Gardermoen+Kulturpark+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Parque Cultural de Gardermoen ↗</a> y senderos llanos en los alrededores del hotel para estirar las piernas tras la llegada.</p>"
      },
      tips: [
        "Noruega tiene numerosos radares fijos, habitualmente señalizados con antelación, y las multas por exceso de velocidad son muy elevadas. Encontraréis el detalle completo de normas de conducción en el apartado de 'Consideraciones generales' — es la única nota que no repetiremos cada día."
      ],
      schedule: [
        { time: "06:51–09:48", desc: "🚄 AVE Ida: Santiago de Compostela → Madrid Chamartín.", isFixed: true },
        { time: "20:30–23:55", desc: "✈️ Vuelo Madrid-Barajas (MAD) → Oslo-Gardermoen (OSL) [Norwegian DY 1719].", isFixed: true },
        { time: "00:30 (02/08)", desc: "🚗 Recogida del Coche de Alquiler en Oslo Airport Gardermoen (Toyota Yaris Cross 4x4).", isFixed: true },
        { time: "Noche", desc: "Alojamiento en el Thon Hotel Oslo Airport." }
      ]
    },
    {
      dayNum: 2,
      title: "Día 2 — Hacia las montañas: Beitostølen y el Lago de Gjende",
      date: "DOMINGO, 2 DE AGOSTO DE 2026",
      subHeader: "Oslo (Gardermoen) → Beitostølen → Lago de Gjende",
      image: "assets/images/image4.png",
      accommodation: {
        name: "Hovi Cabins",
        address: "Bygdinvegen 3760, 2953 Beitostølen, Noruega",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hovi+Cabins,+Bygdinvegen+3760,+2953+Beitost%C3%B8len,+Noruega",
        details: "1 cabaña para 4 adultos (2 camas individuales + 1 litera) · comida no incluida"
      },
      summary: "El viaje en coche comienza dirigiéndose hacia el noroeste para adentrarse en el Parque Nacional de Jotunheimen. La ruta incluye una experiencia en barco por las aguas esmeraldas del lago Gjende antes de instalarse en la cabaña.",
      goal: "Hacer la transición de las llanuras del este a la alta montaña noruega, experimentando el primer gran impacto natural del viaje en el corazón de Jotunheimen.",
      nature: {
        flora: "Ecosistemas de tundra alpina con presencia de taxones especialistas como Ranunculus glacialis.",
        geology: "Manifestaciones de la orogenia caledoniana y unidades tectónicas alóctonas (estructuras de cabalgamiento o nappes)."
      },
      travelTimes: [
        { from: "Thon Hotel Oslo Airport", to: "Museo Kistefos / The Twist", desc: "≈ 65 km · 55 min en coche por la E16" },
        { from: "Museo Kistefos", to: "Iglesia de Madera de Valdres", desc: "≈ 105 km · 1 h 30 min por la E16" },
        { from: "Iglesia de Valdres", to: "Fagernes (Museo Folclórico)", desc: "≈ 30 km · 30 min en coche" },
        { from: "Fagernes", to: "Beitostølen (Cabaña Hovi)", desc: "≈ 40 km · 40 min de ascenso montañoso" },
        { from: "Beitostølen", to: "Lago Gjende (Gjendesheim)", desc: "≈ 34 km · 35 min por la carretera Fv51" }
      ],
      itinerary: [
        {
          section: "Paradas culturales en ruta",
          items: [
            { name: "Kistefos Museum y 'The Twist' (Jevnaker)", image: "assets/images/day2_the_twist_kistefos.png", desc: "Poco más de una hora desde el aeropuerto. Antiguo aserradero convertido en uno de los parques de esculturas contemporáneas más importantes de Europa. Su joya es 'The Twist', diseñado por el célebre estudio BIG (Bjarke Ingels Group): un museo, escultura y puente peatonal que cruza el río Randselva girando 90° sobre sí mismo. Abre entre 10:00-11:00 en verano; entrada ≈ 200 NOK (18-20 €); calculad 1,5 a 2 h de visita." },
            { name: "Museo Folclórico de Valdres (Fagernes)", image: "assets/images/dia2-valdres.png", desc: "≈ 45 min antes de llegar a la cabaña. Cuarto museo al aire libre más grande de Noruega, con más de 100 edificios históricos de madera (muchos con tejado vegetal de hierba) trasladados desde toda la región de Valdres. Podréis pasear entre granjas del siglo XVI, descubrir la artesanía tradicional y hacer la parada del almuerzo en su cafetería con platos tradicionales noruegos; entrada ≈ 150 NOK (13 €)." }
          ]
        },
        {
          section: "Sitios que ver en Beitostølen y alrededores",
          items: [
            { name: "Capilla de las Luces (Lyskapellet)", image: "assets/images/Dia2-Lyskapellet.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lyskapellet+Beitostolen", desc: "Singular capilla ecuménica de madera y cristal a 2 km de Beitostølen, perfectamente integrada en el bosque alpino. Destaca por sus magníficas vidrieras y su ambiente sereno de paz." },
            { name: "Liastølen (Granjas tradicionales de montaña)", image: "assets/images/dia2-Liastølen.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Liastolen+Beitostolen", desc: "Asentamiento tradicional de pastoreo de alta montaña (seter) cercano a Beitostølen. Un recorrido fascinante entre cabañas históricas y prados alpinos." }
          ]
        },
        {
          section: "Navegación y paseos cortos en Gjende",
          items: [
            { name: "⚠️ RESERVA PREVIA OBLIGATORIA — Parking + Shuttle + Barco", bookingUrl: "https://visitgjende.no/", desc: "Es imprescindible reservar con antelación en visitgjende.no el pack completo: parking Gjendeosen-Reinsvangen (Onepark) + lanzadera shuttle + billete de barco. Sin reserva previa no podréis embarcar. Reservad cuanto antes ya que las plazas son limitadas en agosto." },
            { name: "🅿️ Parking: Gjendeosen-Reinsvangen | Onepark", mapsUrl: "https://www.google.com/maps/place/Reinsvangen+parkering/@61.4863745,8.8275523,17z/data=!3m1!4b1!4m6!3m5!1s0x46153f9a3ff2dd47:0x114d3f7e1a621516!8m2!3d61.486372!4d8.8324232!16s%2Fg%2F11g2xrpwkf?entry=ttu", desc: "Aparcar aquí obligatoriamente (reservado en visitgjende.no) — no se puede aparcar en el muelle de Gjendesheim. A ≈1,7 km del embarcadero. Coordenadas: 61.486372, 8.8324232. Desde el parking tomad la lanzadera gratuita (shuttle Gjendebåtene) hasta el muelle — calculad 20-30 min extra." },
            { name: "Crucero por las Aguas Esmeralda del Lago Gjende", image: "assets/images/day2_gjende_lake.png", desc: "IDA: Gjendesheim (15:25) -> Gjendebu (16:10). VUELTA: Gjendebu (16:25) -> Gjendesheim (17:15). Navegación inolvidable rodeada de imponentes montañas alpinas. El margen de 15 minutos en Gjendebu es solo para embarque/desembarque.<br><br>🅿️ <b>Dónde aparcar:</b> Parking disuasorio de <b>Gjendeosen-Reinsvangen (Onepark)</b> (reserva previa obligatoria en visitgjende.no). Prohibido aparcar en el muelle.<br>⚓ <b>Dónde cogerlo:</b> En el <b>Muelle de Gjendesheim (Gjendesheim brygge)</b>. Desde el parking de Reinsvangen se toma el autobús lanzadera gratuito (shuttle Gjendebåtene, 5 min) que os lleva al embarcadero (ir con 20-30 min de margen)." }
          ]
        }
      ],
      cityGuide: {
        shopping: "<p><a href='https://www.google.com/maps/search/?api=1&query=SPAR+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 SPAR Beitostølen ↗</a> (calle Bygdinvegen): cuenta con mostrador de comida fresca, platos para llevar, barra de ensaladas y productos locales.</p><p><a href='https://www.google.com/maps/search/?api=1&query=Kiwi+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Kiwi Beitostølen ↗</a> y <a href='https://www.google.com/maps/search/?api=1&query=Coop+Extra+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Coop Extra ↗</a> también disponibles (Kiwi es el más económico).</p>",
        breakfast: "<p><a href='https://www.google.com/maps/search/?api=1&query=Cafeen+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Caféen Beitostølen ↗</a>: bistró acogedor con buen café y platos vegetarianos adaptados.</p>",
        eating: "<p><a href='https://www.google.com/maps/search/?api=1&query=Peppes+Pizza+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Peppes Pizza ↗</a> (menú vegetariano/vegano adaptado, 250-400 NOK/persona).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Lodge+900+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Lodge 900 ↗</a> (estilo alpino, menús elaborados, 300-500 NOK/persona).</p>",
        drinks: "<p><a href='https://www.google.com/maps/search/?api=1&query=Svingen+Pub+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Svingen Pub ↗</a> (pub rústico de montaña, cervezas locales, 80-120 NOK).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Cafeen+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Caféen ↗</a> (gran selección de vinos y coctelería, 100-150 NOK/copa).</p>",
        whatToSee: "<p><a href='https://www.google.com/maps/search/?api=1&query=Lyskapellet+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Capilla de las Luces (Lyskapellet) ↗</a> a 2 km.</p><p><a href='https://www.google.com/maps/search/?api=1&query=Liastolen+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Liastølen ↗</a> (granjas tradicionales).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Hegge+Stave+Church+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Iglesia de madera de Hegge ↗</a> (del siglo XIII, a 11 km).</p>",
        adrenaline: "<p><a href='https://www.google.com/maps/search/?api=1&query=Beitostolen+Sommerpark+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Beitostølen Sommerpark ↗</a> (Bobsleigh de verano a 70-80 NOK/viaje, Karts de montaña Olabilløypa).</p><p>Rutas a caballo con caballos islandeses en <a href='https://www.google.com/maps/search/?api=1&query=Fjellrittet+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Fjellrittet ↗</a>.</p>"
      },
      tips: [
        "⚠️ RESERVA OBLIGATORIA: Antes del viaje hay que reservar online en visitgjende.no el parking Gjendeosen-Reinsvangen + shuttle lanzadera + billete de barco. Sin reserva previa no podréis embarcar. Las plazas son muy limitadas en agosto.",
        "La meteorología en Jotunheimen es impredecible. Llevad siempre una mochila con chaqueta impermeable, ropa de abrigo por capas, agua y algo de comida, incluso si solo hacéis la excursión en barco."
      ],
      schedule: [
        { time: "08:30–09:30", desc: "Desayuno tranquilo en Gardermoen y recogida del coche." },
        { time: "09:30–12:45", desc: "Viaje hasta Beitostølen, con paradas culturales recomendadas (Kistefos o Valdres)." },
        { time: "12:45–13:45", desc: "Check-in en cabañas Hovi y compra de provisiones en SPAR." },
        { time: "13:45–14:15", desc: "Conducción desde la cabaña hasta el parking de Gjendesheim." },
        { time: "14:15–15:00", desc: "Aparcamiento en Reinsvangen, bus lanzadera al muelle." },
        { time: "15:25–17:15", desc: "⛴️ Ferry Lago Gjende: Gjendesheim → Gjendebu (15:25) / Gjendebu → Gjendesheim (16:25).", isFixed: true },
        { time: "19:00", desc: "Regreso a la cabaña en Beitostølen para cenar y descansar." }
      ]
    },
    {
      dayNum: 3,
      title: "Día 3 — Naturaleza activa en el Parque Nacional de Jotunheimen",
      date: "LUNES, 3 DE AGOSTO DE 2026",
      subHeader: "Beitostølen y Parque Nacional de Jotunheimen",
      image: "assets/images/image5.png",
      accommodation: {
        name: "Hovi Cabins",
        address: "Bygdinvegen 3760, 2953 Beitostølen, Noruega",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hovi+Cabins,+Bygdinvegen+3760,+2953+Beitost%C3%B8len,+Noruega",
        details: "segunda noche · comida no incluida"
      },
      summary: "Un día dedicado a explorar los alrededores de Beitostølen con calma. El plan principal es una ruta de senderismo muy accesible bordeando el inmenso lago Bygdin.",
      goal: "Disfrutar de la naturaleza a un ritmo pausado, respirar el aire puro de la montaña y aprovechar las comodidades de la cabaña para fomentar el espíritu de grupo.",
      nature: {
        flora: "Líquenes y musgos pioneros de la tundra alpina.",
        fauna: "Potencial detección de ejemplares de Rangifer tarandus (renos) en nichos ecológicos de montaña.",
        geology: "Evidencias geomorfológicas derivadas de procesos de erosión glaciar cuaternaria."
      },
      travelTimes: [
        { from: "Cabaña Hovi (Beitostølen)", to: "Lago Bygdin (Bygdin Høyfjellshotell)", desc: "≈ 12 km · 15 min por la carretera Fv51" },
        { from: "Bygdin Høyfjellshotell", to: "Ruta Senderismo Lago Bygdin (Ida y Vuelta)", desc: "8 km totales · 2 h 30 min a pie" },
        { from: "Lago Bygdin", to: "Beitostølen Skisenter / Sommerpark", desc: "≈ 12 km · 15 min de regreso" }
      ],
      itinerary: [
        {
          section: "Planes del Día",
          items: [
            { name: "PLAN PRINCIPAL: Senderismo panorámico y accesible (Ruta del lago Bygdin)", image: "assets/images/day3_jotunheimen.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bygdin+Hoyfjellshotell+Parkering", desc: "Ruta de senderismo suave y sumamente panorámica de 8 km (ida y vuelta) bordeando la orilla oriental y norte del inmenso lago Bygdin, al pie de las cumbres de Jotunheimen.<br><br><b>🗺️ Detalles del recorrido:</b><br>• <b>Distancia total:</b> 8 km (4 km de ida / 4 km de vuelta).<br>• <b>Duración estimada:</b> 2 h 30 min – 3 h a ritmo relajado.<br>• <b>Desnivel acumulado:</b> Prácticamente llano (+40 m).<br>• <b>Terreno:</b> Sendero de tierra, hierba y tramos pedregosos de playa de lago. Se recomienda calzado de montaña cómodo o zapatillas de trekking impermeables.<br><br>🅿️ <b>Dónde aparcar:</b><br>En el aparcamiento oficial <b><a href='https://www.google.com/maps/search/?api=1&query=Bygdin+Hoyfjellshotell+Parkering' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Bygdin Høyfjellshotell Parkering ↗</a></b> (situado a 12 km / 15 min al norte de Beitostølen por la carretera de montaña Fv51). Es un parking amplio y cómodo ubicado justo enfrente del hotel y al inicio del sendero.<br><br>📍 <b>Punto de inicio y final:</b><br>• <b>Inicio de la ruta:</b> Comienza junto al letrero de madera del sendero a la derecha del histórico <b>Bygdin Høyfjellshotell</b>.<br>• <b>Recorrido:</b> El camino discurre hacia el oeste bordeando la orilla norte del lago Bygdin entre prados alpinos y rocas graníticas con panorámicas espectaculares a las montañas.<br>• <b>Punto de giro (Final de la ida):</b> Saliente de playa del lago a los 4 km (área de <i>Fagerstrand</i>). Lugar perfecto para hacer el picnic, descansar junto al agua cristalina y tomar fotos.<br>• <b>Regreso (Final de la ruta):</b> Se vuelve por el mismo sendero de vuelta hasta el aparcamiento de <b>Bygdin Høyfjellshotell</b>.<br><br>☕ <b>Broche de oro al terminar:</b><br>Al finalizar los 8 km, podéis disfrutar de un café caliente y los tradicionales gofres noruegos (<i>vafler</i>) con mermelada o queso <i>brunost</i> en el histórico <b><a href='https://www.google.com/maps/search/?api=1&query=Bygdin+Hoyfjellshotell' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Bygdin Høyfjellshotell ↗</a></b>." },
            { name: "Alternativa Aventurera: Ascenso al Synshorn / Snøhorn", image: "assets/images/image5.png", desc: "Ascenso exigente de alta montaña (o vía ferrata) hasta la cumbre del monte Synshorn (1.475m) con vistas sobrecogedoras a los lagos Bygdin y Vinstre.<br><br>📍 <b>Punto de inicio y fin:</b> Base del monte Synshorn, junto a Bygdin Høyfjellshotell.<br>🅿️ <b>Dónde aparcar:</b> Mismo aparcamiento en <b><a href='https://www.google.com/maps/search/?api=1&query=Bygdin+Hoyfjellshotell+Parkering' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Bygdin Høyfjellshotell Parkering ↗</a></b>." },
            { name: "Alternativa Ocio: Beitostølen Sommerpark", image: "assets/images/hovi_cabins.png", desc: "Bobsleigh de verano (Sommerakebakke) y karts de montaña (Olabilløypa). Podéis comprar billetes individuales (70-80 NOK) o pase de día completo (399 NOK).<br><br>📍 <b>Punto de inicio y fin:</b> Base de las pistas del centro de esquí de Beitostølen.<br>🅿️ <b>Dónde aparcar:</b> En <b><a href='https://www.google.com/maps/search/?api=1&query=Beitostolen+Skisenter+Parkering' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Beitostølen Skisenter Parkering ↗</a></b> (estacionamiento gratuito) o dando un paseo de 5-10 minutos a pie desde Hovi Cabins." }
          ]
        }
      ],
      cityGuide: {
        intro: "Día para explorar los parajes alpinos de Beitostølen y el Parque Nacional de Jotunheimen bordeando el gran lago Bygdin.",
        shopping: "<p><a href='https://www.google.com/maps/search/?api=1&query=SPAR+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 SPAR Beitostølen ↗</a>: supermercado principal para abastecerse de agua, fruta, frutos secos y snacks antes de emprender la ruta de senderismo.</p>",
        breakfast: "<p>Desayuno preparado en la cocina de las cabañas Hovi o en <a href='https://www.google.com/maps/search/?api=1&query=Cafeen+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Caféen Beitostølen ↗</a>.</p>",
        eating: "<p><a href='https://www.google.com/maps/search/?api=1&query=Bygdin+Hoyfjellshotell+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Resto / Cafetería Bygdin Høyfjellshotell ↗</a>: céntrico hotel histórico a orillas del lago Bygdin con sopas del día, waffles noruegos y platos calientes para reponer fuerzas tras la ruta a pie.</p><p><a href='https://www.google.com/maps/search/?api=1&query=Peppes+Pizza+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Peppes Pizza ↗</a> o <a href='https://www.google.com/maps/search/?api=1&query=Lodge+900+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Lodge 900 ↗</a> para una cena reconfortante al volver a Beitostølen.</p>",
        drinks: "<p><a href='https://www.google.com/maps/search/?api=1&query=Bygdin+Hoyfjellshotell+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Salón de Bygdin Høyfjellshotell ↗</a>: acogedor rincón para tomar un café o cerveza con vistas directas al lago.</p><p><a href='https://www.google.com/maps/search/?api=1&query=Svingen+Pub+Beitostolen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Svingen Pub ↗</a> en Beitostølen.</p>",
        whatToSee: "<p><a href='https://www.google.com/maps/search/?api=1&query=Bygdin+Lake+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Lago Bygdin ↗</a>: imponente lago alpino situado a 1.058 metros de altitud, flanqueado por los majestuosos picos de Jotunheimen.</p><p><a href='https://www.google.com/maps/search/?api=1&query=Bitihorn+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Pico Bitihorn ↗</a>: la pirámide rocosa más icónica de la zona (1.607 m).</p>",
        adrenaline: "<p><a href='https://www.google.com/maps/search/?api=1&query=Beitostolen+Sommerpark+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Beitostølen Sommerpark ↗</a>: pases individuales o de día completo para disfrutar del Bobsleigh, Karts de montaña y telesilla panorámico Bitihornexpressen.</p>"
      },
      tips: [
        "Preparad el picnic antes de salir del pueblo (mostrador de comida fresca del SPAR). Junto al agua encontraréis rocas grandes y suaves perfectas para sentarse a comer en plena naturaleza."
      ],
      schedule: [
        { time: "09:00–10:00", desc: "Desayuno relajado en la cabaña Hovi." },
        { time: "10:30–11:00", desc: "Desplazamiento en coche hasta el lago Bygdin (12 km)." },
        { time: "11:00–14:00", desc: "Senderismo por el lago Bygdin (8 km ida y vuelta, ritmo tranquilo)." },
        { time: "14:00–15:30", desc: "Picnic junto al lago o comida ligera en el Bygdin Hoifellshotel." },
        { time: "15:30–16:00", desc: "Café y gofres noruegos (vafler) en la terraza del hotel Bygdin." },
        { time: "16:30–18:30", desc: "Regreso a Beitostølen y tiempo libre para descansar o ir al Sommerpark." },
        { time: "19:00", desc: "Algo de beber en el centro (Caféen) y cena tranquila en el pueblo." }
      ]
    },
    {
      dayNum: 4,
      title: "Día 4 — La gran travesía hacia los fiordos",
      date: "MARTES, 4 DE AGOSTO DE 2026",
      subHeader: "Beitostølen → Parque Nacional de Rondane → Stryn",
      image: "assets/images/image6.png",
      accommodation: {
        name: "Havila Hotel Raftevold",
        address: "Fjordvegen 5, 6763 Hornindal, Noruega",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Havila+Hotel+Raftevold,+Fjordvegen+5,+6763+Hornindal,+Noruega",
        details: "2 habitaciones dobles estándar (twin), desayuno incluido · junto al lago Hornindalsvatnet"
      },
      summary: "Etapa de conducción espectacular cruzando las mesetas del Parque Nacional de Rondane y bajando por valles históricos hasta llegar a Stryn, a orillas del lago más profundo de Europa.",
      goal: "Vivir el cambio de paisaje desde la aridez de la alta montaña y la tundra de Rondane hasta el verde exuberante y húmedo de la región de los fiordos occidentales.",
      nature: {
        flora: "Ecosistema de tundra de alta montaña con una comunidad relevante de líquenes crustosos y foliosos sobre sustratos líticos.",
        fauna: "Hábitat de poblaciones silvestres de Rangifer tarandus.",
        geology: "Afloramientos litológicos de anortosita y secuencias de rocas sedimentarias con deformaciones tectónicas acusadas."
      },
      travelTimes: [
        { from: "Beitostølen", to: "Venabygdsfjellet (Inicio Ruta Escénica Fv27)", desc: "≈ 115 km · 1 h 45 min por la E16 y Fv27" },
        { from: "Venabygdsfjellet", to: "Área de Descanso Strombu", desc: "≈ 35 km · 30 min por la Fv27" },
        { from: "Strombu", to: "Mirador Sohlbergplassen (Lago Atnsjøen)", desc: "≈ 7 km · 8 min por la Fv27" },
        { from: "Sohlbergplassen", to: "Minas Históricas Folldal Gruver", desc: "≈ 33 km · 30 min por la Fv27" },
        { from: "Folldal Gruver", to: "Hornindal / Stryn (Havila Hotel Raftevold)", desc: "≈ 245 km · 3 h 30 min descendiendo por la Rv15" }
      ],
      itinerary: [
        {
          section: "Ruta Escénica de Rondane",
          items: [
            { name: "La Carretera Nacional de Rondane (Fv27)", image: "assets/images/image6.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rondane+Nasjonale+Turistveg", desc: "La Ruta Escénica Nacional de Rondane (Fv27) recorre 75 km a lo largo del borde oriental del Parque Nacional de Rondane, conectando Venabygd (al sur) con Folldal (al norte). Atraviesa una altiplanicie mística dominada por 10 cumbres que superan los 2.000 metros de altitud.<br><br><b>🗺️ Secuencia detallada de puntos de paso (de Sur a Norte):</b><br><br>1️⃣ <b>Altiplanicie de Venabygdsfjellet (Km 0 - 15):</b> Subida por la Fv27 ganando altitud hasta la tundra alpina con pastos de montaña e ibones.<br>• 📍 <b>Localización:</b> Tramo alto de la carretera Fv27.<br>• 🅿️ <b>Dónde aparcar:</b> En <b><a href='https://www.google.com/maps/search/?api=1&query=Venabygdsfjellet+Rasteplass' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Venabygdsfjellet Rasteplass ↗</a></b>.<br><br>2️⃣ <b>Área de Descanso y Centro de Strombu (Km 35):</b> Puerta de entrada al parque nacional con edificio panorámico de diseño escandinavo y azotea verde sobre el río Atna.<br>• 📍 <b>Localización:</b> Junto al río Atna en la Fv27.<br>• 🅿️ <b>Dónde aparcar:</b> En el <b><a href='https://www.google.com/maps/search/?api=1&query=Strombu+Rasteplass+Parkering' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Strombu Rasteplass Parkering ↗</a></b>.<br><br>3️⃣ <b>Mirador de Sohlbergplassen (Km 42):</b> Pasarela curva de madera colgada entre pinos contemplando el lago Atnsjøen y los picos nevados.<br>• 📍 <b>Localización:</b> Orilla oriental del lago Atnsjøen.<br>• 🅿️ <b>Dónde aparcar:</b> En el <b><a href='https://www.google.com/maps/search/?api=1&query=Sohlbergplassen+Parkering' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Sohlbergplassen Parkering ↗</a></b>.<br><br>4️⃣ <b>Humedales de Atnsjømyrene (Km 48):</b> Reserva de turberas con observatorios de aves sobre los macizos montañosos.<br>• 📍 <b>Localización:</b> Tramo norte del lago Atnsjøen.<br>• 🅿️ <b>Dónde aparcar:</b> En los apeaderos señalizados de la Fv27.<br><br>5️⃣ <b>Minas de Folldal Gruver (Km 75):</b> Final de la ruta escénica en el histórico poblado minero del siglo XVIII.<br>• 📍 <b>Localización:</b> Localidad de Folldal.<br>• 🅿️ <b>Dónde aparcar:</b> En el <b><a href='https://www.google.com/maps/search/?api=1&query=Folldal+Gruver+Parkering' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Folldal Gruver Parkering ↗</a></b>." },
            { name: "Mirador de Sohlbergplassen (Lago Atnsjøen)", image: "assets/images/day4_sohlbergplassen.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sohlbergplassen+Utsiktspunkt", desc: "La perspectiva fotográfica más famosa de la ruta con vistas deslumbrantes sobre el lago Atnsjøen y los picos nevados de la cordillera de Rondane. Cuenta con una célebre plataforma de madera curvada suspendida entre los pinos.<br><br>📍 <b>Localización:</b> Orilla oriental del lago Atnsjøen (Carretera Fv27).<br>🅿️ <b>Dónde aparcar:</b> En el <b><a href='https://www.google.com/maps/search/?api=1&query=Sohlbergplassen+Parkering' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Sohlbergplassen Parkering ↗</a></b>, junto al inicio de la pasarela de madera." },
            { name: "Área de descanso y Meseta de Venabygdsfjellet", image: "assets/images/day4_venabygdsfjellet.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Venabygdsfjellet+Rasteplass", desc: "Ejemplo de arquitectura moderna vanguardista noruega integrada en el paisaje alpino. Enclave perfecto para estirar las piernas en plena tundra, contemplar los picos de Rondane y disfrutar de un descanso escénico.<br><br>📍 <b>Localización:</b> Tramo alto de la carretera de montaña Fv27 (Venabygdsfjellet).<br>🅿️ <b>Dónde aparcar:</b> En el <b><a href='https://www.google.com/maps/search/?api=1&query=Venabygdsfjellet+Rasteplass' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Venabygdsfjellet Rasteplass ↗</a></b>." },
            { name: "Folldal Gruver (Complejo Minero Histórico)", image: "assets/images/day4_folldal_gruver.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Folldal+Gruver", desc: "Antiguo complejo minero del siglo XVIII compuesto por más de 70 edificios de madera originales integrados en las colinas. Permite descubrir la historia de las minas de cobre y hierro de la zona.<br><br>📍 <b>Localización:</b> En la localidad histórica de Folldal, al norte de Rondane.<br>🅿️ <b>Dónde aparcar:</b> En el aparcamiento de visitantes de <b><a href='https://www.google.com/maps/search/?api=1&query=Folldal+Gruver+Parkering' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Folldal Gruver Parkering ↗</a></b>." }
          ]
        }
      ],
      cityGuide: {
        shopping: "<p><a href='https://www.google.com/maps/search/?api=1&query=Stryn+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Stryn ↗</a> cuenta con buenas tiendas de material deportivo de montaña.</p><p>En <a href='https://www.google.com/maps/search/?api=1&query=Hornindal+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Hornindal ↗</a> tenéis el propio hotel y comercios locales.</p>",
        breakfast: "<p><a href='https://www.google.com/maps/search/?api=1&query=Havila+Hotel+Raftevold+Hornindal+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Havila Hotel Raftevold ↗</a>: buffet de desayuno incluido en la estancia.</p><p><a href='https://www.google.com/maps/search/?api=1&query=Stryn+Bakeri+Konditori+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Stryn Bakeri & Konditori ↗</a> (panadería con skillingsboller clásicos).</p>",
        eating: "<p><a href='https://www.google.com/maps/search/?api=1&query=Stryn+Kaffebar+Vertshus+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Stryn Kaffebar & Vertshus ↗</a> (ensaladas generosas, sopas y sándwiches, 200-350 NOK).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Brasserie+Posthuset+Stryn+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Brasserie Posthuset ↗</a> (pastas y platos modernos, 300-450 NOK).</p>",
        drinks: "<p><a href='https://www.google.com/maps/search/?api=1&query=Hotel+Raftevold+Hornindal+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Hotel Raftevold Bar ↗</a> (vistas impresionantes al lago Hornindalsvatnet, 90-130 NOK).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Visnes+Hotel+Stryn+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Visnes Hotel ↗</a> (Stryn, encanto histórico y salón clásico, 100-140 NOK).</p>",
        whatToSee: "<p style='display:flex; align-items:center; gap:0.75rem;'><img src='assets/images/hornindalsvatnet.png' alt='Lago Hornindalsvatnet' style='width:64px; height:64px; object-fit:cover; border-radius:8px; flex-shrink:0; box-shadow: 0 2px 6px rgba(0,0,0,0.15);' /><span><a href='https://www.google.com/maps/search/?api=1&query=Hornindalsvatnet+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Lago Hornindalsvatnet ↗</a> (el lago más profundo de Europa: 514 m, aguas cristalinas).</span></p><p style='display:flex; align-items:center; gap:0.75rem;'><img src='assets/images/jostedalsbreen.png' alt='Glaciar Jostedalsbreen' style='width:64px; height:64px; object-fit:cover; border-radius:8px; flex-shrink:0; box-shadow: 0 2px 6px rgba(0,0,0,0.15);' /><span><a href='https://www.google.com/maps/search/?api=1&query=Jostedalsbreen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Glaciar Jostedalsbreen ↗</a> (centro de interpretación).</span></p><p style='display:flex; align-items:center; gap:0.75rem;'><img src='assets/images/gamle_strynefjellsvegen.png' alt='Carretera panorámica Gamle Strynefjellsvegen' style='width:64px; height:64px; object-fit:cover; border-radius:8px; flex-shrink:0; box-shadow: 0 2px 6px rgba(0,0,0,0.15);' /><span><a href='https://www.google.com/maps/search/?api=1&query=Gamle+Strynefjellsvegen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Carretera panorámica Gamle Strynefjellsvegen ↗</a> (carretera de piedra histórica).</span></p><p style='display:flex; align-items:center; gap:0.75rem;'><img src='assets/images/glomnesfossen.png' alt='Cascada Glomnesfossen' style='width:64px; height:64px; object-fit:cover; border-radius:8px; flex-shrink:0; box-shadow: 0 2px 6px rgba(0,0,0,0.15);' /><span><a href='https://www.google.com/maps/search/?api=1&query=Glomnesfossen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Cascada Glomnesfossen ↗</a> (impresionante caída visible en el valle).</span></p>"
      },
      tips: [
        "Aseguraos de que vuestra acompañante vegetariana lleve snacks suficientes en el coche, ya que en la ruta montañosa de Rondane las opciones sin carne son escasas en los kioscos de carretera.",
        "Las temperaturas en Rondane pueden descender rápidamente incluso en agosto. Llevad chaquetas de abrigo a mano."
      ],
      schedule: [
        { time: "08:00–08:30", desc: "Salida puntual de Beitostølen con maletas cargadas." },
        { time: "08:30–10:30", desc: "Conducción hacia la meseta de Venabygdsfjellet." },
        { time: "10:30–12:30", desc: "Recorrido por la Ruta de Rondane con paradas fotográficas." },
        { time: "12:30–13:30", desc: "Almuerzo ligero o picnic en la ruta." },
        { time: "13:30–14:30", desc: "Visita externa o rápida a las minas de Folldal Gruver." },
        { time: "14:30–18:30", desc: "Largo tramo de coche hacia el oeste, bajando a los fiordos hasta Stryn/Hornindal." },
        { time: "18:30–19:00", desc: "Check-in en el Havila Hotel Raftevold." },
        { time: "19:30", desc: "Paseo por las orillas del lago Hornindalsvatnet y cena en el hotel." }
      ]
    },
    {
      dayNum: 5,
      title: "Día 5 — Gigantes de agua y piedra: Geiranger y Trollstigen",
      date: "MIÉRCOLES, 5 DE AGOSTO DE 2026",
      subHeader: "Stryn ↔ Fiordo de Geiranger ↔ Carretera de los Trolls",
      image: "assets/images/image7.png",
      accommodation: {
        name: "Havila Hotel Raftevold",
        address: "Fjordvegen 5, 6763 Hornindal, Noruega",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Havila+Hotel+Raftevold,+Fjordvegen+5,+6763+Hornindal,+Noruega",
        details: "segunda noche · desayuno incluido"
      },
      summary: "Navegación en ferry por el icónico fiordo de Geiranger flanqueando cascadas legendarias, seguida de la ascensión en coche por las vertiginosas curvas de la Carretera de los Trolls (Trollstigen).",
      goal: "Experimentar dos de las postales más famosas de Noruega en un solo día, combinando la majestuosidad natural del fiordo con la ingeniería civil extrema de Trollstigen.",
      nature: {
        flora: "Variabilidad en la biodiversidad vegetal en respuesta a marcados gradientes altitudinales.",
        geology: "Análisis de la génesis de fiordos, valles de artesa (valles en U) y sistemas de valles suspendidos."
      },
      travelTimes: [
        { from: "Hornindal (Hotel Raftevold)", to: "Puerto de Hellesylt", desc: "≈ 45 km · 50 min en coche por la Fv60" },
        { from: "Puerto de Hellesylt", to: "Muelle de Geiranger (Ferry con coche)", desc: "≈ 15 km en barco por el fiordo · 1 h 05 min de navegación" },
        { from: "Geiranger", to: "Mirador Flydalsjuvet", desc: "≈ 4 km · 8 min subiendo la Fv63" },
        { from: "Flydalsjuvet", to: "Geiranger Skywalker (Dalsnibba)", desc: "≈ 17 km · 25 min de fuerte ascenso de montaña" },
        { from: "Dalsnibba", to: "Mirador Ørnesvingen (Curva del Águila)", desc: "≈ 24 km · 35 min por la Fv63" },
        { from: "Ørnesvingen", to: "Trollstigen (Centro de Visitantes y Miradores)", desc: "≈ 50 km · 1 h por la Fv63" },
        { from: "Trollstigen", to: "Hornindal (Regreso al Hotel)", desc: "≈ 135 km · 2 h 15 min de trayecto" }
      ],
      itinerary: [
        {
          section: "Crucero por el Fiordo de Geiranger",
          items: [
            { name: "Ferry Hellesylt → Geiranger", image: "assets/images/day5_geiranger_fjord.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hellesylt+Ferjekai", desc: "Navegación confirmada de las 09:30 a las 10:35 (duración 1h 05min) llevando el coche a bordo. Recorre el corazón del fiordo de Geiranger, declarado Patrimonio de la Humanidad por la UNESCO, flanqueado por desfiladeros verticales de más de 1.000 metros de altura.<br><br>🅿️ <b>Dónde aparcar / cola con el coche:</b> En los carriles de embarque numerados para vehículos con reserva en el <b>Muelle de Hellesylt (<a href='https://www.google.com/maps/search/?api=1&query=Hellesylt+Ferjekai' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Hellesylt Ferjekai ↗</a>)</b>. Llegar entre 30 y 45 minutos antes de la salida (09:30).<br>⚓ <b>Dónde cogerlo:</b> Se embarca metiendo el coche directamente en la bodega del ferry en el muelle de Hellesylt (<b>Hellesylt Ferjekai</b>). Al llegar a Geiranger (10:35), desembarcáis conduciendo el vehículo por el muelle de Geiranger." },
            { name: "Cascadas legendarias del fiordo (Las Siete Hermanas)", image: "assets/images/day5_seven_sisters.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Seven+Sisters+Waterfall+Geiranger", desc: "Observación privilegiada desde la cubierta del ferry de las míticas cascadas de Las Siete Hermanas (De syv søstre), la cascada del Pretendiente (Friaren) justo enfrente y las históricas granjas de montaña suspendidas en los acantilados a alturas imposibles." }
          ]
        },
        {
          section: "Miradores y Carretera de los Trolls",
          items: [
            { name: "Mirador Flydalsjuvet", image: "assets/images/day5_flydalsjuvet.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Flydalsjuvet+Parkering", desc: "Parada panorámica obligatoria a solo 4 km de Geiranger. Ofrece una impresionante perspectiva elevada de todo el fiordo con los cruceros fondeados y la célebre repisa de roca sobre el abismo.<br><br>📍 <b>Localización:</b> Carretera Fv63, a 4 km al sur del centro de Geiranger.<br>🅿️ <b>Dónde aparcar:</b> En el aparcamiento habilitado <b><a href='https://www.google.com/maps/search/?api=1&query=Flydalsjuvet+Parkering' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Flydalsjuvet Parkering ↗</a></b>." },
            { name: "Geiranger Skywalker (Dalsnibba)", image: "assets/images/day5_dalsnibba.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dalsnibba+Utsiktspunkt", desc: "Plataforma de observación suspendida a 1.500 metros sobre el nivel del mar con piso de cristal y rejilla de acero. Brinda una vista panorámica sublime del fiordo de Geiranger y los glaciares alpinos.<br><br>📍 <b>Localización:</b> Cumbre del monte Dalsnibba (carretera de peaje Nibbevegen).<br>🅿️ <b>Dónde aparcar:</b> En la explanada junto a la plataforma del mirador Dalsnibba." },
            { name: "Mirador Ørnesvingen (Curva del Águila)", image: "assets/images/day5_ornesvingen.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Ornesvingen+Utsiktspunkt", desc: "Plataforma volada sobre la última y más pronunciada curva de la carretera de subida hacia Eidsdal. Vistas frontales deslumbrantes sobre el cruce del fiordo y la cascada de Las Siete Hermanas.<br><br>📍 <b>Localización:</b> Carretera Fv63 subiendo hacia Eidsdal.<br>🅿️ <b>Dónde aparcar:</b> En las plazas habilitadas en la misma curva del mirador." },
            { name: "Trollstigen (La Carretera de los Trolls)", image: "assets/images/day5_trollstigen.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Trollstigen+Parkering", desc: "Una de las rutas escénicas de ingeniería más espectaculares del mundo. Trazado de 11 curvas de horquilla de vertiginosa pendiente esculpidas en la pared del valle. En la cumbre se ubica el moderno Centro de Visitantes con pasarelas de acero voladas sobre la impresionante cascada Stigfossen (320m).<br><br>📍 <b>Localización:</b> Puerto de montaña Trollstigen (Carretera Fv63).<br>🅿️ <b>Dónde aparcar:</b> En el gran aparcamiento del <b><a href='https://www.google.com/maps/search/?api=1&query=Trollstigen+Parkering' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Centro de Visitantes de Trollstigen ↗</a></b>." }
          ]
        }
      ],
      cityGuide: {
        intro: "Geiranger y Trollstigen representan la máxima expresión de los fiordos noruegos, combinando cruceros entre paredes verticales y carreteras de montaña míticas.",
        shopping: "<p><a href='https://www.google.com/maps/search/?api=1&query=Geiranger+Sjokolade+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Geiranger Sjokolade ↗</a>: famosa chocolatería artesanal en el puerto de Geiranger con chocolates hechos con ingredientes locales (bayas, queso marrón brunost).</p><p>Tiendas de recuerdos y artesanía noruega en el embarcadero de Hellesylt y el puerto de Geiranger.</p>",
        breakfast: "<p>Buffet de desayuno completo en el <a href='https://www.google.com/maps/search/?api=1&query=Havila+Hotel+Raftevold+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Havila Hotel Raftevold ↗</a> en Hornindal antes de salir puntuales hacia Hellesylt.</p>",
        eating: "<p><a href='https://www.google.com/maps/search/?api=1&query=Trollstigen+Kafe+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Trollstigen Kafé / Besøkssenter ↗</a>: moderno centro de visitantes en la cima de Trollstigen con restaurante, cafetería, platos calientes, sopas y opciones vegetarianas frente a los ventanales con vistas al abismo.</p><p><a href='https://www.google.com/maps/search/?api=1&query=Geiranger+Bistro+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Restaurantes en el puerto de Geiranger ↗</a>: bistrós con ensaladas, sopas de pescado y verduras de temporada.</p>",
        drinks: "<p><a href='https://www.google.com/maps/search/?api=1&query=Geiranger+Sjokolade+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Cafetería de Geiranger Sjokolade ↗</a>: excelente chocolate caliente artesano y café espresso.</p><p>Cafetería del ferry Hellesylt-Geiranger para disfrutar de un café caliente en cubierta durante el crucero.</p>",
        whatToSee: "<p><a href='https://www.google.com/maps/search/?api=1&query=Geirangerfjord+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Geirangerfjord (UNESCO) ↗</a>: crucero de 1 h 15 min contemplando las míticas cascadas <i>Las Siete Hermanas</i>, <i>El Pretendiente</i> y <i>El Velo de la Novia</i>.</p><p><a href='https://www.google.com/maps/search/?api=1&query=Flydalsjuvet+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Mirador de Flydalsjuvet ↗</a>: impresionante mirador sobre el abismo del fiordo.</p><p><a href='https://www.google.com/maps/search/?api=1&query=Ornesvingen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Ørnesvingen (La Curva del Águila) ↗</a>: mirador colgado sobre la curva más espectacular de la carretera con vistas al fiordo.</p><p><a href='https://www.google.com/maps/search/?api=1&query=Trollstigen+Visitor+Centre+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Carretera de los Trolls (Trollstigen) ↗</a>: mítica ruta de 11 curvas de horquilla con pasarelas de acero y cristal sobre la cascada Stigfossen.</p>"
      },
      tips: [
        "Llevad una bolsa térmica en el coche con provisiones vegetales extra, ya que en las zonas de alta montaña y los ferrys las opciones sin carne son muy limitadas.",
        "Conducción defensiva en Trollstigen: usad marchas cortas al bajar para no fatigar ni calentar los frenos. Siguid la estela de los autobuses locales si os sentís inseguros."
      ],
      schedule: [
        { time: "08:00–09:00", desc: "Traslado temprano desde el hotel en Hornindal al puerto de Hellesylt." },
        { time: "09:30–10:35", desc: "⛴️ Ferry Fiordo de Geiranger: Hellesylt (09:30) → Geiranger (10:35).", isFixed: true },
        { time: "10:35–12:00", desc: "Desembarque, subida al mirador Flydalsjuvet y desvío al Dalsnibba (Skywalker)." },
        { time: "12:00–14:00", desc: "Ruta en coche hacia Trollstigen pasando por la Curva del Águila (Ørnesvingen)." },
        { time: "14:00–15:30", desc: "Llegada a Trollstigen, paseo por las pasarelas del mirador y comida en la cafetería." },
        { time: "15:30–19:30", desc: "Largo pero espectacular regreso por carretera de montaña hacia Hornindal/Stryn." },
        { time: "20:00", desc: "Cena en el hotel o en el pueblo de Hornindal." }
      ]
    },
    {
      dayNum: 6,
      title: "Día 6 — Navegación estrecha y raíles históricos",
      date: "JUEVES, 6 DE AGOSTO DE 2026",
      subHeader: "Stryn → Nærøyfjord → Tren de Flåm → Voss",
      image: "assets/images/image8.png",
      accommodation: {
        name: "Voss Resort Bavallstunet",
        address: "Bavallsvegen 227, 5710 Skulestadmo, Noruega",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Voss+Resort+Bavallstunet,+Bavallsvegen+227,+5710+Skulestadmo,+Noruega",
        details: "1 cabaña (modelo Bavallstunet 65) para 4 adultos con sauna privada · comida no incluida"
      },
      summary: "La etapa más intensa logísticamente del viaje: trayecto en barco por el estrechísimo Nærøyfjord, seguido del histórico y empinado Tren de Flåm, terminando el día en Voss, la capital noruega de la adrenalina.",
      goal: "Sumergirse en el fiordo más salvaje y estrecho del país (Patrimonio de la Humanidad) y disfrutar de uno de los viajes en tren más bellos del mundo.",
      nature: {
        flora: "Comunidades de bosque caducifolio húmedo en los valles encajados.",
        fauna: "Comunidades de avifauna marina y especies especialistas en biotopos de acantilados costeros.",
        geology: "Unidades estratigráficas del Precámbrico y evolución geomorfológica de la cuenca del Sognefjord."
      },
      travelTimes: [
        { from: "Hornindal (Hotel Raftevold)", to: "Puerto de Gudvangen (Nærøyfjord)", desc: "≈ 185 km · 2 h 45 min por la E39 y E16" },
        { from: "Gudvangen", to: "Muelle de Flåm (Crucero Nærøyfjord)", desc: "≈ 16 km en barco por el fiordo · 2 h de navegación" },
        { from: "Estación de Flåm", to: "Estación de Myrdal (Tren Flåmsbana)", desc: "≈ 20 km en tren · 50 min de trayecto en raíles" },
        { from: "Flåm", to: "Voss Resort Bavallstunet (Cabaña Hovi)", desc: "≈ 65 km · 55 min en coche por la E16" }
      ],
      itinerary: [
        {
          section: "Navegación Nærøyfjord y Tren de Flåm",
          items: [
            { name: "Ferry Kaupanger → Gudvangen", image: "assets/images/day6_naeroyfjord_ferry.png", desc: "Reserva confirmada con vehículo. Salida a las 12:30 desde Kaupanger con llegada a Gudvangen a las 15:00 (duración 2h 30min). Recorrido inolvidable por el Nærøyfjord (Patrimonio de la Humanidad UNESCO), el brazo de fiordo más estrecho, salvaje y vertical de Noruega.<br><br>🅿️ <b>Dónde aparcar / cola con el coche:</b> En los carriles de embarque de vehículos del <b>Muelle de Kaupanger (<a href='https://www.google.com/maps/search/?api=1&query=Kaupanger+Kai' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Kaupanger Ferjekai ↗</a>)</b>. Llegar al menos 30-45 minutos antes de la salida (12:30).<br>⚓ <b>Dónde cogerlo:</b> Se embarca metiendo el coche en la bodega del ferry en <b>Kaupanger Ferjekai</b> y navegando hasta Gudvangen, donde se desembarca conduciendo por el muelle de Gudvangen." },
            { name: "Paseo por Flåm", image: "assets/images/day6_flam_village.png", desc: "Trayecto en coche de 20 minutos desde Gudvangen a Flåm atravesando el túnel de Gudvanga. Tiempo libre para pasear por este encantador pueblo a orillas del Aurlandsfjord, visitar sus tiendas de artesanía, probar la gastronomía local o subir al mirador de Stegastein." },
            { name: "Tren de Flåm (Flåmsbana)", image: "assets/images/day6_flamsbana_train.png", desc: "Billetes de tren confirmados. Considerado uno de los trayectos ferroviarios en ancho normal más empinados y bellos del mundo. Recorrido de ida y vuelta entre Flåm y la estación de alta montaña de Myrdal, incluyendo una emocionante parada fotográfica de 5 minutos en la atronadora cascada de Kjosfossen (225m).<br><br>🅿️ <b>Dónde aparcar:</b> En el aparcamiento principal de <b>Flåm (<a href='https://www.google.com/maps/search/?api=1&query=Flam+Stasjon+Parkering' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Flåm Stasjon Parkering ↗</a>)</b>, ubicado al lado de la estación y del puerto.<br>🚉 <b>Dónde cogerlo:</b> En los andenes de la <b>Estación de Tren de Flåm (Flåm stasjon)</b>. Salida puntual a las 18:25." }
          ]
        }
      ],
      cityGuide: {
        shopping: "<p><a href='https://www.google.com/maps/search/?api=1&query=REMA+1000+Skulestadmoen+Voss+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 REMA 1000 ↗</a> y <a href='https://www.google.com/maps/search/?api=1&query=Kiwi+Skulestadmoen+Voss+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Kiwi en Skulestadmoen ↗</a> (cerca del alojamiento) excelentes para compras de comida.</p><p>Centro comercial <a href='https://www.google.com/maps/search/?api=1&query=AMFI+Voss+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 AMFI Voss ↗</a> en el pueblo con tienda <a href='https://www.google.com/maps/search/?api=1&query=Vinmonopolet+AMFI+Voss+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Vinmonopolet ↗</a> para bebidas.</p>",
        breakfast: "<p><a href='https://www.google.com/maps/search/?api=1&query=Tre+Bror+Kafe+Bar+Voss+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Tre Brør Kafé y Bar ↗</a> (café de especialidad y panes artesanos en el pueblo).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Vangen+Cafe+Voss+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Vangen Café ↗</a> (desayunos abundantes con vistas al lago).</p>",
        eating: "<p><a href='https://www.google.com/maps/search/?api=1&query=Hangurstoppen+Restaurant+Voss+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Hangurstoppen Restaurant ↗</a> (vistas de montaña, comida local fina).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Inside+Voss+Rock+Cafe+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Inside Voss Bryggeri ↗</a> (hamburguesas y opciones vegetarianas).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Tre+Bror+Kafe+Bar+Voss+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Tre Brør ↗</a> (menús de estilo bistró rústico, 250-400 NOK).</p>",
        drinks: "<p><a href='https://www.google.com/maps/search/?api=1&query=Voss+Resort+Ski+Bar+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Ski Bar Bula ↗</a> (ubicado en el resort, copas por la tarde/noche).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Tre+Bror+Kafe+Bar+Voss+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Tre Brør ↗</a> (excelente selección de cervezas artesanales locales).</p>",
        whatToSee: "<p><a href='https://www.google.com/maps/search/?api=1&query=Vangskyrkja+Voss+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Iglesia de piedra Vangskyrkja ↗</a> (de 1277, gótica/románica).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Fleischer's+Hotel+Voss+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Fleischer's Hotel ↗</a> (hotel histórico del siglo XIX estilo suizo al lado de la estación).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Voss+Gondol+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Voss Gondol ↗</a> (teleférico moderno al monte Hanguren, 350-400 NOK).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Voss+Vind+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Túnel de viento Voss Vind ↗</a>.</p>"
      },
      tips: [
        "El barco y el tren son sumamente puntuales. No arriesguéis los tiempos de conducción de la mañana. Salid del hotel de Stryn a las 08:30 sin demora.",
        "Aprovechad la sauna privada de la cabaña al llegar a Voss para relajaros de un día tan completo."
      ],
      schedule: [
        { time: "08:30–09:30", desc: "Desayuno y check-out en el Havila Hotel Raftevold." },
        { time: "09:30–12:00", desc: "Conducción desde Stryn hasta el muelle de Kaupanger." },
        { time: "12:30–15:00", desc: "⛴️ Barco Nærøyfjord: Kaupanger (12:30) → Gudvangen (15:00) [Ferry Nærøyfjord].", isFixed: true },
        { time: "15:00–15:30", desc: "Trayecto en coche desde Gudvangen a Flåm." },
        { time: "15:30–18:00", desc: "Almuerzo tardío en Flåm (se recomienda Ægir BrewPub) o visita a Stegastein." },
        { time: "18:25–20:30", desc: "🚂 Tren de Flåm (Flåmsbana): Flåm → Myrdal (18:25) / Myrdal → Flåm (19:35).", isFixed: true },
        { time: "20:45–21:45", desc: "Trayecto final por carretera de Flåm a Voss." },
        { time: "22:00", desc: "Check-in en el Voss Resort y sesión de sauna privada." }
      ]
    },
    {
      dayNum: 7,
      title: "Día 7 — Bergen, la Puerta de los Fiordos",
      date: "VIERNES, 7 DE AGOSTO DE 2026",
      subHeader: "Excursión de día completo Voss ↔ Bergen",
      image: "assets/images/image9.png",
      accommodation: {
        name: "Voss Resort Bavallstunet",
        address: "Bavallsvegen 227, 5710 Skulestadmo, Noruega",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Voss+Resort+Bavallstunet,+Bavallsvegen+227,+5710+Skulestadmo,+Noruega",
        details: "segunda noche · sauna privada · comida no incluida"
      },
      summary: "Excursión de día completo desde Voss hasta la ciudad costera de Bergen: los callejones de madera de Bryggen, el mercado de pescado y el funicular al monte Fløyen.",
      goal: "Cambiar el entorno salvaje por el encanto urbano e histórico de la 'Puerta de los Fiordos', comprendiendo la importancia del comercio marítimo y la Liga Hanseática en la historia de Noruega.",
      nature: {
        flora: "Representación de selva templada costera (bosque caducifolio atlántico).",
        geology: "Estudio del complejo metamórfico de la región de Bergen (pliegues y gneises)."
      },
      travelTimes: [
        { from: "Voss Resort", to: "Bergen Centro (Parking KlosterGarasjen)", desc: "≈ 100 km · 1 h 30 min por la carretera E16" },
        { from: "Parking KlosterGarasjen", to: "Muelle de Bryggen y Marienkirke", desc: "≈ 0.8 km · 10 min a pie" },
        { from: "Bryggen", to: "Estación Inferior Funicular Fløibanen", desc: "≈ 0.3 km · 4 min a pie" },
        { from: "Estación Fløibanen", to: "Cumbre Monte Fløyen (Mirador)", desc: "844 m de vía · 6 min en funicular" },
        { from: "Bergen Centro", to: "Voss Resort (Regreso a la Cabaña)", desc: "≈ 100 km · 1 h 30 min por la E16" }
      ],
      itinerary: [
        {
          section: "Ruta a pie por Bergen",
          items: [
            { name: "Barrio histórico de Bryggen", image: "assets/images/day7_bryggen.png", desc: "Antiguo muelle comercial de la Liga Hanseática y símbolo histórico de Bergen. Famoso por sus pintorescas casas de madera coloridas declaradas Patrimonio de la Humanidad por la UNESCO. Un fascinante laberinto de callejones de madera llenos de talleres de artesanos, galerías de arte y tiendas tradicionales." },
            { name: "Funicular Fløibanen", image: "assets/images/day7_floibanen.png", desc: "Histórico funicular sobre raíles que asciende desde el centro de Bergen hasta la cumbre del monte Fløyen (320 m en solo 6 minutos). Brinda una impresionante vista panorámica de la ciudad, los muelles del puerto y las islas atlánticas. Se recomienda comprar billetes online con antelación.<br><br>🅿️ <b>Dónde aparcar:</b> En los parkings subterráneos <b><a href='https://www.google.com/maps/search/?api=1&query=KlosterGarasjen+Bergen' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>KlosterGarasjen ↗</a></b> o <b>ByGarasjen</b> (aparcamiento en la calle reservado a residentes).<br>🚉 <b>Dónde cogerlo:</b> En la estación inferior de Fløibanen en la calle <b><a href='https://www.google.com/maps/search/?api=1&query=Vetrlidsallmenningen+21A+Bergen' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Vetrlidsallmenningen 21A ↗</a></b> (a 150 metros del mercado de pescado y Bryggen)." },
            { name: "Fisketorget (Mercado de Pescado)", image: "assets/images/day7_fisketorget.png", desc: "Ubicado en el puerto histórico de Bergen frente a Bryggen. Emblemático mercado al aire libre con puestos de pescado y marisco fresco donde probar brochetas de salmón ahumado, patas de cangrejo real o bacalao preparado al momento en un ambiente muy marinero." },
            { name: "🚩 Free Tour Bergen: Rincones Ocultos ✅ RESERVADO", desc: "<strong>Tour confirmado en español con Nati, guía local oficial (la chica del sombrero rojo).</strong><br><br>📍 <b>Punto de encuentro:</b> <a href='https://www.google.com/maps/search/?api=1&query=Byparken+Bergen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Musikkpaviljongen (Byparken) — Olav Kyrres gate 27 ↗</a><br>🕙 <b>Hora:</b> 11:00 h exactas (llegar 5 min antes) · <b>Duración:</b> 2 horas<br><br><b>Itinerario del tour:</b> Festplassen → Den blå steinen → Ole Bulls plass → Teatro Nacional (Den Nationale Scene) → Mercado de Pescado → Strandkaien → Klosteret → Vågsallmenningen → Kong Oscars gate → Bryggen → Nikolaikirkeallmenningen<br><br>💳 <b>Pago al final:</b> Voluntario, aprox. 15€/persona. Se acepta efectivo, Bizum y tarjeta.", isFixed: true }
          ]
        }
      ],
      cityGuide: {
        shopping: "<p><a href='https://www.google.com/maps/search/?api=1&query=Bryggen+Bergen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Bryggen ↗</a> cuenta con tiendas de recuerdos tradicionales (<a href='https://www.google.com/maps/search/?api=1&query=Dale+of+Norway+Bergen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Dale of Norway ↗</a>, cortadores de queso, trolls).</p><p>En el centro hay grandes almacenes de ropa de abrigo y diseño nórdico.</p>",
        eating: "<p><a href='https://www.google.com/maps/search/?api=1&query=Daily+Pot+Bergen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Daily Pot ↗</a> (boles saludables y nutritivos, opciones veganas excelentes, 180-280 NOK).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Pingvinen+Bergen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Pingvinen ↗</a> (comida tradicional noruega muy casera, 280-450 NOK).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Kafe+Spesial+Bergen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Kafé Spesial ↗</a> (pizzas, pastas e ingredientes locales, 180-300 NOK).</p>",
        drinks: "<p>Bares en el puerto de <a href='https://www.google.com/maps/search/?api=1&query=Bryggen+Bergen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Bryggen ↗</a>.</p><p>Locales de café de especialidad por el barrio de <a href='https://www.google.com/maps/search/?api=1&query=Nordnes+Bergen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Nordnes ↗</a>.</p>",
        whatToSee: "<p style='display:flex; align-items:center; gap:0.75rem;'><img src='assets/images/day7_marienkirke.png' alt='Iglesia de Santa María' style='width:64px; height:64px; object-fit:cover; border-radius:8px; flex-shrink:0; box-shadow: 0 2px 6px rgba(0,0,0,0.15);' /><span><a href='https://www.google.com/maps/search/?api=1&query=Marienkirke+Bergen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Iglesia de Santa María (Marienkirke) ↗</a> (del siglo XII, románica).</span></p><p style='display:flex; align-items:center; gap:0.75rem;'><img src='assets/images/day7_hanseatic_museum.png' alt='Museo Hanseático y de Bryggen' style='width:64px; height:64px; object-fit:cover; border-radius:8px; flex-shrink:0; box-shadow: 0 2px 6px rgba(0,0,0,0.15);' /><span><a href='https://www.google.com/maps/search/?api=1&query=Hanseatic+Museum+Bergen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Museo Hanseático y de Bryggen ↗</a> (para conocer la vida de los comerciantes alemanes en la Edad Media).</span></p>"
      },
      tips: [
        "Bergen es famosa por ser la ciudad más lluviosa de Noruega. Los tours no se cancelan por mal tiempo: llevad paraguas e impermeable siempre a mano.",
        "Aparcar en la calle en Bergen es casi imposible y requiere permisos de residentes. Conducid directamente a parkings subterráneos grandes como ByGarasjen o KlosterGarasjen."
      ],
      schedule: [
        { time: "08:30–09:30", desc: "Desayuno tranquilo en la cocina de la cabaña Hovi en Voss y equipaje ligero." },
        { time: "09:30–10:45", desc: "Conducción en coche hasta Bergen (carretera E16) y estacionamiento en el parking subterráneo KlosterGarasjen." },
        { time: "11:00–13:00", desc: "🚩 FREE TOUR CONFIRMADO EN BERGEN (11:00h): 'Rincones Ocultos' con guía local Nati (chica del sombrero rojo). Punto de encuentro: Musikkpaviljongen (Byparken, Olav Kyrres gate 27). Recorrido por Festplassen, Den blå steinen, Ole Bulls plass, Teatro Nacional, Mercado de Pescado, Strandkaien, Klosteret, Vågsallmenningen, Kong Oscars gate, Bryggen y Nikolaikirkeallmenningen.", isFixed: true },
        { time: "13:00–14:30", desc: "Almuerzo en el centro (Daily Pot, Pingvinen o Mercado del Pescado)." },
        { time: "14:30–16:30", desc: "Subida en el funicular Fløibanen al monte Fløyen y paseos por los senderos de la cima." },
        { time: "16:30–18:30", desc: "Paseo libre por las calles empedradas de Nordnes, puerto o compras en el centro." },
        { time: "18:30–20:00", desc: "Conducción de regreso a Voss Resort por la E16." },
        { time: "20:00", desc: "Llegada a la cabaña de Voss, sesión de sauna y cena relajada." }
      ]
    },
    {
      dayNum: 8,
      title: "Día 8 — El gran cruce y la cascada indomable",
      date: "SÁBADO, 8 DE AGOSTO DE 2026",
      subHeader: "Voss → Puente de Hardanger → Vøringsfossen → Oslo",
      image: "assets/images/image10.png",
      accommodation: {
        name: "Comfort Hotel Grand Central",
        address: "Østbanehallen, Jernbanetorget 1, 0154 Oslo, Noruega",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Comfort+Hotel+Grand+Central,+%C3%98stbanehallen,+Jernbanetorget+1,+0154+Oslo,+Noruega",
        details: "2 habitaciones dobles (twin), desayuno incluido · situado dentro de la propia estación central de Oslo"
      },
      summary: "El viaje de regreso hacia el este atraviesa el impresionante puente de Hardanger y sube por el valle hasta la imponente cascada Vøringsfossen, culminando con la llegada a Oslo y la devolución del vehículo de alquiler.",
      goal: "Despedirse de la región de los fiordos con una ruta de conducción escénica incomparable y realizar una transición suave y de devolución puntual del coche en la capital.",
      nature: {
        flora: "Ecología de transición a la tundra subalpina en la meseta de Hardangervidda.",
        geology: "Dinámica de procesos fluviales post-glaciares en el sistema de la cascada Vøringsfossen y análisis del basamento Precámbrico (rocas ígneas y metamórficas antiguas)."
      },
      travelTimes: [
        { from: "Voss Resort", to: "Puente de Hardanger (Hardangerbrua)", desc: "≈ 40 km · 40 min por la Rv13/E16" },
        { from: "Puente de Hardanger", to: "Pueblo de Eidfjord", desc: "≈ 15 km · 15 min bordeando el fiordo" },
        { from: "Eidfjord", to: "Cascada Vøringsfossen (Måbødalen)", desc: "≈ 20 km · 20 min de vertiginoso ascenso por la Rv7" },
        { from: "Vøringsfossen", to: "Gol (Valle de Hallingdal)", desc: "≈ 130 km · 1 h 45 min por la meseta Rv7" },
        { from: "Gol", to: "Estación Central de Oslo (Devolución del Coche)", desc: "≈ 170 km · 2 h 30 min por la Rv7 y E16" }
      ],
      itinerary: [
        {
          section: "Hardanger y Vøringsfossen",
          items: [
            { name: "Puente de Hardanger (Hardangerbrua)", image: "assets/images/image10.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hardangerbrua", desc: "Espectacular cruce en coche sobre el Hardangerfjord por el puente colgante más largo de Noruega (1.380 m). Destaca por su monumental arquitectura de ingeniería y la entrada y salida directa a túneles con rotondas subterráneas iluminadas con luz azul excavadas dentro de la montaña." },
            { name: "Pueblo de Eidfjord", image: "assets/images/day6_flam_village.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Eidfjord+Noruega", desc: "Pintoresco y tranquilo pueblo situado a orillas del Hardangerfjord. El enclave perfecto para hacer una parada técnica, pasear junto a las aguas del fiordo y tomar un café de montaña antes de iniciar el ascenso." },
            { name: "Cascada Vøringsfossen (Måbødalen)", image: "assets/images/day8_voringsfossen.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Voringsfossen+Utsiktspunkt", desc: "Una de las caídas de agua más sobrecogedoras e imponentes de Noruega, con 180 metros de precipitación sobre el vertiginoso cañón de Måbødalen. Cuenta con un vanguardista conjunto de miradores y un puente de pasarelas de acero diseñado por Carl-Viggo Hølmebakk suspendido sobre el vacío.<br><br>📍 <b>Localización:</b> Cañón de Måbødalen (Carretera Rv7).<br>🅿️ <b>Dónde aparcar:</b> En el aparcamiento oficial <b><a href='https://www.google.com/maps/search/?api=1&query=Fossli+Hotel+Voringsfossen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Vøringsfossen Parkering / Fossli ↗</a></b>." },
            { name: "Valle de Hallingdal e Iglesia de Madera de Gol", image: "assets/images/day2_valdres_stave_church.png", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gol+Stave+Church+Noruega", desc: "Trayecto de conducción escénica por la carretera Rv7 bordeando ríos caudalosos y densos bosques de coníferas. En la localidad de Gol se hace una pausa reconfortante para admirar la icónica iglesia de madera stave church vikinga." }
          ]
        }
      ],
      cityGuide: {
        shopping: "<p style='display:flex; align-items:center; gap:0.75rem;'><img src='assets/images/day8_voringsfossen.png' alt='Fossli Hotel' style='width:64px; height:64px; object-fit:cover; border-radius:8px; flex-shrink:0; box-shadow: 0 2px 6px rgba(0,0,0,0.15);' /><span>Cafetería y tienda de recuerdos en el <a href='https://www.google.com/maps/search/?api=1&query=Fossli+Hotel+Voringsfossen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Fossli Hotel ↗</a> (junto a <a href='https://www.google.com/maps/search/?api=1&query=Voringsfossen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Vøringsfossen ↗</a>).</span></p><p style='display:flex; align-items:center; gap:0.75rem;'><img src='assets/images/day2_valdres_stave_church.png' alt='Gol' style='width:64px; height:64px; object-fit:cover; border-radius:8px; flex-shrink:0; box-shadow: 0 2px 6px rgba(0,0,0,0.15);' /><span>Supermercados y cafeterías en <a href='https://www.google.com/maps/search/?api=1&query=Gol+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Gol ↗</a>.</span></p>",
        eating: "<p style='display:flex; align-items:center; gap:0.75rem;'><img src='assets/images/comfort_hotel_oslo.png' alt='Olivia Østbanehallen' style='width:64px; height:64px; object-fit:cover; border-radius:8px; flex-shrink:0; box-shadow: 0 2px 6px rgba(0,0,0,0.15);' /><span><a href='https://www.google.com/maps/search/?api=1&query=Olivia+Ostbanehallen+Oslo+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Olivia en Østbanehallen ↗</a> (excelentes pizzas y platos italianos con opciones vegetarianas en el complejo de la estación, 280-450 NOK).</span></p><p>Cafetería del hotel <a href='https://www.google.com/maps/search/?api=1&query=Fossli+Hotel+Voringsfossen+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Fossli ↗</a> para comidas ligeras.</p>",
        drinks: "<p style='display:flex; align-items:center; gap:0.75rem;'><img src='assets/images/comfort_hotel_oslo.png' alt='Comfort Hotel Grand Central Bar' style='width:64px; height:64px; object-fit:cover; border-radius:8px; flex-shrink:0; box-shadow: 0 2px 6px rgba(0,0,0,0.15);' /><span>Barception del <a href='https://www.google.com/maps/search/?api=1&query=Comfort+Hotel+Grand+Central+Oslo+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Comfort Hotel Grand Central ↗</a> (moderno bar en la recepción).</span></p>"
      },
      tips: [
        "¡CRÍTICO!: Devolución del coche de alquiler a las 19:00 en la estación central de Oslo (Oslo Railway Station). Debe coincidir exactamente con la hora de recogida del Día 1 para evitar cargos de días extra.",
        "Es un trayecto largo de coche. Preparad provisiones y tentempiés para la carretera, sobre todo para la acompañante vegetariana."
      ],
      schedule: [
        { time: "08:00–09:00", desc: "Desayuno en la cabaña de Voss, equipaje y check-out." },
        { time: "09:00–10:00", desc: "Conducción hacia Eidfjord, cruzando el puente de Hardanger." },
        { time: "10:00–10:30", desc: "Paseo por el puerto de Eidfjord y café rápido." },
        { time: "10:30–11:00", desc: "Ascenso por el desfiladero de Måbødalen hasta Vøringsfossen." },
        { time: "11:00–12:30", desc: "Visita de los miradores y pasarelas de la cascada Vøringsfossen." },
        { time: "12:30–14:30", desc: "Travesía por la meseta de Hardangervidda y el valle de Hallingdal." },
        { time: "14:30–15:30", desc: "Parada para almorzar en el pueblo de Gol." },
        { time: "15:30–18:00", desc: "Tramo final de conducción hacia la ciudad de Oslo." },
        { time: "18:00–19:00", desc: "🚗 Devolución Coche de Alquiler en Oslo Railway Station (Límite 19:00 h).", isFixed: true },
        { time: "19:00", desc: "Check-in en el Comfort Hotel Grand Central." },
        { time: "20:00", desc: "Cena relajada en Olivia (Østbanehallen), justo al lado del hotel." }
      ]
    },
    {
      dayNum: 9,
      title: "Día 9 — Explorando Oslo",
      date: "DOMINGO, 9 DE AGOSTO DE 2026",
      subHeader: "Oslo — día completo a pie y en transporte público",
      image: "assets/images/image11.png",
      accommodation: {
        name: "Comfort Hotel Grand Central",
        address: "Østbanehallen, Jernbanetorget 1, 0154 Oslo, Noruega",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Comfort+Hotel+Grand+Central,+%C3%98stbanehallen,+Jernbanetorget+1,+0154+Oslo,+Noruega",
        details: "segunda noche · desayuno incluido"
      },
      summary: "Día íntegramente dedicado a explorar la capital utilizando el transporte público y los barcos del puerto: la península de los museos (Bygdøy), el centro de la ciudad y el monumental Parque de las Esculturas de Vigeland.",
      goal: "Absorber la cultura nacional a través de sus barcos vikingos y expediciones polares, disfrutando del diseño nórdico, la gastronomía y la vibrante vida de las calles de Oslo.",
      nature: {
        flora: "Ecosistemas mixtos caducifolios y de coníferas característicos del Oslofjord.",
        geology: "Análisis del 'Oslo Graben', una fosa tectónica con importantes registros sedimentarios paleozoicos y abundancia de fósiles marinos."
      },
      travelTimes: [
        { from: "Comfort Hotel Grand Central (Estación)", to: "Muelle Rådhusbrygge 3 (Puerto)", desc: "≈ 1.2 km · 15 min paseo a pie por el centro" },
        { from: "Muelle Rådhusbrygge", to: "Península de los Museos (Bygdøy)", desc: "≈ 3 km · 15 min en barco urbano / ferry municipal" },
        { from: "Península de Bygdøy", to: "Parque de Esculturas de Vigeland", desc: "≈ 4 km · 15 min en autobús línea 30" },
        { from: "Parque Vigeland", to: "Ópera de Oslo y Barrio de Bjørvika", desc: "≈ 3.5 km · 15 min en tranvía línea 12" }
      ],
      itinerary: [
        {
          section: "Explorando Oslo",
          items: [
            { name: "🚩 Free Tour Oslo: Historia y Cultura ✅ RESERVADO", desc: "<strong>Tour confirmado en español con guía local (paraguas blanco).</strong><br><br>📍 <b>Punto de encuentro:</b> <a href='https://www.google.com/maps/search/?api=1&query=Christiania+Torv+4+Oslo' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Christiania Torv 4, 0158 Oslo ↗</a> (al lado de la estatua del dedo)<br>🕙 <b>Hora:</b> 09:30 h (llegar 5 min antes)<br><br><b>Itinerario del tour:</b> Rolf Strangers plass → Aker Brygge → Ayuntamiento (Rådhuset) → Stortingsgata 17 → Parlamento de Oslo (Stortinget) → Catedral de Oslo → Estación Central de Oslo → Ópera de Oslo / Biblioteca Nacional<br><br>💡 <b>Tip:</b> No cambiar efectivo — tasa de cambio pésima en las casas de cambio. El guía acepta pago con tarjeta. 💳", isFixed: true },
            { name: "Península de los Museos (Bygdøy)", image: "assets/images/facilitatrip_oslo_harbor.jpg", desc: "Acceso mediante barco regular desde el puerto del Ayuntamiento de Oslo. Zona residencial rodeada de naturaleza que alberga los museos más icónicos de Noruega: el Museo Fram (con la mítica nave polar de madera), el Museo de Barcos Vikingos (con embarcaciones reales del siglo IX) y el Museo Folclórico Noruego al aire libre (con más de 150 edificaciones históricas y una stave church medieval).<br><br>🚶 <b>Dónde aparcar:</b> Día sin coche (devolución realizada el Día 8). Desplazamiento a pie o en transporte urbano desde el hotel.<br>⚓ <b>Dónde cogerlo:</b> En el <b>Muelle del Ayuntamiento de Oslo (<a href='https://www.google.com/maps/search/?api=1&query=R%C3%A5dhusbrygge+3+Oslo' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Rådhusbrygge 3 ↗</a>)</b>, ubicado justo enfrente del Ayuntamiento (Rådhuset), abordando el barco regular de pasajeros (Ruter B9 / Bygdøyfergen)." },
            { name: "Karl Johans gate y Centro Histórico", image: "assets/images/facilitatrip_oslo_skyline.jpg", desc: "La gran avenida peatonal de la capital que conecta la Estación Central con el Palacio Real. Paseo agradable contemplando el edificio del Parlamento (Stortinget), el Teatro Nacional y el ambiente cosmopolita de las plazas del centro." },
            { name: "Parque de las Esculturas Vigeland", image: "assets/images/facilitatrip_vigeland_statue.jpg", desc: "Monumental parque público que alberga la mayor colección de esculturas creadas por un único artista (Gustav Vigeland). Más de 200 figuras en bronce, hierro y granito que expresan emociones humanas, destacando la gran columna del Monolito (17m) y la famosa escultura de 'El Niño Enfadado' (Sinnataggen)." },
            { name: "Ópera de Oslo", image: "assets/images/facilitatrip_oslo_opera.jpg", desc: "Obra maestra de la arquitectura contemporánea nórdica diseñada por el estudio Snøhetta. Edificio de mármol blanco de Carrara y cristal inclinado que emerge directamente de las aguas del fiordo. Su tejado exterior es totalmente transitable a pie hasta la cima para disfrutar de vistas al puerto." },
            { name: "Holmenkollen", image: "assets/images/facilitatrip_holmenkollen.jpg", desc: "Ascenso en tranvía de montaña hasta la mítica colina de esquí de Holmenkollen. Presidida por la colosal estructura de acero del trampolín de saltos de esquí, ofrece la perspectiva panorámica más deslumbrante al atardecer sobre todo el fiordo de Oslo y el archipiélago." }
          ]
        }
      ],
      cityGuide: {
        shopping: "<p>Calles comerciales en torno a <a href='https://www.google.com/maps/search/?api=1&query=Karl+Johans+gate+Oslo+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Karl Johan ↗</a>.</p><p>Zona alternativa en <a href='https://www.google.com/maps/search/?api=1&query=Grunerlokka+Oslo+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Grünerløkka ↗</a>.</p>",
        eating: "<p><a href='https://www.google.com/maps/search/?api=1&query=Nordvegan+Oslo+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Nordvegan ↗</a> (platos basados 100% en plantas, 220-350 NOK).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Kumi+Oslo+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Kumi ↗</a> (brunch orgánico vegetariano, diseño japonés/nórdico en el muelle, 250-400 NOK).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Oslo+Street+Food+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Oslo Street Food ↗</a> (mercado gastronómico con puestos internacionales, 180-350 NOK).</p>",
        drinks: "<p><a href='https://www.google.com/maps/search/?api=1&query=Himkok+Oslo+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Himkok ↗</a> (coctelería de autor premium, galardonada internacionalmente, 150-200 NOK).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Kulturhuset+Oslo+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Kulturhuset ↗</a> (cerveza, vino y juegos de mesa en ambiente alternativo).</p><p><a href='https://www.google.com/maps/search/?api=1&query=Grunerlokka+Oslo+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Grünerløkka ↗</a> (distrito hipster con microcervecerías como <a href='https://www.google.com/maps/search/?api=1&query=Schouskjelleren+Mikrobryggeri+Oslo+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Schouskjelleren ↗</a>).</p>"
      },
      tips: [
        "Comprad la Oslo Pass (Oslo Card): incluye transporte público ilimitado y entradas gratuitas a la mayoría de los museos de Bygdøy.",
        "Reservad las entradas para los museos de Bygdøy con antelación. En agosto suele haber colas muy largas."
      ],
      schedule: [
        { time: "08:00–09:15", desc: "Desayuno buffet completo en el Comfort Hotel Grand Central." },
        { time: "09:30–12:00", desc: "🚩 FREE TOUR CONFIRMADO EN OSLO (09:30h): 'Historia y Cultura'. Punto de encuentro: Christiania Torv 4 (estatua del dedo, guía con paraguas blanco). Recorrido por Rolf Strangers plass, Aker Brygge, Ayuntamiento (Rådhuset), Stortingsgata 17, Parlamento (Stortinget), Catedral de Oslo, Estación Central y Ópera de Oslo / Biblioteca Nacional.", isFixed: true },
        { time: "12:00–13:30", desc: "Paseo por el puerto de Aker Brygge y muelle del Ayuntamiento." },
        { time: "13:30–15:00", desc: "Barco a la Península de Bygdøy y almuerzo en Oslo Street Food / Mathallen." },
        { time: "15:00–17:00", desc: "Visita a los museos de Bygdøy (Museo Fram / Museo Folclórico Noruego)." },
        { time: "17:00–18:30", desc: "Visita al Parque Vigeland para admirar el Monolito y las esculturas de bronce." },
        { time: "18:30–20:00", desc: "Metro/tranvía a Holmenkollen para contemplar el atardecer panorámico sobre el fiordo." },
        { time: "20:00", desc: "Regreso al centro para cena de despedida y copas por Grünerløkka (Himkok / Kulturhuset)." }
      ]
    },
    {
      dayNum: 10,
      title: "Día 10 — Despedida nórdica y regreso a casa",
      date: "LUNES, 10 DE AGOSTO DE 2026",
      subHeader: "Oslo → Aeropuerto de Gardermoen → Vuelo de regreso",
      image: "assets/images/image12.png",
      accommodation: {
        name: "Salida del hotel",
        address: "Comfort Hotel Grand Central, Oslo",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Comfort+Hotel+Grand+Central,+%C3%98stbanehallen,+Jernbanetorget+1,+0154+Oslo,+Noruega",
        details: "check-out y fin del viaje"
      },
      summary: "Última mañana en Oslo para realizar compras de última hora o un breve paseo por los alrededores de la estación central, seguido del traslado rápido y directo en tren hacia el aeropuerto de Gardermoen.",
      goal: "Cerrar el viaje de forma relajada y eficiente, aprovechando la excelente ubicación del alojamiento para garantizar un trayecto al aeropuerto libre de estrés.",
      nature: {
        flora: "Ecosistemas del litoral del fiordo de Oslo.",
        geology: "Conclusión sobre la relevancia científica y la necesidad de monitoreo biológico sistemático para la conservación de la resiliencia en ecosistemas nórdicos."
      },
      travelTimes: [
        { from: "Comfort Hotel Grand Central (Estación)", to: "Terminal Aeropuerto Oslo (OSL)", desc: "≈ 47 km · 19 min en tren exprés Flytoget / 22 min en Vy" }
      ],
      itinerary: [
        {
          section: "Traslado al Aeropuerto",
          items: [
            { name: "Opción Premium: Flytoget", desc: "Tren rápido de alta frecuencia cada 10-20 minutos. Tarda exactamente 22 minutos al aeropuerto.<br><br>🚉 <b>Dónde cogerlo:</b> Andenes express Flytoget en la <b>Estación Central de Oslo (<a href='https://www.google.com/maps/search/?api=1&query=Oslo+Sentralstasjon' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Oslo S ↗</a>)</b>." },
            { name: "Opción Inteligente: Tren Regional (Vy)", desc: "Tren regular de cercanías. Tarda 23 minutos (solo 1 min más) y el precio es aproximadamente la mitad de la tarifa del Flytoget. Ideal para un grupo de 4 adultos.<br><br>🚶 <b>Dónde aparcar:</b> No aplica (transporte público).<br>🚉 <b>Dónde cogerlo:</b> En las vías de la <b>Estación Central de Oslo (<a href='https://www.google.com/maps/search/?api=1&query=Oslo+Sentralstasjon' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>Oslo Sentralstasjon / Oslo S ↗</a>)</b>, con acceso directo desde el vestíbulo del Comfort Hotel Grand Central." }
          ]
        }
      ],
      cityGuide: {
        intro: "Últimas compras de recuerdos en el centro de Oslo y traslado rápido en tren al aeropuerto de Gardermoen.",
        shopping: "<p><a href='https://www.google.com/maps/search/?api=1&query=Karl+Johans+gate+Oslo+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Calle Karl Johans gate y Galería Østbanehallen ↗</a>: compras de última hora (artesanía, ropa de lana, cortadores de queso, chocolates Freia).</p><p>🛒 <b>Compra de Alcohol (Vinmonopolet):</b> Si deseáis comprar licores tradicionales noruegos (como Aquavit / Akevitt) o vino de más de 4.7% de alcohol, recordad acudir a la tienda estatal Vinmonopolet (p. ej. en la Estación Central o centros comerciales) antes de la partida.</p>",
        breakfast: "<p>Desayuno buffet completo en el <a href='https://www.google.com/maps/search/?api=1&query=Comfort+Hotel+Grand+Central+Oslo+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Comfort Hotel Grand Central ↗</a>.</p>",
        eating: "<p><a href='https://www.google.com/maps/search/?api=1&query=Ostbanehallen+Oslo+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Mercado Gastronómico de Østbanehallen ↗</a>: excelentes opciones para un almuerzo ligero o tentempié antes de tomar el tren al aeropuerto (restaurantes de pasta, ensaladas, sushi y bocadillos gourmet).</p>",
        drinks: "<p><a href='https://www.google.com/maps/search/?api=1&query=Ostbanehallen+Oslo+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Cafeterías de Østbanehallen ↗</a>: café de especialidad y zumos frescos para despedir el viaje.</p>",
        whatToSee: "<p><a href='https://www.google.com/maps/search/?api=1&query=Oslo+Central+Station+Noruega' target='_blank' rel='noopener noreferrer' style='color: inherit; text-decoration: underline;'>📍 Estación Central de Oslo (Oslo S / Østbanehallen) ↗</a>: edificio histórico del siglo XIX reconvertido en un moderno centro de ocio y transportes.</p>"
      },
      tips: [
        "Comprad los billetes de Vy o Flytoget a través de las apps oficiales (Ruter/Vy) o en las máquinas de la estación central para evitar retrasos de última hora."
      ],
      schedule: [
        { time: "07:50–11:35", desc: "✈️ Vuelo Oslo-Gardermoen (OSL) → Madrid-Barajas (MAD) [Norwegian DY 1718 - Jose Alberto Pazos Ferreiro].", isFixed: true },
        { time: "17:10–20:18", desc: "🚄 AVE Vuelta: Madrid Chamartín (17:10) → Santiago de Compostela (20:18).", isFixed: true }
      ]
    }
  ],
  accommodationsSummary: [
    { day: "1 (1 ago)", city: "Oslo — Aeropuerto", name: "Thon Hotel Oslo Airport", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Thon+Hotel+Oslo+Airport,+Balder+All%C3%A8+22,+2060+Gardermoen,+Noruega", details: "2 hab. dobles twin · desayuno incluido" },
    { day: "2 (2 ago)", city: "Beitostølen", name: "Hovi Cabins", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hovi+Cabins,+Bygdinvegen+3760,+2953+Beitost%C3%B8len,+Noruega", details: "1 cabaña 4 adultos (2 individuales + litera) · sin comida" },
    { day: "3 (3 ago)", city: "Beitostølen", name: "Hovi Cabins", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hovi+Cabins,+Bygdinvegen+3760,+2953+Beitost%C3%B8len,+Noruega", details: "2ª noche" },
    { day: "4 (4 ago)", city: "Stryn / Hornindal", name: "Havila Hotel Raftevold", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Havila+Hotel+Raftevold,+Fjordvegen+5,+6763+Hornindal,+Noruega", details: "2 hab. dobles twin · desayuno incluido" },
    { day: "5 (5 ago)", city: "Stryn / Hornindal", name: "Havila Hotel Raftevold", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Havila+Hotel+Raftevold,+Fjordvegen+5,+6763+Hornindal,+Noruega", details: "2ª noche" },
    { day: "6 (6 ago)", city: "Voss", name: "Voss Resort Bavallstunet", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Voss+Resort+Bavallstunet,+Bavallsvegen+227,+5710+Skulestadmo,+Noruega", details: "1 cabaña 4 adultos, sauna privada · sin comida" },
    { day: "7 (7 ago)", city: "Voss", name: "Voss Resort Bavallstunet", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Voss+Resort+Bavallstunet,+Bavallsvegen+227,+5710+Skulestadmo,+Noruega", details: "2ª noche" },
    { day: "8 (8 ago)", city: "Oslo — Centro", name: "Comfort Hotel Grand Central", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Comfort+Hotel+Grand+Central,+%C3%98stbanehallen,+Jernbanetorget+1,+0154+Oslo,+Noruega", details: "2 hab. dobles twin · desayuno incluido" },
    { day: "9 (9 ago)", city: "Oslo — Centro", name: "Comfort Hotel Grand Central", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Comfort+Hotel+Grand+Central,+%C3%98stbanehallen,+Jernbanetorget+1,+0154+Oslo,+Noruega", details: "2ª noche" },
    { day: "10 (10 ago)", city: "Fin del viaje", name: "—", details: "Traslado al aeropuerto y vuelo de regreso" }
  ],
  accommodationsDetailed: [
    {
      id: "thon-gardermoen",
      name: "Thon Hotel Oslo Airport",
      stayDays: "Día 1 (1 de Agosto)",
      location: "Gardermoen (Aeropuerto de Oslo)",
      address: "Balder Allè 22, 2060 Gardermoen, Noruega",
      image: "assets/images/hotel_thon_gardermoen.png",
      gallery: [
        { url: "assets/images/hotel_thon_gardermoen.png", caption: "🏢 Fachada Exterior Thon Hotel Oslo Airport" },
        { url: "assets/images/thon_oslo_airport_room.png", caption: "🛏️ Habitación Doble Twin Confortable" },
        { url: "assets/images/facilitatrip_oslo_harbor.jpg", caption: "🌊 Entorno y Puerto de Oslo (Tourist Forum)" }
      ],
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Thon+Hotel+Oslo+Airport,+Balder+All%C3%A8+22,+2060+Gardermoen,+Noruega",
      roomType: "2 Habitaciones Dobles (Twin)",
      mealPlan: "Desayuno buffet completo incluido",
      amenities: [
        "🍳 Desayuno buffet nórdico incluido",
        "📶 WiFi gratuita de alta velocidad",
        "🏋️ Gimnasio de acceso libre 24h",
        "🌱 Certificado Ecológico Sostenible",
        "🚌 Bus shuttle aeropuerto (a 7 km)",
        "🅿️ Aparcamiento propio en el hotel"
      ],
      description: "Hotel ecológico moderno a 7 km del Aeropuerto de Oslo (Gardermoen). Ideal para descansar la noche de llegada tras recoger el coche de alquiler sin el estrés de entrar en la capital."
    },
    {
      id: "hovi-cabins",
      name: "Hovi Cabins",
      stayDays: "Días 2 y 3 (2 y 3 de Agosto)",
      location: "Beitostølen (Jotunheimen)",
      address: "Bygdinvegen 3760, 2953 Beitostølen, Noruega",
      image: "assets/images/hovi_user_5.jpg",
      gallery: [
        { url: "assets/images/hovi_user_5.jpg", caption: "🏡 Cabaña Tradicional Hovi (Foto Real)" },
        { url: "assets/images/hovi_user_1.jpg", caption: "🌲 Entorno de Montaña en Beitostølen" },
        { url: "assets/images/hovi_user_2.jpg", caption: "🛋️ Salón y Zonas Comunes de la Cabaña" },
        { url: "assets/images/hovi_user_3.jpg", caption: "🏔️ Vistas de Jotunheimen desde la Terraza" },
        { url: "assets/images/hovi_user_4.jpg", caption: "🍳 Cocina Equipada Cabaña" }
      ],
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hovi+Cabins,+Bygdinvegen+3760,+2953+Beitost%C3%B8len,+Noruega",
      roomType: "1 Cabaña Completa para 4 Adultos (2 camas ind. + litera)",
      mealPlan: "Cocina propia totalmente equipada",
      amenities: [
        "🍳 Cocina propia 100% equipada",
        "🏔️ Vistas a las montañas de Jotunheimen",
        "🛋️ Salón rústico tradicional de madera",
        "🛒 A 5 min a pie del supermercado SPAR",
        "🅿️ Aparcamiento privado junto a la puerta",
        "🔥 Calefacción acogedora de montaña"
      ],
      description: "Cabañas tradicionales noruegas situadas en la estación alpina de Beitostølen. Cuentan con cocina propia para preparar cenas de grupo, ambiente de montaña auténtico y proximidad a las rutas del lago Bygdin y Gjende."
    },
    {
      id: "hotel-raftevold",
      name: "Havila Hotel Raftevold",
      stayDays: "Días 4 y 5 (4 y 5 de Agosto)",
      location: "Hornindal / Stryn",
      address: "Fjordvegen 5, 6763 Hornindal, Noruega",
      image: "assets/images/hotel_raftevold.png",
      gallery: [
        { url: "assets/images/hotel_raftevold.png", caption: "🌊 Havila Hotel Raftevold a orillas del Lago Hornindal" },
        { url: "assets/images/image2.png", caption: "🏔️ Vistas Panorámicas de los Fiordos de Stryn" }
      ],
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Havila+Hotel+Raftevold,+Fjordvegen+5,+6763+Hornindal,+Noruega",
      roomType: "2 Habitaciones Dobles Estándar (Twin)",
      mealPlan: "Desayuno buffet nórdico incluido",
      amenities: [
        "🍳 Desayuno buffet nórdico incluido",
        "🌊 A orillas del lago Hornindalsvatnet",
        "🍷 Bar con terraza panorámica sobre el lago",
        "🍽️ Restaurante gastronómico de platos locales",
        "📶 WiFi gratuita en todas las estancias",
        "🅿️ Aparcamiento gratuito en el hotel"
      ],
      description: "Hotel histórico con encanto situado a orillas del lago Hornindalsvatnet (el lago más profundo de Europa: 514m). Ubicación tranquila y perfecta como base para las excursiones a Geiranger y Trollstigen."
    },
    {
      id: "voss-resort",
      name: "Voss Resort Bavallstunet",
      stayDays: "Días 6 y 7 (6 y 7 de Agosto)",
      location: "Voss (Capital de la Adrenalina)",
      address: "Bavallsvegen 227, 5710 Skulestadmo, Noruega",
      image: "assets/images/voss_resort_cabin.png",
      gallery: [
        { url: "assets/images/voss_resort_cabin.png", caption: "🏡 Cabaña de Madera de Gran Tamaño Bavallstunet" },
        { url: "assets/images/image6.png", caption: "🧖‍♀️ Sauna Privada y Ambiente de Montaña" }
      ],
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Voss+Resort+Bavallstunet,+Bavallsvegen+227,+5710+Skulestadmo,+Noruega",
      roomType: "1 Cabaña de Madera Grande (Bavallstunet 65)",
      mealPlan: "Cocina propia equipada con electrodomésticos",
      amenities: [
        "🧖‍♀️ SAUNA PRIVADA de madera en la cabaña",
        "🔥 Chimenea / estufa de leña tradicional",
        "🍽️ Cocina completa con vitro y lavavajillas",
        "🌲 Terraza panorámica con vistas alpinas",
        "🧼 Lavadora y secadora propia",
        "🅿️ Aparcamiento privado en la misma puerta"
      ],
      description: "Espectacular cabaña nórdica de alta gama con sauna privada integrada y chimenea. Ideal para relajarse tras los recorridos por el Nærøyfjord, Tren de Flåm y la excursión a Bergen."
    },
    {
      id: "comfort-oslo",
      name: "Comfort Hotel Grand Central",
      stayDays: "Días 8 y 9 (8 y 9 de Agosto)",
      location: "Oslo Centro (Estación Central)",
      address: "Østbanehallen, Jernbanetorget 1, 0154 Oslo, Noruega",
      image: "assets/images/comfort_hotel_oslo.png",
      gallery: [
        { url: "assets/images/comfort_hotel_oslo.png", caption: "🏬 Comfort Hotel Grand Central (Østbanehallen)" },
        { url: "assets/images/facilitatrip_oslo_skyline.jpg", caption: "🌆 Skyline Panorámico de Oslo (Tourist Forum)" },
        { url: "assets/images/facilitatrip_oslo_opera.jpg", caption: "🏛️ Ópera de Oslo a 2 minutos a pie (Tourist Forum)" }
      ],
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Comfort+Hotel+Grand+Central,+%C3%98stbanehallen,+Jernbanetorget+1,+0154+Oslo,+Noruega",
      roomType: "2 Habitaciones Dobles (Twin)",
      mealPlan: "Desayuno buffet orgánico premium incluido",
      amenities: [
        "🍳 Desayuno buffet orgánico premium",
        "🚆 Dentro de la Estación Central (Østbanehallen)",
        "🚶‍♂️ A 2 min a pie de la Ópera y Karl Johan",
        "🏋️ Gimnasio 24h moderno",
        "📶 WiFi ultra-rápida gratuita",
        "🍸 Barception moderno en el vestíbulo"
      ],
      description: "Hotel boutique urbano de diseño vanguardista dentro del edificio histórico Østbanehallen de la Estación Central de Oslo. Ubicación inigualable para explorar la capital a pie y tomar el tren rápido al aeropuerto el último día."
    }
  ],
  generalRules: {
    driving: [
      "Horario de devolución: Devolver el coche antes de las 19:00 del 08-08-2026 en Oslo Railway Station para evitar cargos de un día extra completo.",
      "Límites de velocidad: Estrictos de 80 km/h en carreteras nacionales y 50 km/h o inferior en zonas urbanas. Hay numerosos radares fijos indicados con antelación.",
      "Animales en calzada: Frecuente presencia de ovejas, cabras y renos descansando o cruzando las carreteras de montaña.",
      "Peajes (AutoPass): Registrados automáticamente por el lector del coche de alquiler. La agencia los facturará al finalizar el viaje.",
      "EasyPark: Descargar e instalar la app antes de viajar. Gestiona el aparcamiento en el 90% de los estacionamientos de Noruega cobrando exactamente por los minutos de estancia."
    ],
    parkings: [
      {
        day: "Día 2",
        name: "Parking Disuasorio de Reinsvangen",
        location: "Gjendesheim / Jotunheimen",
        notes: "Obligatorio para el barco de Gjende (lanzadera gratuita al muelle incluidos).",
        mapsUrl: "https://www.google.com/maps/place/Reinsvangen+parkering/@61.4863745,8.8275523,17z/data=!3m1!4b1!4m6!3m5!1s0x46153f9a3ff2dd47:0x114d3f7e1a621516!8m2!3d61.486372!4d8.8324232!16s%2Fg%2F11g2xrpwkf?entry=ttu"
      },
      {
        day: "Día 3",
        name: "Bygdin Høyfjellshotell Parkering",
        location: "Lago Bygdin (Ruta 51)",
        notes: "Aparcamiento cómodo frente al lago Bygdin para la ruta a pie.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bygdin+Hoyfjellshotell+Parkering"
      },
      {
        day: "Día 3",
        name: "Beitostølen Skisenter Parkering",
        location: "Beitostølen (Sommerpark)",
        notes: "Estacionamiento gratuito en la base de las pistas del Sommerpark.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Beitostolen+Skisenter+Parkering"
      },
      {
        day: "Día 4",
        name: "Sohlbergplassen Parkering",
        location: "Ruta Escénica de Rondane",
        notes: "Aparcamiento del mirador sobre el lago Atnsjøen.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sohlbergplassen+Parkering"
      },
      {
        day: "Día 5",
        name: "Hellesylt Ferjekai Parkering",
        location: "Puerto de Hellesylt",
        notes: "Zona de espera y embarque para el ferry de Geiranger.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hellesylt+Ferjekai"
      },
      {
        day: "Día 5",
        name: "Flydalsjuvet & Ørnesvingen Parkering",
        location: "Miradores de Geiranger",
        notes: "Aparcamientos habilitados en las plataformas panorámicas del fiordo.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Flydalsjuvet+Parkering"
      },
      {
        day: "Día 5",
        name: "Trollstigen Besøkssenter Parkering",
        location: "Carretera de los Trolls",
        notes: "Aparcamiento del centro de visitantes y pasarelas metálicas.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Trollstigen+Parkering"
      },
      {
        day: "Día 6",
        name: "Kaupanger Ferjekai Parkering",
        location: "Puerto de Kaupanger",
        notes: "Zona de embarque del ferry panorámico por el Nærøyfjord.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kaupanger+Kai"
      },
      {
        day: "Día 6",
        name: "Flåm Stasjon Parkering",
        location: "Flåm",
        notes: "Aparcamiento principal junto a la estación del Tren de Flåm.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Flam+Stasjon+Parkering"
      },
      {
        day: "Día 6",
        name: "Stegastein Utsiktspunkt Parkering",
        location: "Mirador de Stegastein",
        notes: "Aparcamiento junto al mirador colgado sobre el Aurlandsfjord.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Stegastein+Parkering"
      },
      {
        day: "Día 7",
        name: "KlosterGarasjen / ByGarasjen",
        location: "Bergen Centro",
        notes: "Parkings subterráneos (P-hus) recomendados para evitar multas de residentes.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=KlosterGarasjen+Bergen"
      },
      {
        day: "Día 8",
        name: "Vøringsfossen Parkering (Fossli)",
        location: "Cascada Vøringsfossen",
        notes: "Aparcamiento del mirador de la cascada y pasarela suspendida.",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Voringfossen+Parkering"
      },
      {
        day: "Día 8",
        name: "Devolución Coche - Oslo Sentralstasjon",
        location: "Estación Central de Oslo",
        notes: "Punto oficial de entrega del vehículo de alquiler (antes de las 19:00).",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Oslo+Central+Station+Car+Rental+Return"
      }
    ],
    bookings: [
      { day: 2, date: "02/08/2026", place: "Jotunheimen", item: "Barco Gjende (Gjendebåtene)", time: "15:25", price: "22€ - 31€", url: "gjende.no", reserved: true },
      { day: 2, date: "02/08/2026", place: "Reinsvangen", item: "Parking Gjende (Falta matrícula coche)", time: "14:15", price: "??", url: "https://gjende.no/en/parking-shuttle/", reserved: false },
      { day: 5, date: "05/08/2026", place: "Geiranger", item: "Ferry Hellesylt-Geiranger (con coche)", time: "09:30", price: "40€ - 60€", url: "geirangerfjord.no", reserved: true },
      { day: 6, date: "06/08/2026", place: "Nærøyfjord/Flåm", item: "Ferry Kaupanger-Gudvangen + Tren de Flåm", time: "12:30 y 18:25", price: "60€ - 90€", url: "norwaysbest.com", reserved: true },
      { day: 7, date: "07/08/2026", place: "Bergen", item: "Free Tour 'Mitos, Historia y Bryggen'", time: "13:00 / 14:00", price: "Gratis (Propina)", url: "guruwalk.com", reserved: false },
      { day: 9, date: "09/08/2026", place: "Oslo", item: "Oslo Pass / Entradas Museos Bygdøy", time: "10:00", price: "15€ - 20€", url: "visitoslo.com", reserved: false }
    ],
    packing: [
      "Clima muy cambiante: Desde 25°C soleados en Oslo hasta 10°C con viento y lluvia intensa en miradores de montaña o Bergen.",
      "El sistema de tres capas es obligatorio: Primera capa transpirable, segunda de abrigo (forro polar o jersey ligero) y tercera cortavientos/impermeable.",
      "Calzado técnico: Zapatillas de trekking impermeables o de senderismo con buen dibujo antideslizante."
    ],
    finance: [
      "Sociedad cashless: Prácticamente sin efectivo. Se puede pagar con tarjeta absolutamente todo (desde baños públicos hasta gofres de montaña).",
      "Tarjetas recomendadas: Llevar al menos dos tarjetas de bancos distintos sin comisiones de cambio de divisa extranjera (por si hay bloqueos de seguridad)."
    ],
    alcohol: [
      "Restricciones: En los supermercados normales solo se vende cerveza de hasta 4.7% de alcohol antes de las 20:00 (18:00 los sábados).",
      "Tiendas estatales (Vinmonopolet): El alcohol de graduación superior (vino, ginebra, licores) solo se vende en tiendas estatales con horarios muy reducidos y cerradas los domingos."
    ],
    health: [
      "Tarjeta Sanitaria Europea (TSE): Noruega pertenece al Espacio Económico Europeo, la TSE española es válida en toda la red pública de salud.",
      "Mosquitos: En las zonas de lagos y humedales de Jotunheimen en agosto hay abundancia de mosquitos. Llevar repelente eficaz en el neceser."
    ]
  },
  gastronomy: {
    omnivore: [
      { name: "Laks (Salmón noruego)", image: "assets/images/gastro_laks.png", desc: "Salmón ahumado (røykelaks) o fresco cocinado a la plancha. El mercado de pescado de Bergen es el sitio ideal para degustarlo." },
      { name: "Skrei (Bacalao ártico)", desc: "El bacalao noruego salvaje, valorado por la firmeza y calidad de su carne blanca." },
      { name: "Kjøttkaker", desc: "Albóndigas tradicionales de carne noruegas servidas con salsa marrón, puré de guisantes y mermelada dulce de arándanos rojos." },
      { name: "Pølse med lompe", desc: "El tentempié rápido noruego por excelencia. Perrito caliente envuelto en una tortita blanda de patata." }
    ],
    vegetarian: [
      { name: "🌱 Nordvegan & Kumi (Oslo)", desc: "Restaurantes 100% basados en plantas y brunch orgánico vegetariano con diseño nórdico. Platos gourmet coloridos, nutritivos y sabrosos." },
      { name: "🌱 Daily Pot (Bergen)", desc: "Boles saludables repletos de garbanzos, lentejas, quinoa, vegetales de temporada asados y sopas caseras nutritivas ideales para recargar energías." },
      { name: "🌱 Grønn Lapskaus (Guiso Vegetal)", desc: "Versión vegetariana del estofado tradicional noruego a base de patatas, rutabaga, zanahorias, puerros y finas hierbas de montaña." },
      { name: "🌱 Brunost (Queso marrón)", image: "assets/images/gastro_brunost.png", desc: "Queso de suero caramelizado dulce tradicional noruego. De sabor toffee salado. Perfecto en finas lonchas sobre tostadas o gofres." },
      { name: "🌱 Vafler (Gofres noruegos)", image: "assets/images/gastro_vafler.png", desc: "Gofres en forma de corazón, esponjosos y tiernos, servidos tradicionalmente con mermelada de frutos rojos y crema agria (rømme)." },
      { name: "🌱 Skillingsbolle", image: "assets/images/gastro_skillingsbolle.png", desc: "El icónico rollo artesanal de canela y azúcar noruego, estrella de las panaderías de Bergen y Stryn." },
      { name: "🌱 Multekrem", desc: "Postre tradicional de moras árticas silvestres (cloudberries) recolectadas en turberas de alta montaña con nata montada azucarada." }
    ],
    drinks: [
      { name: "Aquavit (Akevitt)", desc: "El licor nacional destilado de patata aromatizado con alcaravea, hinojo y comino. Tradicional para ayudar a digerir comidas copiosas." },
      { name: "Sidra de Hardanger (Hardangersider)", desc: "Llamada el 'champán de los fiordos'. Sidra de manzana artesana con denominación de origen protegida de calidad superior." },
      { name: "Cerveza Artesana", desc: "Excelente oferta en microcervecerías locales. Son muy populares las firmas como Ægir (en Flåm) o las cervecerías artesanales de Oslo y Voss." },
      { name: "Kaffe (Café de filtro)", desc: "Noruega es de los mayores consumidores per cápita del mundo. Un café solo de calidad es la combinación tradicional con los gofres en cada parada." }
    ]
  },
  souvenirs: [
    { name: "Dale of Norway", image: "assets/images/souvenir_dale_sweater.png", desc: "Jerséis de lana tradicionales noruegos de la más alta calidad y diseños geométricos clásicos. Extremadamente duraderos y abrigados." },
    { name: "Ostehøvel (Cortador de queso)", desc: "Invento noruego clásico. Utensilio metálico de cocina para cortar láminas finas y perfectas de Brunost." },
    { name: "Trolls de madera", image: "assets/images/souvenir_troll.png", desc: "Pequeñas figuras mitológicas. Los tallados a mano en madera tradicional tienen un valor artesanal único en comparación con los de resina." },
    { name: "Joyas de plata (Sølje)", desc: "Hermosos broches de plata de filigrana tradicionales que visten los trajes regionales Bunad en ocasiones especiales." },
    { name: "Mermelada de moras árticas (Multe)", desc: "Delicatessen gourmet difícil de conseguir debido a que las moras árticas solo crecen silvestres en turberas de alta montaña." },
    { name: "Chocolate Freia y Kvikk Lunsj", desc: "La marca nacional de chocolate. El Kvikk Lunsj (cuatro barritas de barquillo) es el snack obligatorio de todo senderista en Noruega." },
    { name: "Objetos de Diseño Nórdico", desc: "Piezas de vajilla de marcas tradicionales como Hadeland Glassverk o cerámicas minimalistas de autor." }
  ],
  recommendedApps: [
    { name: "EasyPark", category: "Navegación y Aparcamiento", desc: "La aplicación indispensable para pagar los estacionamientos públicos en casi todos los municipios de Noruega." },
    { name: "Vegvesen Trafikk", category: "Navegación y Aparcamiento", desc: "Aplicación oficial de carreteras. Informa de obras, cortes de carreteras (como Trollstigen) y horarios de ferris en tiempo real." },
    { name: "Google Maps (Offline)", category: "Navegación y Aparcamiento", desc: "Descargad la zona oeste previamente. En los valles cerrados y túneles largos se pierde la señal GPS/móvil por completo." },
    { name: "Yr.no", category: "Meteorología", desc: "Aplicación meteorológica oficial de Noruega. De alta precisión para valles y microclimas de montaña." },
    { name: "HappyCow", category: "Gastronomía", desc: "Imprescindible para ubicar cafeterías, supermercados y restaurantes con buenas opciones veganas y vegetarianas en zonas rurales." },
    { name: "Ruter", category: "Transporte y Utilidades", desc: "App de transporte urbano de Oslo para comprar billetes de metro, tranvía y ferris locales." },
    { name: "XE Currency", category: "Transporte y Utilidades", desc: "Conversor de divisas para calcular rápidamente las compras de Coronas Noruegas (NOK) a Euros (EUR)." },
    { name: "Google Translate (Cámara)", category: "Transporte y Utilidades", desc: "Muy útil en el supermercado para traducir los ingredientes alimenticios en los envases (para la dieta vegetariana) o carteles de aparcamiento." }
  ],
  weatherDestinations: [
    {
      id: "oslo",
      name: "Oslo / Gardermoen",
      category: "ciudades",
      region: "Capital & Aeropuerto",
      days: "Día 1, 8, 9 y 10",
      lat: 59.9139,
      lon: 10.7522,
      clothingTip: "Clima más suave y templado (18-24°C). Manga corta/larga y chaqueta ligera por la noche.",
      image: "assets/images/hotel_thon_gardermoen.png"
    },
    {
      id: "beitostolen",
      name: "Beitostølen & Jotunheimen",
      category: "montana",
      region: "Parque Nacional de Alta Montaña",
      days: "Días 2 y 3",
      lat: 61.2486,
      lon: 8.9056,
      clothingTip: "Clima alpino cambiante. Obligatorio sistema de 3 capas: térmica, forro polar e impermeable cortavientos.",
      image: "assets/images/hovi_cabins.png"
    },
    {
      id: "stryn",
      name: "Stryn & Hornindal",
      category: "fiordos",
      region: "Valles & Lago Hornindalsvatnet",
      days: "Días 4 y 5",
      lat: 61.9042,
      lon: 6.7228,
      clothingTip: "Ambiente húmedo de lago. Fresco de mañana (10-14°C) y templado a mediodía.",
      image: "assets/images/hotel_raftevold.png"
    },
    {
      id: "geiranger",
      name: "Fiordo de Geiranger & Trollstigen",
      category: "fiordos",
      region: "Fiordo Patrimonio Mundial & Miradores",
      days: "Día 5 (Excursión)",
      lat: 62.1008,
      lon: 7.2059,
      clothingTip: "Sensación térmica muy fría en la cubierta del ferry y en el mirador Dalsnibba (1500m). Llevar gorro y cortavientos.",
      image: "assets/images/image7.png"
    },
    {
      id: "flam",
      name: "Nærøyfjord & Flåm",
      category: "fiordos",
      region: "Fiordo Estrecho & Tren Histórico",
      days: "Día 6",
      lat: 60.8637,
      lon: 7.1132,
      clothingTip: "Viento marino constante durante la navegación por el fiordo. Chaqueta cortavientos imprescindible.",
      image: "assets/images/image8.png"
    },
    {
      id: "voss",
      name: "Voss Resort",
      category: "montana",
      region: "Interior Alpino & Ríos",
      days: "Días 6 y 7",
      lat: 60.6288,
      lon: 6.4258,
      clothingTip: "Noches frescas de montaña. Ideal para ropa cómoda tras disfrutar de la sauna privada.",
      image: "assets/images/voss_resort_cabin.png"
    },
    {
      id: "bergen",
      name: "Bergen (Puerta de los Fiordos)",
      category: "ciudades",
      region: "Costa Atlántica",
      days: "Día 7 (Excursión)",
      lat: 60.3913,
      lon: 5.3221,
      clothingTip: "Alta frecuencia de lluvias atlánticas. Chubasquero técnico con capucha, paraguas resistente y calzado impermeable.",
      image: "assets/images/image9.png"
    }
  ]
};


window.FIXED_SCHEDULES_DATA = [
  {
    id: "ave-ida",
    category: "tren",
    icon: "🚄",
    title: "AVE Ida: Santiago → Madrid Chamartín",
    date: "01/08/2026 (Sábado)",
    dayNum: 1,
    departure: "06:51 — Santiago de Compostela",
    arrival: "09:48 — Madrid Chamartín",
    details: "Tren AVE Ida directo. Llegada a Madrid con margen holgado previo al vuelo.",
    status: "Confirmado · Inamovible",
    tag: "TREN AVE"
  },
  {
    id: "vuelo-ida",
    category: "vuelo",
    icon: "✈️",
    title: "Vuelo Ida: Madrid Barajas → Oslo Gardermoen",
    date: "01/08/2026 (Sábado)",
    dayNum: 1,
    departure: "20:30 — Madrid-Barajas (MAD)",
    arrival: "23:55 — Oslo-Gardermoen (OSL)",
    company: "Norwegian Air Shuttle A.S",
    flightNum: "Vuelo DY 1719",
    details: "Salida de Madrid a las 20:30 h. Llegada a Oslo previa a la medianoche.",
    status: "Confirmado · Inamovible",
    tag: "VUELO NORWEGIAN"
  },
  {
    id: "coche-recogida",
    category: "coche",
    icon: "🚗",
    title: "Coche de Alquiler: Recogida en Aeropuerto Oslo",
    date: "02/08/2026 (Domingo)",
    dayNum: 2,
    time: "00:30 h (Madrugada tras vuelo)",
    location: "Oslo Airport Gardermoen (Agencia de recogida)",
    vehicle: "TOYOTA YARIS CROSS 4X4 AUT. o similar",
    details: "Recogida de llaves y vehículo inmediatamente tras retirar el equipaje.",
    status: "Confirmado · Inamovible",
    tag: "COCHE ALQUILER"
  },
  {
    id: "ferry-gjende",
    category: "ferry",
    icon: "⛴️",
    title: "Ferry Lago Gjende: Gjendesheim ↔ Gjendebu",
    date: "02/08/2026 (Domingo)",
    dayNum: 2,
    departure: "15:25 — Gjendesheim → 16:10 Gjendebu",
    return: "16:25 — Gjendebu → 17:15 Gjendesheim",
    details: "Navegación confirmada por el lago de aguas esmeralda. El barco de las 16:25 es el último del día.",
    status: "Confirmado · Inamovible",
    tag: "FERRY GJENDE"
  },
  {
    id: "ferry-geiranger",
    category: "ferry",
    icon: "⛴️",
    title: "Ferry Fiordo de Geiranger: Hellesylt → Geiranger",
    date: "05/08/2026 (Miércoles)",
    dayNum: 5,
    departure: "09:30 — Puerto de Hellesylt",
    arrival: "10:35 — Puerto de Geiranger",
    details: "Crucero panorámico Patrimonio UNESCO. Acudir al embarcadero con 20-30 min de antelación.",
    status: "Confirmado · Inamovible",
    tag: "FERRY GEIRANGER"
  },
  {
    id: "barco-naeroyfjord",
    category: "ferry",
    icon: "⛴️",
    title: "Barco Nærøyfjord: Kaupanger → Gudvangen",
    date: "06/08/2026 (Jueves)",
    dayNum: 6,
    departure: "12:30 — Kaupanger",
    arrival: "15:00 — Gudvangen",
    company: "Ferry Nærøyfjord",
    details: "Navegación por el fiordo más estrecho de Europa. Embarque puntual imprescindible.",
    status: "Confirmado · Inamovible",
    tag: "BARCO NÆRØYFJORD"
  },
  {
    id: "tren-flam",
    category: "tren",
    icon: "🚂",
    title: "Tren de Flåm (Flåmsbana): Flåm ↔ Myrdal",
    date: "06/08/2026 (Jueves)",
    dayNum: 6,
    departure: "18:25 - 19:20 (Flåm → Myrdal)",
    return: "19:35 - 20:30 (Myrdal → Flåm)",
    details: "Trayecto de ida y vuelta de fama mundial por raíles históricos de gran pendiente.",
    status: "Confirmado · Inamovible",
    tag: "TREN DE FLÅM"
  },
  {
    id: "freetour-bergen",
    category: "freetour",
    icon: "🚩",
    title: "Free Tour Bergen: Rincones Ocultos (Español)",
    date: "07/08/2026 (Viernes)",
    dayNum: 7,
    time: "11:00 h Exacta (Duración 2h)",
    location: "Olav Kyrres gate 27, 5014 Bergen (Glorieta Byparken / Musikkpaviljongen)",
    company: "Guía local Nati (chica del sombrero rojo)",
    details: "Recorrido a pie por 11 puntos históricos. Punto de encuentro: Pabellón de la Música Musikkpaviljongen. Pago voluntario al final (aprox. 15€/persona).",
    status: "Reservado · Inamovible",
    tag: "FREE TOUR BERGEN"
  },
  {
    id: "coche-devolucion",
    category: "coche",
    icon: "🚗",
    title: "Coche de Alquiler: Devolución en Oslo Central",
    date: "08/08/2026 (Sábado)",
    dayNum: 8,
    time: "19:00 h Exacta (Hora Límite)",
    location: "Oslo Railway Station (Estación Central de Oslo)",
    vehicle: "TOYOTA YARIS CROSS 4X4 AUT. o similar",
    details: "Devolución en la misma hora de recogida (19:00 h) para evitar penalización de día adicional.",
    status: "Confirmado · Inamovible",
    tag: "COCHE ALQUILER"
  },
  {
    id: "freetour-oslo",
    category: "freetour",
    icon: "🚩",
    title: "Free Tour Oslo: Historia y Cultura (Español)",
    date: "09/08/2026 (Domingo)",
    dayNum: 9,
    time: "09:30 h Exacta (Llegar 5 min antes)",
    location: "Christiania Torv 4, 0158 Oslo (Al lado de la estatua del dedo)",
    company: "Guía en español con paraguas blanco",
    details: "Recorrido histórico guiado por 8 puntos clave de la capital (Aker Brygge, Ayuntamiento, Parlamento, Catedral, Ópera). Se acepta pago en tarjeta o efectivo.",
    status: "Reservado · Inamovible",
    tag: "FREE TOUR OSLO"
  },
  {
    id: "vuelo-vuelta",
    category: "vuelo",
    icon: "✈️",
    title: "Vuelo Vuelta: Oslo Gardermoen → Madrid Barajas",
    date: "10/08/2026 (Lunes)",
    dayNum: 10,
    departure: "07:50 — Oslo-Gardermoen (OSL)",
    arrival: "11:35 — Madrid-Barajas (MAD)",
    passenger: "JOSE ALBERTO PAZOS FERREIRO",
    company: "Norwegian Air Shuttle A.S",
    flightNum: "Vuelo DY 1718",
    details: "Salida temprano desde Oslo Gardermoen con destino Madrid-Barajas.",
    status: "Confirmado · Inamovible",
    tag: "VUELO NORWEGIAN"
  },
  {
    id: "ave-vuelta",
    category: "tren",
    icon: "🚄",
    title: "AVE Vuelta: Madrid Chamartín → Santiago",
    date: "10/08/2026 (Lunes)",
    dayNum: 10,
    departure: "17:10 — Madrid Chamartín",
    arrival: "20:18 — Santiago de Compostela",
    details: "Tren AVE de vuelta directo a Santiago de Compostela tras el desembarque del vuelo.",
    status: "Confirmado · Inamovible",
    tag: "TREN AVE"
  }
];