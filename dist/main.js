(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(81),o=t.n(a),r=t(645),i=t.n(r),s=t(667),c=t.n(s),d=new URL(t(719),t.b),l=i()(o()),u=c()(d);l.push([e.id,"/* @import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap'); */\n/*in code= font-family: \"Aboreto\", sans-serif; */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n}\n:root {\n  /* --custom name: value; */\n  /* --light-green-bg: #476529; */\n  /* example, color: var(--navy-clr) */\n  --prim-bg-clr: #22babb;\n  --sec-bg-clr: rgba(0,0,0,.7);\n  --acc-bg-clr: #348888;\n}\n.page-container {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr 3rem;\n}\n/* fonts */\n/* font-family: 'Roboto', sans-serif; */\n\n.bg-img{\n  background: url("+u+");\n  position: fixed;\n  top: -70%;\n  left: -40%;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\n.picture{\nheight: 250px;\nwidth: auto;\nborder-bottom: 2px solid black;\n}\n.main-page-picture{\n  height: 20rem;\n  width:auto;\n}\n\n.header,\n.footer{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--sec-bg-clr);\n  color: whitesmoke;\n  /* border: 2px solid black; */\n}\n.header-container{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--sec-bg-clr);\n  color: whitesmoke;\n  padding-bottom: 1rem;\n}\n.header {\n  font-size: 3rem;\n  font-weight: bolder;\n  background-color: rgba(0,0,0,.0);\n  /* overflow: hidden; */\n}\n.nav-container{\n  display: flex;\n  justify-content: space-around;\n}\n.btn-home,\n.btn-menu,\n.btn-contact-us{\n  padding: 1rem;\n  margin: 0.5rem;\n  border-radius: 1rem;\n  transition: .25s;\n}\n.btn-home:hover,\n.btn-menu:hover,\n.btn-contact-us:hover{\n  background-color: rgb(209, 0, 209);\n  cursor: pointer;\n  transform: scale(1.2);\n}\n.updated-btn{\n  background-color: rgb(209, 0, 209);\n  cursor: pointer;\n  transform: scale(1.2);\n}\n.main {\n  /* text-align: center; */\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(21rem, 21rem));\n  justify-content: center;\n  background-color: rgba(0,0,0,.4);\n}\n.updated-display{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.footer {\n  font-size: 1rem;\n}\n\n.item-container {\n  border: 2px solid black;\n  height: auto;\n  width: auto;\n  border-radius: 1.5rem;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content:space-between;\n  align-items: center;\n  overflow: hidden;\n  /* display: none; */\n  transition: 2s;\n}\n.updated-container{\n  height: 25rem;\n  width: 29rem;\n  background-color: white;\n}\n.item-title,\n.item-content {\n  text-align: center;\n  background-color: white;\n}\n.item-title {\n  font-size: x-large;\n  font-weight: bold;\n}\n.item-content {\n  font-size: large;\n  font-weight: 500;\n}\n.hide{\n  display: none;\n}\n",""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},i=[],s=0;s<e.length;s++){var c=e[s],d=a.base?c[0]+a.base:c[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,a);a.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var s=t(r[i]);n[s].references--}for(var c=a(e,o),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},719:(e,n,t)=>{e.exports=t.p+"17796095e1c36bb7b612.jpg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),r=t(569),i=t.n(r),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=(()=>{const e=document.createElement("div");e.classList.add("bg-img"),document.body.appendChild(e);const n=document.createElement("div");n.classList.add("page-container"),document.body.appendChild(n);const t=document.createElement("div");t.classList.add("header-container"),n.appendChild(t);const a=document.createElement("div");a.classList.add("header"),t.appendChild(a);const o=document.createElement("div");o.classList.add("nav-container"),t.appendChild(o);const r=document.createElement("button");r.classList.add("btn-home"),r.textContent="Home",o.appendChild(r);const i=document.createElement("button");i.classList.add("btn-menu"),i.classList.add("updated-btn"),i.textContent="Menu",o.appendChild(i);const s=document.createElement("button");s.classList.add("btn-contact-us"),s.textContent="Contact Us",o.appendChild(s);const c=document.createElement("div");c.classList.add("main"),n.appendChild(c);const d=document.createElement("div");return d.classList.add("footer"),n.appendChild(d),{headerContainer:t,header:a,navContainer:o,btnHome:r,btnMenu:i,btnContactUs:s,main:c,footer:d}})(),g=class{constructor(e,n,t){this.pic=e,this.title=n,this.content=t}addToDOM(){const e=document.createElement("div");e.classList.add("item-container"),f.main.appendChild(e),e.appendChild(this.pic),this.pic.classList.add("picture");const n=document.createElement("div");n.classList.add("item-title"),n.innerHTML=`${this.title}`,e.appendChild(n);const t=document.createElement("div");t.classList.add("item-content"),t.innerHTML=`${this.content}`,n.appendChild(t)}},b=t.p+"22071c949f199d08639c.jpg",v=(()=>{const e=new Image;return e.src=b,{mainPg:e}})(),y=(()=>{const e=document.createElement("div");e.classList.add("hide"),e.classList.add("item-container"),e.classList.add("updated-container"),f.main.appendChild(e),v.mainPg.classList.add("main-page-picture"),e.appendChild(v.mainPg);const n=document.createElement("div");n.classList.add("item-title"),n.innerHTML="Welcome to Odin Cafe!",e.appendChild(n);const t=document.createElement("div");return t.classList.add("item-content"),t.innerHTML="Your Next Best Meal is Right around the Corner!",n.appendChild(t),{container:e}})(),L=t.p+"7935d20aed203aff11c4.jpg",w=(()=>{const e=new Image;return e.src=L,{contactUsPg:e}})(),C=(()=>{const e=document.createElement("div");e.classList.add("hide"),f.main.appendChild(e),e.classList.add("item-container"),e.classList.add("updated-container"),f.main.appendChild(e),w.contactUsPg.classList.add("main-page-picture"),e.appendChild(w.contactUsPg);const n=document.createElement("div");n.classList.add("item-title"),n.innerHTML="Contact Us Anytime.",e.appendChild(n);const t=document.createElement("div");return t.classList.add("item-content"),t.innerHTML="We will be waiting for your call.",n.appendChild(t),{container:e}})(),x=t.p+"7336238f43631c2cbb3d.jpg",E=t.p+"854014de909674228f1f.jpg",T=t.p+"4e75e442f9cee47f0f53.jpg",M=t.p+"49771fb86e8fa3292296.jpg",j=t.p+"0605bb13f6ddaf8581ef.jpg",k=t.p+"c7faf8d57f4770998b6f.jpg",H=(f.header.textContent="Odin's Comfort Cafe!",f.footer.textContent="See you soon!",(()=>{const e=new Image;e.src=x;const n=new Image;n.src=E;const t=new Image;t.src=T;const a=new Image;a.src=M;const o=new Image;o.src=j;const r=new Image;return r.src=k,{pizza:e,cheeseBurger:n,hotdog:t,taco:a,burrito:o,fries:r}})()),z={pizza:new g(H.pizza,"Proper Pizza...$12","When you need something greasy and HOT!"),cheeseBurger:new g(H.cheeseBurger,"Cheesy Cheese Burger...$10","The best thing on the menu. Make sure to get the fries."),hotDog:new g(H.hotdog,"'Hott' Hot Dog...$7.99","A quick bite, to cure your hunger. Great for on-the-go!"),tacos:new g(H.taco,"Terrific Taco's...$7.99","When you are starving, and have time to sit down, and don't care about getting messy."),burrito:new g(H.burrito,"Busting Burrito...$12.99","Try not to eat the whole thing at once. If you have time to sit down, this is a must-try!"),fries:new g(H.fries,"Ferocious Fries...$3.99","This food doesnt need an explanation. Pairs well with anything on the menu...even burritos.")};z.pizza.addToDOM(),z.cheeseBurger.addToDOM(),z.hotDog.addToDOM(),z.tacos.addToDOM(),z.burrito.addToDOM(),z.fries.addToDOM(),f.btnHome.addEventListener("click",(()=>{document.querySelectorAll(".item-container").forEach((e=>e.classList.add("hide"))),y.container.classList.remove("hide"),C.container.classList.add("hide"),f.main.classList.add("updated-display"),f.btnHome.classList.add("updated-btn"),f.btnMenu.classList.remove("updated-btn"),f.btnContactUs.classList.remove("updated-btn")})),f.btnMenu.addEventListener("click",(()=>{document.querySelectorAll(".item-container").forEach((e=>e.classList.remove("hide"))),y.container.classList.add("hide"),C.container.classList.add("hide"),f.main.classList.remove("updated-display"),f.btnHome.classList.remove("updated-btn"),f.btnMenu.classList.add("updated-btn"),f.btnContactUs.classList.remove("updated-btn")})),f.btnContactUs.addEventListener("click",(()=>{document.querySelectorAll(".item-container").forEach((e=>e.classList.add("hide"))),C.container.classList.remove("hide"),y.container.classList.add("hide"),f.main.classList.add("updated-display"),f.btnHome.classList.remove("updated-btn"),f.btnMenu.classList.remove("updated-btn"),f.btnContactUs.classList.add("updated-btn")})),console.log("hello world")})()})();