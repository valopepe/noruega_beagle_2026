const CACHE_NAME = "norway-beagle-v1";
const ASSETS = [
  "./",
  "index.html",
  "index.css",
  "app.js",
  "data.js",
  "manifest.json",
  "assets/images/icon-192.png",
  "assets/images/icon-512.png",
  "assets/images/image1.png",
  "assets/images/image2.png",
  "assets/images/image3.png",
  "assets/images/image4.png",
  "assets/images/image5.png",
  "assets/images/image6.png",
  "assets/images/image7.png",
  "assets/images/image8.png",
  "assets/images/image9.png",
  "assets/images/image10.png",
  "assets/images/image11.png",
  "assets/images/image12.png"
];

// Install Event - Cache all resources
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Caching all PWA assets...");
      return cache.addAll(ASSETS);
    })
  );
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

// Fetch Event - Serve Cache First, fallback to Network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
