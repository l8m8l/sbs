if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return r[s]||(e=new Promise((async e=>{if("document"in self){const r=document.createElement("script");r.src=s,document.head.appendChild(r),r.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!r[s])throw new Error(`Module ${s} didn’t register its module`);return r[s]}))},e=(e,r)=>{Promise.all(e.map(s)).then((s=>r(1===s.length?s[0]:s)))},r={require:Promise.resolve(e)};self.define=(e,i,n)=>{r[e]||(r[e]=Promise.resolve().then((()=>{let r={};const t={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return r;case"module":return t;default:return s(e)}}))).then((s=>{const e=n(...s);return r.default||(r.default=e),r}))})))}}define("./sw.js",["./workbox-061fb29d"],(function(s){"use strict";s.setCacheNameDetails({prefix:"sbs"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/sbs/.gitkeep",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/sbs/assets/css/302.b4fe96834ade5b1dbcdf.css",revision:null},{url:"/sbs/assets/js/302.19ad76cc62219ccb619c.js",revision:null},{url:"/sbs/assets/js/697.acf6358951dd4009371e.js",revision:null},{url:"/sbs/assets/js/697.acf6358951dd4009371e.js.LICENSE.txt",revision:"ac1d32e2116a66660d06e2f6a5ba9780"},{url:"/sbs/assets/js/index.2a7564f7e7815c965d8b.js",revision:null},{url:"/sbs/assets/js/runtime~index.d40446ff991307836f12.js",revision:null},{url:"/sbs/index.html",revision:"d43ac58d45e13a84e806827b8c018617"}],{}),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html"),{denylist:[/^\/api/,/\/[^/]+\.[^/]+$/]}))}));
//# sourceMappingURL=sw.js.map
