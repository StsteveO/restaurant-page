(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(719),t.b),l=i()(r()),u=s()(d);l.push([e.id,"/* @import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap'); */\n/*in code= font-family: \"Aboreto\", sans-serif; */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  margin: 0;\n}\n:root {\n  /* --custom name: value; */\n  /* --light-green-bg: #476529; */\n  /* example, color: var(--navy-clr) */\n  --prim-bg-clr: #22babb;\n  --sec-bg-clr: rgba(0,0,0,.7);\n  --acc-bg-clr: #348888;\n}\n.page-container {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr 3rem;\n}\n/* fonts */\n/* font-family: 'Roboto', sans-serif; */\n\n.bg-img{\n  background: url("+u+");\n  position: fixed;\n  top: -70%;\n  left: -40%;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\n.picture{\nheight: 250px;\nwidth: auto;\nborder-bottom: 2px solid black;\n}\n\n.header,\n.footer{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--sec-bg-clr);\n  color: whitesmoke;\n  /* border: 2px solid black; */\n}\n.header-container{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--sec-bg-clr);\n  color: whitesmoke;\n  padding-bottom: 1rem;\n}\n.header {\n  font-size: 3rem;\n  font-weight: bolder;\n  background-color: rgba(0,0,0,.0);\n  /* overflow: hidden; */\n}\n.nav-container{\n  display: flex;\n  justify-content: space-around;\n}\n.btn-home,\n.btn-menu,\n.btn-contact-us{\n  padding: 1rem;\n  margin: 0.5rem;\n  border-radius: 1rem;\n  transition: .25s;\n}\n.btn-home:hover,\n.btn-menu:hover,\n.btn-contact-us:hover{\n  background-color: rgb(209, 0, 209);\n  cursor: pointer;\n  transform: scale(1.2);\n}\n.main {\n  /* text-align: center; */\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(21rem, 21rem));\n  justify-content: center;\n  background-color: rgba(0,0,0,.4);\n}\n.footer {\n  font-size: 1rem;\n}\n\n.item-container {\n  border: 2px solid black;\n  height: auto;\n  width: auto;\n  border-radius: 1.5rem;\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content:space-between;\n  align-items: center;\n  overflow: hidden;\n  /* display: none; */\n}\n.item-title,\n.item-content {\n  text-align: center;\n  background-color: white;\n}\n.item-title {\n  font-size: x-large;\n  font-weight: bold;\n}\n.item-content {\n  font-size: large;\n  font-weight: 500;\n}\n.hide{\n  \n}\n",""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},719:(e,n,t)=>{e.exports=t.p+"17796095e1c36bb7b612.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=(()=>{const e=document.createElement("div");e.classList.add("bg-img"),document.body.appendChild(e);const n=document.createElement("div");n.classList.add("page-container"),document.body.appendChild(n);const t=document.createElement("div");t.classList.add("header-container"),n.appendChild(t);const o=document.createElement("div");o.classList.add("header"),t.appendChild(o);const r=document.createElement("div");r.classList.add("nav-container"),t.appendChild(r);const a=document.createElement("button");a.classList.add("btn-home"),a.textContent="Home",r.appendChild(a);const i=document.createElement("button");i.classList.add("btn-menu"),i.textContent="Menu",r.appendChild(i);const c=document.createElement("button");c.classList.add("btn-contact-us"),c.textContent="Contact Us",r.appendChild(c);const s=document.createElement("div");s.classList.add("main"),n.appendChild(s);const d=document.createElement("div");return d.classList.add("footer"),n.appendChild(d),{headerContainer:t,header:o,navContainer:r,btnHome:a,btnMenu:i,btnContactUs:c,main:s,footer:d}})(),g=class{constructor(e,n,t){this.pic=e,this.title=n,this.content=t}addToDOM(){const e=document.createElement("div");e.classList.add("item-container"),h.main.appendChild(e),e.appendChild(this.pic),this.pic.classList.add("picture");const n=document.createElement("div");n.classList.add("item-title"),n.innerHTML=`${this.title}`,e.appendChild(n);const t=document.createElement("div");t.classList.add("item-content"),t.innerHTML=`${this.content}`,n.appendChild(t)}},b=t.p+"7336238f43631c2cbb3d.jpg",v=t.p+"854014de909674228f1f.jpg",y=t.p+"4e75e442f9cee47f0f53.jpg",w=t.p+"49771fb86e8fa3292296.jpg",x=t.p+"0605bb13f6ddaf8581ef.jpg",C=t.p+"c7faf8d57f4770998b6f.jpg",T=(h.header.textContent="Odin's Comfort Cafe!",h.footer.textContent="See you soon!",(()=>{const e=new Image;e.src=b;const n=new Image;n.src=v;const t=new Image;t.src=y;const o=new Image;o.src=w;const r=new Image;r.src=x;const a=new Image;return a.src=C,{pizza:e,cheeseBurger:n,hotdog:t,taco:o,burrito:r,fries:a}})()),E={pizza:new g(T.pizza,"Proper Pizza...$12","When you need something greasy and HOT!"),cheeseBurger:new g(T.cheeseBurger,"Cheesy Cheese Burger...$10","The best thing on the menu. Make sure to get the fries."),hotDog:new g(T.hotdog,"'Hott' Hot Dog...$7.99","A quick bite, to cure your hunger. Great for on-the-go!"),tacos:new g(T.taco,"Terrific Taco's...$7.99","When you are starving, and have time to sit down, and don't care about getting messy."),burrito:new g(T.burrito,"Busting Burrito...$12.99","Try not to eat the whole thing at once. If you have time to sit down, this is a must-try!"),fries:new g(T.fries,"Ferocious Fries...$3.99","This food doesnt need an explanation. Pairs well with anything on the menu...even burritos.")};E.pizza.addToDOM(),E.cheeseBurger.addToDOM(),E.hotDog.addToDOM(),E.tacos.addToDOM(),E.burrito.addToDOM(),E.fries.addToDOM(),console.log("hello world")})()})();