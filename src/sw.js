const VERSION = "1"
const CACHE_NAME = "offline-photo-album-" + VERSION;

self.addEventListener("fetch", (e) => {
  e.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(e.request);
    const networkResponsePromise = fetch(e.request);

    e.waitUntil((async () => {
      const networkResponse = await networkResponsePromise;
      await cache.put(e.request, networkResponse.clone());
    })());

    return cachedResponse || networkResponsePromise;
  })());
})

const CACHE_KEYS = [
  CACHE_NAME
]

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.filter(key => !CACHE_KEYS.includes(key)).map(key => caches.delete(key)));
    })
  )
})
