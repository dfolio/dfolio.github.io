---
permalink: sw.js
---
var CACHE_NAME="dfolio-cache-v1",urlsToCache=["/","/assets/css/main.css"];console.log("loading sw"),self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(e){return console.log("Opened cache"),e.addAll(urlsToCache)}))}),self.addEventListener("fetch",function(s){s.respondWith(caches.match(s.request).then(function(e){return e||fetch(s.request)}))});