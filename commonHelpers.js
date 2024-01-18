import{S as m,i as l}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="41779008-0ca907175e945c15bd83f3619",h="https://pixabay.com/api/";function y(i){const t=new URLSearchParams({key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}),o=`${h}?${t}`;return fetch(o).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()})}const s={searchForm:document.querySelector(".search-form"),galleryList:document.querySelector(".gallery-list"),loader:document.querySelector(".loader")};function p(i){const t=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:a,comments:u,downloads:f})=>`<li class="gallery-list-item">
      <a href="${n}">
        <img src="${o}" alt="${e}">
        <div class="gallery-info">
          <p>Likes: ${r}</p>
          <p>Views: ${a}</p>
          <p>Comments: ${u}</p>
          <p>Downloads: ${f}</p>
        </div>
      </a>
    </li>`).join("");s.galleryList.insertAdjacentHTML("beforeend",t)}function g(){s.galleryList.innerHTML=""}const L=new m(".gallery-list a",{captionsData:"alt",captionDelay:250});function c(){s.loader.classList.add("hide")}function S(){s.loader.classList.remove("hide")}function b(i){i.preventDefault(),g(),S();const t=s.searchForm.elements.searchQuery.value.trim();if(!t){l.info({title:"Info",message:"empty input"}),c();return}y(t).then(({hits:o})=>{if(o.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(o),L.refresh()}).catch(o=>{console.log(o),l.error({title:"Error",message:"something went wrong, try again"})}).finally(()=>{c()})}s.searchForm.addEventListener("submit",b);
//# sourceMappingURL=commonHelpers.js.map
