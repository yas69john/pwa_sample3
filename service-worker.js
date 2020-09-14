// service-worker.js
self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
self.addEventListener('fetch', function (event) { });

self.addEventListener('push', ev => {
    // payloadの取得
    const { title, msg, icon } = ev.data.json();
    self.registration.showNotification(title, {
        icon: icon,
        body: msg
    });
    self.registration.pushManager.getSubscription().then(subscription => {
        console.log(subscription);
    }, err => console.log(err));
});