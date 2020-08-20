if (workbox) {
  console.log('Workbox berhasil dimuat');
} else {
  console.log('Workbox gagal dimuat');
}

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(
  [
    ...self.__precacheManifest,
    {
      url:
        'https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat&display=swap',
      revision: 1,
    },
    {
      url:
        'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
      revision: 1,
    },
  ],
  {
    ignoreURLParametersMatching: [/.*/],
  },
);

workbox.routing.registerRoute(
  /^https:\/\/dicoding-restaurant-api\.el\.r\.appspot\.com\/(?:(list|detail))/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'restauro-dicoding-api',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
        maxEntries: 100,
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.CacheFirst({
    cacheName: 'restauro-images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
      }),
    ],
  }),
);

self.addEventListener('push', (event) => {
  let body = '';
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  const options = {
    body,
    icon: '../public/icons/icon-192x192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options),
  );
});
