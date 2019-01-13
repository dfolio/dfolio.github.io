---
permalink: sw.js
---
{%- assign vers= page.version| default: site.version -%}
{%- assign vsuff = 'v' | append: vers -%}
{%-if site.serviceWorker.workbox-%}
importScripts('{{site.serviceWorker.workbox.url}}');
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.core.setCacheNameDetails({
    prefix: '{{site.name| replace: " ","-"}}',
    suffix: '{{vsuff}}'
  });

  //workbox.skipWaiting();
  //workbox.clientsClaim();

  workbox.precaching.precacheAndRoute([]);

  const htmlHandler = workbox.strategies.networkFirst({
    cacheName: 'html-cache',    // Use a custom cache name
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 31 * 24 * 60 * 60,// Cache for a maximum of a month
      })
    ]
    });
  
  workbox.routing.registerRoute(/\.html$/,args => {
    return htmlHandler.handle(args).then(response => {
      if (!response) {
        console.log(`You are offline!`);
        return caches.match('/offline.html');
      } else if (response.status === 404) {
        console.log(`SW/WB: page not found?`);
        return caches.match('/404.html');
      }
      return response;
    });
  });
  
  workbox.routing.registerRoute(
    /assets\/css\/.*\.css/,
    workbox.strategies.cacheFirst({
      cacheName: 'css-cache',// Use a custom cache name
    })
  );

  workbox.routing.registerRoute(
    /assets\/(media|icons)\/.*\.(?:png|jpg|jpeg|svg)/,
    workbox.strategies.cacheFirst({
    cacheName: 'image-cache',    // Use a custom cache name
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,// Cache only 20 images
        maxAgeSeconds: 7 * 24 * 60 * 60,// Cache for a maximum of a week
      })
    ],
    })
  );

  workbox.routing.registerRoute(
    /^https?:\/\/oss.maxcdn.com/,
    workbox.strategies.staleWhileRevalidate()
  );

  workbox.googleAnalytics.initialize();
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
{%-endif -%}

