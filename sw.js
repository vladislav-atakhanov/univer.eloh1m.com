if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const o=e=>s(e,r),l={module:{uri:r},exports:a,require:o};i[r]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(c(...e),a)))}}define(["./workbox-cd63daf5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"c85f5e270c7f138cc57c58ba507c3065"},{url:"assets/index-101f381d.css",revision:null},{url:"assets/index-c6ad0ca9.js",revision:null},{url:"index.html",revision:"ec8d0ca555c6a53e2f82db0bb3c53c3c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icons.svg",revision:"3131b27a30d41e7186a0b84da4810533"},{url:"images/icons/64.png",revision:"cb8d1361177d21e51e37910b1ca66c79"},{url:"images/icons/128.png",revision:"6f918d741a114b0c6ebc6a3f5ffd1e85"},{url:"images/icons/192.png",revision:"635220221a11cfbbae50c7e98da8bd04"},{url:"images/icons/512.png",revision:"1165e584375423a79b46eb68aabcce16"},{url:"images/icons/maskable.png",revision:"583a4ea093acc4bfa5c55b53305ebf32"},{url:"manifest.webmanifest",revision:"59832e723aa1803387c1f54a7d33a3a5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
