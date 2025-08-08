self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("kaapi-cache-v1").then(cache => {
      return cache.addAll([
        "/Filter-kaapi/",
        "/Filter-kaapi/index.html",
        "/Filter-kaapi/style.css",
        "/Filter-kaapi/app.js",
        "/Filter-kaapi/icons/icon-192.png",
        "/Filter-kaapi/icons/icon-512.png",
        "/Filter-kaapi/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
