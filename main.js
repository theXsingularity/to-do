(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>d});var a=t(81),r=t.n(a),i=t(645),o=t.n(i)()(r());o.push([n.id,"* { padding: 0; margin: 0; }\n\nhtml, body {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  \n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    background: hotpink;\n    height: 100%;\n}\n\n\n/* header */\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px;\n    background-color: indianred;\n    font-size: 30px;\n    \n}\n\n.searchContainer{\n    display: flex;\n    \n}\n\n.searchLabel {\n    font-size: 15px;\n}\n.search {\n    \n}\n\n.title {\n    \n}\n\n.addTask {\n    min-width: 25px;\n    min-height: 25px;\n    \n}\n\n/* ----- main content ----- */\n.contentContainer {\n    display: flex;\n    width: auto;\n    height: 100%; \n}\n/* sidebar */\n\n.sidebar{\n    display:flex;\n    flex-direction: column;\n    text-align: center;\n    max-width:  100px;\n    min-width:  100px;\n    padding-top: 20px;\n    background-color: tan;\n    \n}\n\n\n.menuItem{\n    margin-bottom: 10px;\n    background: none;\n    border: none;\n    font-size: 15px;\n}\n\n/* task display */\n\n\n.taskDisplay {\n    display:flex;\n    width: 100%;\n\n    justify-content: center;\n    align-content: flex-start;\n    flex-wrap: wrap; \n    background: lightskyblue;\n    \n}\n\n.taskDiv {\n    flex-grow: auto 1;\n    border: 10px solid black;\n    width: 200px;\n    margin: 20px;\n    background-color: lightsteelblue;\n    padding: 15px;\n}",""]);const d=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(a)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(o[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);a&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},o=[],d=0;d<n.length;d++){var s=n[d],c=a.base?s[0]+a.base:s[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=r(m,a);a.byIndex=d,e.splice(d,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=a(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var d=t(i[o]);e[d].references--}for(var s=a(n,r),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var a={};(()=>{t.d(a,{X:()=>I}),console.log("reading display library");let n=[];class e{constructor(n,e,t,a){this.title=n,this.description=e,this.dueDate=t,this.priority=a}}const r=new e("Laundry","small load - but need underwear","tomorrow","high"),i=new e("write letter","its almost a month past her birthday","tomorrow","high"),o=new e("take out trash","so quick!","tomorrow","high"),d=new e("finish coding","you can do it","tomorrow","medium");n.push(r),n.push(i),n.push(o),n.push(d);let s=document.createElement("div");s.classList.add("taskDiv");let c=document.createElement("div"),l=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div");s.appendChild(c),s.appendChild(l),s.appendChild(p),s.appendChild(u);var m=t(379),h=t.n(m),f=t(795),v=t.n(f),g=t(569),y=t.n(g),x=t(565),b=t.n(x),C=t(216),L=t.n(C),w=t(589),E=t.n(w),T=t(426),k={};k.styleTagTransform=E(),k.setAttributes=b(),k.insert=y().bind(null,"head"),k.domAPI=v(),k.insertStyleElement=L(),h()(T.Z,k),T.Z&&T.Z.locals&&T.Z.locals;const M=document.createElement("div");M.classList.add("contentContainer");const I=document.createElement("div");I.classList.add("taskDisplay"),M.appendChild(function(){const n=document.createElement("div");n.classList.add("sidebar");const e=document.createElement("button");e.classList.add("inbox"),e.classList.add("menuItem"),e.innerHTML="INBOX";const t=document.createElement("button");t.classList.add("today"),t.classList.add("menuItem"),t.innerHTML="TODAY";const a=document.createElement("button");a.classList.add("upcoming"),a.classList.add("menuItem"),a.innerHTML="UPCOMING";const r=document.createElement("button");return r.classList.add("projects"),r.classList.add("menuItem"),r.innerHTML="PROJECTS",n.appendChild(e),n.appendChild(t),n.appendChild(a),n.appendChild(r),n}()),M.appendChild(I),content.appendChild(function(){const n=document.createElement("div");n.classList.add("header");const e=document.createElement("div");e.classList.add("searchContainer");const t=document.createElement("div");t.classList.add("searchLabel"),t.innerHTML="SEARCH";const a=document.createElement("input");a.classList.add("search");const r=document.createElement("div");r.classList.add("title"),r.innerHTML="TO-DO";const i=document.createElement("button");return i.classList.add("addTask"),i.innerHTML="+",n.appendChild(e),e.appendChild(t),e.appendChild(a),n.appendChild(r),n.appendChild(i),n}()),content.appendChild(M),function(){for(let e=0;e<n.length;e++)c.innerText=`Title: ${n[e].title}`,l.innerText=`Description: ${n[e].descriptionOutput}`,p.innerText=`Due Date: ${n[e].dueDate} pages`,u.innerText=`Priority: ${n[e].priority} pages`,I.appendChild(s.cloneNode(!0)),s.appendChild(c),s.appendChild(l),s.appendChild(p),s.appendChild(u)}()})()})();