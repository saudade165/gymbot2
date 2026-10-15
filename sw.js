const CACHE="fitplan-user-media-v1";
const CORE=["./","./index.html","./css/style.css","./js/app.js","./manifest.json","./assets/icon.svg",
"./assets/user-media/0a0db60c5bdaba24ac53aab01caebbb5.gif",
"./assets/user-media/b86e2baf2e17170f940b598d0386c475.gif",
"./assets/user-media/f837b5d4ef387c529f2ca61a97fbabdd.gif",
"./assets/user-media/d6ffd5473adaa48ef40e349b7728583c.gif",
"./assets/user-media/0779027b1e9e996e03ed5b728e329adc.gif",
"./assets/user-media/d412ad6c86fa142e02666c20b77a58d0.gif",
"./assets/user-media/db7e831bbba1923e2b41299ecb59d960.gif",
"./assets/user-media/d00d9daa3b7c9d219a69ea779a373b6e.gif",
"./assets/user-media/0bcbfcfb99c70ae8ec9c7223b965d5ff.gif",
"./assets/user-media/b3ab7d6a96a9dc1dee987074428b378f.gif",
"./assets/user-media/59e0f783593222d74640be021e2ab7d4.gif",
"./assets/user-media/ba75f01e8585f284738ce693ebe1db69.gif",
"./assets/user-media/532c235d8c090ff187d9069b8a4596bf.png",
"./assets/user-media/7f442e5d24c5365a92ee22c3c3073d0a.jpg"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",event=>{if(event.request.method!=="GET"||new URL(event.request.url).origin!==location.origin)return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{if(response.ok)caches.open(CACHE).then(cache=>cache.put(event.request,response.clone()));return response}).catch(()=>caches.match("./index.html"))))});
