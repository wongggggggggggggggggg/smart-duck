const CACHE_NAME = 'eco-app-v12';

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

// 攔截網路請求：
// - index.html 與資料檔：網路優先（確保更新立即生效），失敗才用快取
// - 其他檔案：快取優先，網路備援；只快取成功回應（避免快取到 404/錯誤頁）
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  const isPage = url.pathname === '/' || url.pathname.endsWith('/index.html');
  const isData = url.pathname.endsWith('/data/places.json') || url.pathname.endsWith('/data/species.js');

  if (isPage || isData) {
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
          }
          return response;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(e.request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, copy));
        }
        return response;
      });
    })
  );
});
