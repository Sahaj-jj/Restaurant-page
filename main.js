(()=>{"use strict";const e=(e,n=null,t=null,l=null)=>{const d=document.createElement(e);return n&&n.forEach((e=>d.classList.add(e))),t&&(d.textContent=t),l&&(d.src=l),d},n=()=>{const n=e("div",["home-container"]),t=e("div",["section"]),l=e("h2",["heading","sub"],"Authentic Italian Cuisine"),d=e("h1",["heading","main"],"Bonta'del Forno"),i=e("div",["text"],"Placeholder");return t.appendChild(d),t.appendChild(l),n.appendChild(t),n.appendChild(i),n};(()=>{const t=document.getElementById("content");function l(){switch(t.lastChild.remove(),this.textContent){case"Home":t.appendChild(n());break;case"Menu":t.appendChild(e("div"))}}return{init:()=>{t.appendChild((()=>{const n=document.createElement("ul");["Home","Menu","About"].forEach((t=>{n.appendChild(e("li",null,t))}));const t=document.createElement("header");return t.appendChild(n),window.addEventListener("scroll",(()=>{window.scrollY>100?t.classList.add("scroll"):t.classList.contains("scroll")&&t.classList.remove("scroll")})),t})()),t.appendChild(n()),document.querySelectorAll("header li").forEach((e=>e.addEventListener("click",l)))}}})().init()})();