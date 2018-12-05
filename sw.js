---
permalink: sw.js
---
var CACHE_NAME="dfolio-cache-v1",urlsToCache=[
{%- for page in site.html_pages -%}'{{ page.url }}',{%- endfor -%}
{%- for col in site.collections -%}
{%- for cp in col.docs -%}'{{ cp.url }}',{%- endfor -%}
{%- endfor -%}
"/assets/css/main.css", "/index.html"];console.log("loading sw"),self.addEventListener("install",function(e){self.skipWaiting();e.waitUntil(caches.open(CACHE_NAME).then(function(e){return console.log("Opened cache"),e.addAll(urlsToCache)}))}),self.addEventListener("fetch",function(s){s.respondWith(caches.match(s.request).then(function(e){return e||fetch(s.request)}))});


