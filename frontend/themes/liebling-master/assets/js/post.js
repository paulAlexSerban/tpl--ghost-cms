"use strict";(self.webpackChunkliebling=self.webpackChunkliebling||[]).push([[571],{769:(e,t,n)=>{n.d(t,{dZ:()=>a,e:()=>s,eS:()=>r,ej:()=>l,p6:()=>i,tq:()=>o});var a=function(){var e=document.querySelector("html");return["ar","he","fa"].includes(e.getAttribute("lang"))},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(e,")")).matches},i=function(e){return e?new Date(e).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},s=function(){for(var e=document.querySelectorAll(".kg-gallery-image img"),t=0,n=e.length;t<n;t++){var a=e[t].closest(".kg-gallery-image"),o=e[t].attributes.width.value/e[t].attributes.height.value;a.style.flex="".concat(o," 1 0%")}},r=function(e){e(".js-post-content").find("img").each((function(){e(this).closest("figure").hasClass("kg-bookmark-card")||e(this).closest("figure").hasClass("kg-nft-card")||e(this).parent().is("a")||e(this).hasClass("kg-product-card-image")||e(this).hasClass("kg-audio-thumbnail")||e(this).addClass("js-zoomable")}))},l=function(e,t){t(".js-zoomable").on("opened",(function(){setTimeout((function(){var t=e(".medium-zoom-image--opened");t.length>1&&t.last().hide()}),10)}))}},717:(e,t,n)=>{var a=n(755),o=n.n(a),i=n(557),s=n(729),r=n.n(s),l=n(433),c=n(911),u=(n(350),n(769)),d=null,m=null,h=window.pageYOffset,f=0,g=0,p=0,w=!1,v=function(){h=window.pageYOffset,b()},y=function(e){(0,u.tq)("1023px")?(o()("body").addClass("share-menu-displayed"),setTimeout((function(){d.removeAttr("data-animate")}),e)):o()("body").removeClass("share-menu-displayed")},k=function(){C(),y(100),setTimeout((function(){x(),b()}),200)},b=function(){w||requestAnimationFrame(j),w=!0},j=function(){var e=g-f,t=Math.ceil(h/e*100);t<=100&&T(t),w=!1},C=function(){f=window.innerHeight,g=o()(document).height()},x=function(){var e=m.parent().width(),t=e/2,n=(0,u.tq)()?2:3;m.parent().attr("viewBox","0 0 ".concat(e," ").concat(e)),m.attr("stroke-width",n),m.attr("r",t-(n-1)),m.attr("cx",t),m.attr("cy",t),p=2*t*Math.PI,m[0].style.strokeDasharray="".concat(p," ").concat(p),m[0].style.strokeDashoffset=p},T=function(e){if(e<=100){var t=p-e/100*p;m[0].style.strokeDashoffset=t}};o()((function(){d=o()(".js-animation-wrapper");var e=o()(".js-scrolltop"),t=o()(".js-recommended-slider");if(r()(".js-post-content"),(0,u.e)(),y(1e3),t.length>0)new c.ZP(".js-recommended-slider",{modules:[c.W_,c.s5],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,allowTouchMove:!0,loop:!0,a11y:!0,breakpoints:{720:{slidesPerView:2,allowTouchMove:!0,loop:!0},1024:{slidesPerView:3,allowTouchMove:!1,loop:!1}},on:{init:function(){(0,l.Z)(".js-article-card-title",100),(0,l.Z)(".js-article-card-title-no-image",250)}}});(0,l.Z)(".js-article-card-title",100),(0,l.Z)(".js-article-card-title-no-image",250),e.on("click",(function(){o()("html, body").animate({scrollTop:0},500)})),(0,u.eS)(o()),(0,u.ej)(o(),i.Z),window.addEventListener("scroll",v,{passive:!0}),window.addEventListener("resize",k,{passive:!0})})),o()(window).on("load",(function(){m=o()(".js-progress"),C(),x(),j(),setTimeout((function(){m.parent().css("opacity",1)}),300)}))}},e=>{e.O(0,[898],(()=>{return t=717,e(e.s=t);var t}));e.O()}]);