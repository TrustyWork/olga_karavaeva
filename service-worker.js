"use strict";var precacheConfig=[["https://trustywork.github.io/olga_karavaeva/index.html","429ab077686fe2e684eec7eebe9c3e97"],["https://trustywork.github.io/olga_karavaeva/static/css/main.b424bfea.css","976f1e468c261003fabf0cc7b3d054bd"],["https://trustywork.github.io/olga_karavaeva/static/js/main.b5426701.js","0806f49f42996973d45891d999ce8ae9"],["https://trustywork.github.io/olga_karavaeva/static/media/1.e408e083.jpg","e408e0831546ad2b00bcefd1c78e3aaa"],["https://trustywork.github.io/olga_karavaeva/static/media/2.0e1bdb66.jpg","0e1bdb6616c10634cb31516408ba7f7d"],["https://trustywork.github.io/olga_karavaeva/static/media/3.758562c8.jpg","758562c8e2335a9bed9e32c06fe4b057"],["https://trustywork.github.io/olga_karavaeva/static/media/before.94dd7df7.jpg","94dd7df712917efc859a6b6d99cdc241"],["https://trustywork.github.io/olga_karavaeva/static/media/bg.1e0cac53.jpg","1e0cac533691a0aaed829886f10c9cfa"],["https://trustywork.github.io/olga_karavaeva/static/media/bg.437e51b1.jpg","437e51b111e8b29bc89941daf756ccc6"],["https://trustywork.github.io/olga_karavaeva/static/media/bg.458837c8.jpg","458837c8d02b10f8fe2b44c87e01f9d4"],["https://trustywork.github.io/olga_karavaeva/static/media/bg.c4d624da.jpg","c4d624daa96696d416c7ca6827ce5b3f"],["https://trustywork.github.io/olga_karavaeva/static/media/bg.cbad9088.jpg","cbad90885d20dee49c2d39402f0f7390"],["https://trustywork.github.io/olga_karavaeva/static/media/logo.38cec19f.png","38cec19fe1e0de3fcbf33869c2bc5b19"],["https://trustywork.github.io/olga_karavaeva/static/media/logo.853c4861.png","853c486146c052745dc603f807e25663"],["https://trustywork.github.io/olga_karavaeva/static/media/photo.5178c64a.jpg","5178c64a6f13b8de3b088ebdd0ea662f"],["https://trustywork.github.io/olga_karavaeva/static/media/test1.076eb929.jpg","076eb92961479ba7c550a1a6e93493fa"],["https://trustywork.github.io/olga_karavaeva/static/media/test2.035e97cb.jpg","035e97cb7400eb5a0cb68cc14c8e68f3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var n="https://trustywork.github.io/olga_karavaeva/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});