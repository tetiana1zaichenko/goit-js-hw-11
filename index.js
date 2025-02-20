import{a as m,i as n,S as d}from"./assets/vendor-D0cagnvz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const g=document.querySelector(".gallery");function f(o){const t="https://pixabay.com",a="/api/",s=new URLSearchParams({key:"48801957-4c351c0f3a606f3cba9240365",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${a}?${s}`;return m.get(e).then(r=>r.data.hits.length!==0?r.data.hits:(g.innerHTML="",n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),Promise.reject("No images found"))).catch(r=>{throw console.error("Fetch error:",r),n.error({title:"Error",message:"Something went wrong. Please try again later."}),r})}const p=document.querySelector(".gallery"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const{webformatURL:t,largeImageURL:a,tags:s,likes:e,views:r,comments:i,downloads:u}=o;return`
    <div class="image-card">
    <a href="${a}" class="gallery-link">
  <div class="image-container">
    <img
      src="${t}"
      alt="${s}"
    />
  </div>
  </a>
<div class="image-body">
  <div class="image-column">
    <p class="image-info">Likes</p>
    <p class="image-value">${e}</p>
  </div>
  <div class="image-column">
    <p class="image-info">Views</p>
    <p class="image-value">${r}</p>
  </div>
  <div class="image-column">
    <p class="image-info">Comments</p>
    <p class="image-value">${i}</p>
  </div>
  <div class="image-column">
    <p class="image-info">Downloads</p>
    <p class="image-value">${u}</p>
  </div>
</div>
</div>`}function v(o){console.log(o);const t=o.map(a=>h(a)).join("");p.innerHTML=t,y.refresh()}const L=document.querySelector(".formImage");document.querySelector(".btn_search");const S=document.querySelector(".inputImage"),b=document.querySelector(".gallery"),l=document.querySelector(".loader");function w(){l.style.display="block"}function c(){l.style.display="none"}c();L.addEventListener("submit",o=>{o.preventDefault();const t=S.value.trim();if(console.log(t),t===""){b.innerHTML="",n.error({title:"Error",message:"Please, full the field!"});return}else console.log("make HTTP request"),w(),f(t).then(v).catch(a=>console.log(a)).finally(()=>c());o.target.reset()});
//# sourceMappingURL=index.js.map
