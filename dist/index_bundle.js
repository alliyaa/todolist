(()=>{"use strict";var e,n,t,r,a,o,i,d,c,s,l,u,p,m,f={208:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([e.id,'*\n{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n   \n    font-family: Georgia, \'Times New Roman\', Times, serif;\n}\n\n.wrapper{\n    height:100vh;\n    display: grid;\n    grid-template-columns: repeat(1, 1fr) repeat(1,5fr);\n    grid-template-rows: 1fr 5fr min-content;\n    grid-template-areas:  "sidebar header"\n                          "sidebar main";\n   \n}\nmain\n{\n    grid-area: main;\n    background-color:#dad7cd;\n    color: #3a5a40;\n   \n}\n\n\nheader\n{\n    grid-area: header;\n    background-color: #a3b18a;\n    color:#efeee8;\n}\n\nheader > h1\n{\n    text-align: center;\n    margin-top: 1rem;\n}\n\n.sidebar\n{\n        background-color: #3a5a40;\n        color:#dad7cd;\n        grid-area: sidebar;\n}\n\n.addnewButton{\n    display: flex;\n    justify-content: center; \n    align-items: center;\n    text-align: center;\n    margin: 0 auto;\n    margin-top: 10rem;\n}\n\nbutton\n{\n    outline: none;\n    border: none;\n    width: 5rem; \n    height: 5rem;\n    border-radius: 50%;   \n    color:#3a5a40;\n    background-color:#dad7cd; \n    cursor: pointer;\n    font-size: 1.1rem;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);\n}\n\n.saveTask\n{\n    background-color: #a3b18a;\n    color:#efeee8;\n\n}\n.SideBarContent\n{\n    text-align: center;\n    margin-top: 5rem;\n    font-size: 1.1rem;\n\n}\n\n.newProjectDiv\n{\n    border: 2px solid blue;\n}\n\n.newContainer{\n    border: 2px solid pink;\n}',""]);const d=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],d=0;d<e.length;d++){var c=e[d],s=r.base?c[0]+r.base:c[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,r);r.byIndex=d,n.splice(d,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=t(o[i]);n[d].references--}for(var c=r(e,a),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},v={};function h(e){var n=v[e];if(void 0!==n)return n.exports;var t=v[e]={id:e,exports:{}};return f[e](t,t.exports,h),t.exports}h.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return h.d(n,{a:n}),n},h.d=(e,n)=>{for(var t in n)h.o(n,t)&&!h.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},h.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),h.nc=void 0,e=h(72),n=h.n(e),t=h(825),r=h.n(t),a=h(659),o=h.n(a),i=h(56),d=h.n(i),c=h(540),s=h.n(c),l=h(113),u=h.n(l),p=h(208),(m={}).styleTagTransform=u(),m.setAttributes=d(),m.insert=o().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),n()(p.A,m),p.A&&p.A.locals&&p.A.locals,function(){const e=document.createElement("div"),n=document.querySelector(".sidebar");n.appendChild(e),e.appendChild(function(){const e=document.createElement("div"),n=document.createElement("div");n.textContent="Today",e.appendChild(n);const t=document.createElement("div");t.textContent="This week",e.appendChild(t);const r=document.createElement("div");return r.textContent="Projects",e.appendChild(r),n.classList.add("SideBarContent"),t.classList.add("SideBarContent"),r.classList.add("SideBarContent"),e}()),e.appendChild(function(){const e=document.createElement("button");return e.innerHTML+="Project +",e.classList.add("addnewButton"),e.addEventListener("click",(()=>{!function(){const e=document.createElement("div");e.classList.add("newContainer");const n=document.querySelector("main");function t(e){const n=document.createElement("div"),t=document.createElement("span");t.textContent=e+": ",n.appendChild(t);const r=document.createElement("div");return r.contentEditable=!0,n.appendChild(r),{container:n,editable:r}}const r=t("Project Name"),a=t("Priority"),o=t("Date"),i=t("Notes");e.appendChild(r.container),e.appendChild(a.container),e.appendChild(o.container),e.appendChild(i.container);const d=document.createElement("button");d.classList.add("saveTask"),d.innerHTML+="Save",e.appendChild(d),n.appendChild(e),r.editable.addEventListener("input",(()=>{c.textContent=r.editable.textContent})),a.editable.addEventListener("input",(()=>{s.textContent=a.editable.textContent})),o.editable.addEventListener("input",(()=>{l.textContent=o.editable.textContent})),i.editable.addEventListener("input",(()=>{u.textContent=i.editable.textContent}));const c=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div");n.appendChild(c),n.appendChild(s),n.appendChild(l),n.appendChild(u),d.addEventListener("click",(()=>{r.editable.textContent="",a.editable.textContent="",o.editable.textContent="",i.editable.textContent=""}))}()})),e}()),n.appendChild(e)}()})();