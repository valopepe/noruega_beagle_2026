const CACHE_NAME = "norway-beagle-v2";
const ASSETS = [
  "./",
  "index.html",
  "index.css",
  "app.js",
  "data.js",
  "manifest.json"
];

// Install Event - Cache resources
self.addEventListener("install", event => {
  self.skipWaiting();
});

// Activate Event - Clean up old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Network First, fallback to Cache
self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
