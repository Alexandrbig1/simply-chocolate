(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();(()=>{const o={openModalreviewBtn:document.querySelector("[data-modalreview-open]"),closeModalreviewBtn:document.querySelector("[data-modalreview-close]"),modalreview:document.querySelector("[data-modalreview]")};o.openModalreviewBtn.addEventListener("click",e),o.closeModalreviewBtn.addEventListener("click",e);function e(){o.modalreview.classList.toggle("review-modal-is-hidden"),document.body.classList.toggle("no-scroll")}})();$(document).ready(function(){$(".chocolate-is-loved-slider").slick({arrows:!1,dots:!0,slidesToShow:3,slidesToScroll:1,speed:1100,autoplay:!0,autoplaySpeed:1500,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!0,waitForAnimate:!1,variableWidth:!0,responsive:[{breakpoint:320,settings:{slidesToShow:1}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:1200,settings:{slidesToShow:3}}]})});(()=>{const o=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=()=>{const t=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!t),o.classList.toggle("is-open");const n=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};e.addEventListener("click",r),s.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2.6},1200:{slidesPerView:4}},spaceBetween:18,autoplay:!0,autoplaySpeed:1500,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!0,waitForAnimate:!1,variableWidth:!0});(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),openSecModalBtn:document.querySelector("[data-modal-open-sec]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",e),o.openSecModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e);function e(){o.modal.classList.toggle("is-hidden")}})();(()=>{const o={openModalBtn:document.querySelector("[data-subscribe-modal-open]"),closeSubscrModalBtn:document.querySelector("[data-subscribe-modal-close]"),modal:document.querySelector("[data-subscribe-modal]")};o.openModalBtn.addEventListener("click",e),o.closeSubscrModalBtn.addEventListener("click",e);function e(){o.modal.classList.toggle("is-hidden")}})();const d=document.getElementById("year");d.textContent=new Date().getFullYear();const c=document.querySelector(".scrollup__btn"),i=function(){window.scrollY<300?c.classList.add("hidden"):c.classList.remove("hidden")};window.addEventListener("scroll",i);c.addEventListener("click",a);function a(){window.scrollTo({top:0,behavior:"smooth"})}const u=document.querySelector(".hero-section"),p=new IntersectionObserver(function(o){const e=o[0];e.isIntersecting||document.body.classList.add("sticky"),e.isIntersecting&&document.body.classList.remove("sticky")},{root:null,threshold:0,rootMargin:"-80px"});p.observe(u);