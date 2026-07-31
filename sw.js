const CACHE_NAME = "norway-beagle-v3";
const ASSETS = [
  "./",
  "index.html",
  "index.css",
  "app.js",
  "data.js",
  "manifest.json"
];

// Install Event - Pre-cache assets and skip waiting immediately
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate Event - Clean up ALL old caches and claim clients
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Network First, fallback to Cache
self.addEventListener("fetch", event => {
  // Always use network for JS/HTML/CSS to avoid stale code bugs
  const url = new URL(event.request.url);
  const isCore = ['.js', '.css', '.html'].some(ext => url.pathname.endsWith(ext)) || url.pathname === '/';
  if (isCore) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .then(response => {
          // Update cache with fresh copy
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  }
});
