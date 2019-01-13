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
    "revision": "235d1e476b95f4436ece1fd85950c9d7"
  },
  {
    "url": "assets/css/comments.css",
    "revision": "716e01ddaa841d7caadfd7c0a4c493ea"
  },
  {
    "url": "assets/css/home.css",
    "revision": "ca6216c3becd713a9c5800f7a96f9120"
  },
  {
    "url": "assets/css/main.css",
    "revision": "06bbcc0588aed784e6c1ac4bc1b5dfe1"
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
    "revision": "7fc8acaa77a516d02570549009db338d"
  },
  {
    "url": "docs/index.html",
    "revision": "e634288ee06a41051bfd7078ed886e42"
  },
  {
    "url": "docs/pandoc-df-thesis-template/configurations/index.html",
    "revision": "8c8c0d5c7c834cb22f51cc6c19dc55df"
  },
  {
    "url": "docs/pandoc-df-thesis-template/df-markdown/index.html",
    "revision": "287adbe478bca55607db2bf7a44b792b"
  },
  {
    "url": "docs/pandoc-df-thesis-template/getting-started/index.html",
    "revision": "e84097d8a7d32e068c5030f013ff460f"
  },
  {
    "url": "docs/pandoc-df-thesis-template/installation/index.html",
    "revision": "17cfc3521ea30ede44b7ab20bdf9ab11"
  },
  {
    "url": "docs/pandoc-df-thesis-template/organization/index.html",
    "revision": "778d373f837e3a31da1739e72a6f014d"
  },
  {
    "url": "docs/pandoc-df-thesis-template/preamble/index.html",
    "revision": "2edb7aed8e7301f13077a654ba2d445c"
  },
  {
    "url": "docs/pandoc-df-thesis/index.html",
    "revision": "a6b607a18b94c66cb5d8d496bf1022d2"
  },
  {
    "url": "index.html",
    "revision": "bcbd737edbd57d21baba08cad1190fa9"
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

