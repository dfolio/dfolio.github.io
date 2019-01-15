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

  workbox.precaching.precacheAndRoute([
  {
    "url": "assets/css/collapse.css",
    "revision": "4b4fc1e247e252e3db8f05f5d1530403"
  },
  {
    "url": "assets/css/comments.css",
    "revision": "716e01ddaa841d7caadfd7c0a4c493ea"
  },
  {
    "url": "assets/css/home.css",
    "revision": "905ce73c715c6712a06b100a044c9875"
  },
  {
    "url": "assets/css/main.css",
    "revision": "940fd72eb78b622ec097754eddb5eb4b"
  },
  {
    "url": "assets/css/style.css",
    "revision": "47fedbb6083b79a195bd8796f5e27ed4"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "c4b5638d0a2c7c9ed86965794df79507"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "f9aa51fc300c2c965e290252e5e54f4b"
  },
  {
    "url": "assets/icons/apple-touch-icon-precomposed.png",
    "revision": "2cbdb59a89ace5f9a6f25caee56d9d54"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "b2e41c4999bc2fcb8a9e96f7e8e67b6e"
  },
  {
    "url": "assets/icons/browserconfig.xml",
    "revision": "2ffcd20200afb108908de18b94c99e78"
  },
  {
    "url": "assets/icons/favicon-16x16.png",
    "revision": "67dc1eea95326aad577fdcd0e90bfc8f"
  },
  {
    "url": "assets/icons/favicon-32x32.png",
    "revision": "d9abcd7683b07d6be937d29137c7989b"
  },
  {
    "url": "assets/icons/logo.svg",
    "revision": "0e84aeead354184880d7e4225d0b41ce"
  },
  {
    "url": "assets/icons/mstile-144x144.png",
    "revision": "804ae648ee598fe3ae65bfb03c7d0f86"
  },
  {
    "url": "assets/icons/mstile-150x150.png",
    "revision": "382471fab4b60ccc64fec265493f5bff"
  },
  {
    "url": "assets/icons/mstile-310x150.png",
    "revision": "70509adceb1eed7ada85a5179d907428"
  },
  {
    "url": "assets/icons/mstile-310x310.png",
    "revision": "f292be37c06ee2faad17822948e9c950"
  },
  {
    "url": "assets/icons/mstile-70x70.png",
    "revision": "d6a6141749c583a2bddbf14b8bffd767"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "abcd864d5fca7a5866e972e0ff279f98"
  },
  {
    "url": "assets/media/autotools-process.png",
    "revision": "8785e094189023dfb30a2564f90172e9"
  },
  {
    "url": "assets/media/david_folio.png",
    "revision": "b2673badc20aa6f5510637cfdca80074"
  },
  {
    "url": "assets/media/dfolio.png",
    "revision": "28857a8e62b4b8d2ab9350ac32f965d5"
  },
  {
    "url": "assets/media/logo-90.png",
    "revision": "a69ab2d83fa0c00aa28a65b65ddfd878"
  },
  {
    "url": "assets/media/logo-ink.svg",
    "revision": "9fd399e1622191be2ec18ad6dd2bb439"
  },
  {
    "url": "assets/media/logo.png",
    "revision": "f9aa51fc300c2c965e290252e5e54f4b"
  },
  {
    "url": "assets/media/logo.svg",
    "revision": "0e84aeead354184880d7e4225d0b41ce"
  },
  {
    "url": "404.html",
    "revision": "6809afa83648a6df8cb0b06ed0e7dee5"
  },
  {
    "url": "docs/index.html",
    "revision": "6522c85f3be989a2812af353cf22fd86"
  },
  {
    "url": "docs/pandoc-df-thesis/configurations/index.html",
    "revision": "a8d4335e42fb84999204e5dd0611c2d9"
  },
  {
    "url": "docs/pandoc-df-thesis/df-markdown/index.html",
    "revision": "4419366f49fa20f2b9c6b2c103401cfc"
  },
  {
    "url": "docs/pandoc-df-thesis/getting-started/index.html",
    "revision": "5c11d4c3a3dfd956af5f1ce5f17d6d4b"
  },
  {
    "url": "docs/pandoc-df-thesis/index.html",
    "revision": "898be87e025ddc1b7a98638ca2216a00"
  },
  {
    "url": "docs/pandoc-df-thesis/installation/index.html",
    "revision": "e825ba6bab24bc91d5ffa06acb780560"
  },
  {
    "url": "docs/pandoc-df-thesis/organization/index.html",
    "revision": "190be9a56c9337f3797b03a96e57dd19"
  },
  {
    "url": "docs/pandoc-df-thesis/preamble/index.html",
    "revision": "24fc0bbd81ea38922da72e1232194dee"
  },
  {
    "url": "index.html",
    "revision": "1805b1224416df37114d20535df772e0"
  },
  {
    "url": "offline.html",
    "revision": "3190bd489a9d7e56fe63c4b6ca38708a"
  },
  {
    "url": "manifest.json",
    "revision": "c1248989bfa6485d9bafb2d0ac8fd304"
  },
  {
    "url": "favicon.ico",
    "revision": "d44e8d58678376cdfc3d969c09339eed"
  }
]);

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

