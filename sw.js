const CACHE_NAME = 'eco-app-v9';

// 安裝 Service Worker 並快取必要檔案
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // 基礎檔案快取（可根據需要補上其他 js 檔）
      return cache.addAll([
        './index.html',
        './styles.css',
        './app.js',
        './bird_detail.html',
        './bird_detail.css',
        './bird_detail.js',
        './place_detail.html',
        './place_detail.css',
        './place_detail.js',
        './data/places.json',
        './data/species.js'
      ]);
    })
  );
});

// 清除舊版快取，確保更新會生效
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// 攔截網路請求，優先從快取回傳
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});