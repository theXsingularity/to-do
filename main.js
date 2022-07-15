(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>d});var i=t(81),o=t.n(i),a=t(645),r=t.n(a)()(o());r.push([e.id,"* { padding: 0; margin: 0; }\n\nhtml, body {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  \n}\n\n\n#content {\n    height: 100%;\n}\n\n/* header */\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px;\n    background-color: #db4c3f;\n    height: 30px;\n}\n\n.searchContainer{\n    display: flex;\n    padding-left: 40px;\n}\n.search {\n    width: 200px;\n}\n\n.addTask {\n    min-width: 25px;\n    min-height: 25px;\n    margin-right: 25px;\n    padding-left: 8px;\n    padding-right: 8px;\n    color:white;\n    font-size: 25px;\n}\n\n/* ----- main content ----- */\n.contentContainer {\n    display: flex;\n    width: auto;\n    height: 100%; \n    background-color: white;\n}\n\n/* sidebar */\n.sidebar{\n    display:flex;\n    flex-direction: column;\n    \n    max-width:  300px;\n    min-width:  300px;\n    padding-top: 20px;\n    background-color: #fafafa;\n}\n\n.menuItem{\n    text-align: left;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n    margin-left: 40px;\n    margin-right: 10px;\n    border: none;\n    border-radius: 5px;\n    font-size: 15px;\n}\n\n.inbox {\n    background-color: #eeeeee;\n}\n\n.projects {\n    font-weight: bold;\n}\n\n.addProjectBtn {\n    background:none;\n    border: none;\n    font-size: 20px;;\n}\n.projectsListItem {\n    display: flex;\n    justify-content: space-between;\n}\n\n#listOfProjects {\n    display:grid;\n    width: 99%;\n    \n   \n}\n\n.projectItemContainer {\n    display:flex;\n    justify-content: space-between;\n}\n\n.projectRmvBtn {\n    background:none;\n    border: none;\n    font-size: 20px;;\n}\n\n.projectItem {\n    padding: 5px;\n    text-align: left;\n    background:none;\n    border: none;\n}\n\n\n/* task display */\n#taskDisplay {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    align-content: flex-start;\n    flex-wrap: wrap;\n    background-color: white;\n}\n\n.taskDiv {\n    flex-grow: auto 1;\n    border: 5px solid black;\n    width: 200px;\n    margin: 20px;\n    background-color: white;\n    padding: 15px;\n}\n\n\n/* overlay */\n#formOverlay {\n    position: fixed;\n    display: none;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left:0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5);\n    z-index: 2;\n    cursor: pointer;\n  }\n\n.displayContainer{\n    display: flex;\n    justify-content: center;\n    padding-top: 70px;\n}\n\n.taskForm {\n    width: 300px;\n    height: 500px;\n    border: 10px solid black;\n    background-color: white;\n}\n\n.formHeader{\n    display: flex;\n    justify-content: space-between;\n    margin-left: 5px;\n    margin-right: 5px;\n    padding-top: 25px;\n    \n}\n\n.formContainer {\n    display: flex;\n    justify-content: space-between;\n}\n\nlabel {\n    font-size: 1em;;\n    margin-left: 15px;\n    margin-bottom: 25px;\n    \n}\n\n.formItem {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    padding: 25px;\n    height: 1em;\n}\n\ninput{\n    margin-right: 15px;\n    width: 75px;\n    height: 2em;\n\n}\n\n.addTaskBtn {\n    margin-top: 25px;\n    height: 200%;\n    width: 100%;\n}\n\n\n\n",""]);const d=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(r[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);i&&r[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var a={},r=[],d=0;d<e.length;d++){var s=e[d],c=i.base?s[0]+i.base:s[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=o(m,i);i.byIndex=d,n.splice(d,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=i(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var d=t(a[r]);n[d].references--}for(var s=i(e,o),c=0;c<a.length;c++){var l=t(a[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={id:i,exports:{}};return e[i](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e={createForm(){const n=document.createElement("div");n.setAttribute("id","formOverlay"),n.classList.add("formOverlay");const t=document.createElement("div");t.classList.add("displayContainer");const i=document.createElement("div");i.classList.add("taskForm");const o=document.createElement("div");o.classList.add("formHeader");const a=document.createElement("button");a.classList.add("exitButton"),a.innerHTML="X",a.addEventListener("click",e.off);const r=document.createElement("p");r.classList.add("formTitle"),r.innerHTML="Input Task Below";const d=document.createElement("div");d.classList.add("formConatiner");const s=document.createElement("div");s.classList.add("taskTitleContainer","formItem");const c=document.createElement("label");c.classList.add("taskTitleLabel"),c.setAttribute("for","taskTitleInput"),c.innerHTML="Task:";const l=document.createElement("input");l.setAttribute("id","taskTitleInput"),l.setAttribute("type","text");const p=document.createElement("div");p.classList.add("descriptionContainer","formItem");const u=document.createElement("label");u.classList.add("descriptionLabel"),u.setAttribute("for","descriptionInput"),u.innerHTML="Description:";const m=document.createElement("input");m.setAttribute("id","descriptionInput"),m.setAttribute("type","text");const f=document.createElement("div");f.classList.add("dueContainer","formItem");const v=document.createElement("label");v.classList.add("dueLabel"),v.setAttribute("for","dueInput"),v.innerHTML="Due:";const y=document.createElement("input");y.setAttribute("id","dueInput"),y.setAttribute("type","text");const g=document.createElement("div");g.classList.add("priorityContainer","formItem");const b=document.createElement("label");b.classList.add("priorityLabel"),b.setAttribute("for","priorityInput"),b.innerHTML="Priority:";const x=document.createElement("input");x.setAttribute("id","priorityInput"),x.setAttribute("type","text");const C=document.createElement("div");C.classList.add("addTaskBtnContainer","formItem");const L=document.createElement("button");return L.classList.add("addTaskBtn"),L.innerHTML="ADD",L.addEventListener("click",h),n.appendChild(t),t.appendChild(i),i.appendChild(o),o.appendChild(r),o.appendChild(a),i.appendChild(d),d.appendChild(s),s.appendChild(c),s.appendChild(l),d.appendChild(p),p.appendChild(u),p.appendChild(m),d.appendChild(f),f.appendChild(v),f.appendChild(y),d.appendChild(g),g.appendChild(b),g.appendChild(x),d.appendChild(C),C.appendChild(L),n},on(){formOverlay.style.display="block"},off(){document.getElementById("formOverlay").style.display="none"}},n=[];class i{constructor(e,n,t,i){this.title=e,this.description=n,this.dueDate=t,this.priority=i,this.displayed=!1,this.rmvBtnTog=!1}}const o=new i("Laundry","small load - but need underwear","tomorrow","high"),a=new i("write letter","its almost a month past her birthday","tomorrow","high"),r=new i("take out trash","so quick!","tomorrow","high"),d=new i("finish coding","you can do it","tomorrow","medium");n.push(o),n.push(a),n.push(r),n.push(d);let s=document.createElement("div");s.classList.add("taskDiv");let c=document.createElement("div"),l=document.createElement("div"),p=document.createElement("div"),u=document.createElement("div");function m(){for(let e=0;e<n.length;e++)!1===n[e].displayed&&(c.innerText=`Title: ${n[e].title}`,l.innerText=`Description: ${n[e].description}`,p.innerText=`Due Date: ${n[e].dueDate}`,u.innerText=`Priority: ${n[e].priority}`,taskDisplay.appendChild(s.cloneNode(!0)),s.appendChild(c),s.appendChild(l),s.appendChild(p),s.appendChild(u),n[e].displayed=!0,n[e].rmvBtnTog=!1)}function h(){let t=new i(taskTitleInput.value,descriptionInput.value,dueInput.value,priorityInput.value);n.push(t),taskTitleInput.value="",descriptionInput.value="",dueInput.value="",priorityInput.value="",m(),e.off(),console.log(n)}s.appendChild(c),s.appendChild(l),s.appendChild(p),s.appendChild(u);const f={myProjects:[],currentProject:n,addNewProject:function(){let e=prompt("whats your project?"),n={projectName:e,displayed:!1,rmvBtnTog:!1};n["data-attribute"]=f.myProjects.length+1,f.myProjects.push(n);let t=document.createElement("div");t.classList.add("projectItemContainer");let i=document.createElement("button");i.classList.add("projectItem");let o=document.createElement("button");o.innerHTML="-",o.classList.add("projectRmvBtn"),i.innerHTML=e,listOfProjects.appendChild(t),t.appendChild(i),t.appendChild(o),console.log(),f.linkProjects(),f.removeProject()},linkProjects:function(){const e=document.getElementsByClassName("projectItem");for(let n=0;n<e.length;n++)!1===f.myProjects[n].displayed&&(f.myProjects[n].displayed=!0,e[n].addEventListener("click",(function(){f.currentProject=f.myProjects[n],console.log(`clicked on ... ${f.myProjects[n].projectName}`),console.log("Current Project "),console.log(f.currentProject),console.log(f.myProjects[n]["data-attribute"])})))},removeProject:function(){const e=document.getElementsByClassName("projectRmvBtn");for(let n=0;n<e.length;n++)!1===f.myProjects[n].rmvBtnTog&&(f.myProjects[n].rmvBtnTog=!0,e[n].addEventListener("click",(function(){f.myProjects.splice(n,1),listOfProjects.removeChild(listOfProjects.children[n]),console.log(f.myProjects)})))}};var v=t(379),y=t.n(v),g=t(795),b=t.n(g),x=t(569),C=t.n(x),L=t(565),E=t.n(L),j=t(216),T=t.n(j),w=t(589),k=t.n(w),I=t(426),P={};P.styleTagTransform=k(),P.setAttributes=E(),P.insert=C().bind(null,"head"),P.domAPI=b(),P.insertStyleElement=T(),y()(I.Z,P),I.Z&&I.Z.locals&&I.Z.locals,content.appendChild(function(){const n=document.createElement("div");n.classList.add("header");const t=document.createElement("div");t.classList.add("searchContainer");const i=document.createElement("div");i.classList.add("searchLabel"),i.innerHTML="";const o=document.createElement("input");o.classList.add("search"),o.setAttribute("id","search"),o.placeholder="Search To-Do's!";const a=document.createElement("div");a.classList.add("title"),a.innerHTML="";const r=document.createElement("button");return r.classList.add("addTask"),r.innerHTML="+",r.addEventListener("click",e.on),n.appendChild(t),t.appendChild(i),t.appendChild(o),n.appendChild(a),n.appendChild(r),n}()),content.appendChild(function(){const e=document.createElement("div");return e.classList.add("contentContainer"),e.appendChild(function(){const e=document.createElement("div");e.classList.add("sidebar");const n=document.createElement("div");n.classList.add("inbox"),n.classList.add("menuItem"),n.innerHTML="Inbox";const t=document.createElement("div");t.classList.add("today"),t.classList.add("menuItem"),t.innerHTML="Today";const i=document.createElement("div");i.classList.add("upcoming"),i.classList.add("menuItem"),i.innerHTML="Upcoming";const o=document.createElement("div");o.classList.add("projectsContainer"),o.classList.add("menuItem");const a=document.createElement("div");a.classList.add("projectsListItem");const r=document.createElement("div");r.classList.add("projects"),r.innerHTML="Projects";const d=document.createElement("button");d.classList.add("addProjectBtn"),d.innerHTML="+",d.addEventListener("click",f.addNewProject);const s=document.createElement("div");return s.setAttribute("id","listOfProjects"),e.appendChild(n),e.appendChild(t),e.appendChild(i),e.appendChild(o),o.appendChild(a),a.appendChild(r),a.appendChild(d),o.appendChild(s),e}()),e.appendChild(function(){const e=document.createElement("div");return e.setAttribute("id","taskDisplay"),e}()),e}()),content.appendChild(e.createForm()),m()})()})();