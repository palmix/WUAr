function initializeChaptersidebarfgeoarabicchapter(){function e(){var e=document.querySelector(".chapter-sidebarfgeoarabicchapter"),t=document.querySelector("#header-wrapper"),a=t.getBoundingClientRect().bottom;42>=a?addClass(e,"chapter-sidebarfgeoarabicchapter--sticky"):removeClass(e,"chapter-sidebarfgeoarabicchapter--sticky");for(var i=document.querySelectorAll(".sidebarfgeoarabicchapter__link--highlight"),r=0;r<i.length;r++)removeClass(i[r],"sidebarfgeoarabicchapter__link--highlight");for(var o=document.querySelectorAll(".subheading__heading"),r=o.length-1;r>=0;r--){var s=o[r],n=s.getBoundingClientRect();if(n.top<window.innerHeight-window.innerHeight/2-40){for(var c=s.getAttribute("id"),l=document.querySelectorAll(".sidebarfgeoarabicchapter__link"),d=0;d<l.length;d++){var h=l[d],p=h.getAttribute("href").substring(1);p===c&&addClass(h,"sidebarfgeoarabicchapter__link--highlight")}break}}}window.addEventListener?window.addEventListener("scroll",throttle(e,15),!1):window.attachEvent&&window.attachEvent("onscroll",throttle(e,15))}function throttle(e,t){var a=!1;return function(){a||(e.call(),a=!0,setTimeout(function(){a=!1},t))}}function addClass(e,t){e.classList?e.classList.add(t):-1===e.className.indexOf(t)&&(e.className+=" "+t)}function removeClass(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function getHeight(e){var t=e.cloneNode(!0);e.parentNode.replaceChild(t,e),t.style.display="block",t.style.visibility="hidden",t.style.height="auto";var a=t.offsetHeight;return t.parentNode.replaceChild(e,t),a}function slideDown(e){var t=getHeight(e);setTimeout(function(){e.style.height=t+"px"},1)}function slideUp(e){var t=getHeight(e);e.style.height=t+"px",setTimeout(function(){e.style.height="0px"},1)}var newItemchapter=document.createElement("div");newItemchapter.setAttribute("id","chapter");var textnodeinchapter=document.createTextNode("");newItemchapter.appendChild(textnodeinchapter);var postbody=document.getElementById(postidforcardinfo);postbody.insertBefore(newItemchapter,postbody.childNodes[0]),$("#"+postidforcardinfo+" h2").addClass("subheading__heading"),$("#"+postidforcardinfo+" h3").addClass("subheading__heading"),$("#"+postidforcardinfo+" h4").addClass("subheading__heading"),$("#"+postidforcardinfo+" h5").addClass("subheading__heading"),$("#"+postidforcardinfo+" h6").addClass("subheading__heading");var titleChapter=postbody.querySelectorAll("h2, h3, h4, h5, h6");if(titleChapter.length>=1){var i,leChapteraptor=[];for(i=0;i<titleChapter.length;i++){if(9>i)var z="0";else var z="";anchorChapter="chapitre-"+z+(i+1),titleChapter[i].setAttribute("id",anchorChapter),leChapteraptor[i]="<li class='sidebarfgeoarabicchapter__list-item'><span onclick='jump(\""+anchorChapter+"\")' href='#"+anchorChapter+"' class='sidebarfgeoarabicchapter__link'> <a  href='#"+anchorChapter+"'>"+titleChapter[i].innerHTML+"</a></span></li>"}window.matchMedia("(max-width: 1399px)").matches?(document.getElementById("chapter").innerHTML="<div class='control-panel-ContentsMobil'> <span class='ContentsMobileShowhide'></span> <span class='ContentsMobileShowcon beforeContentsMobileShowcon'><li class='ContentsMobile1399'>محتويات الموضوع</li><div class='chapter-sidebarfgeoarabicchapter'> <div class='sidebarfgeoarabicchapter js-sidebarfgeoarabicchapter'> <div class='sidebarfgeoarabicchapter__wrapper'> <ul class='sidebarfgeoarabicchapter__list'>"+leChapteraptor.join("")+"</ul> </div> </div> </div></span></div>",$(document).ready(function(){$(".ContentsMobileShowhide").click(function(){$(".ContentsMobileShowhide").addClass("ContentsMobileShowhidebefor"),$(".ContentsMobileShowhide").toggleClass("ContentsMobileShow"),$(".control-panel-ContentsMobil").toggleClass("classcontrolContents"),$(".ContentsMobileShowcon").toggleClass("ContentsMobileShowconshow")})})):document.getElementById("chapter").innerHTML="<div class='chapter-sidebarfgeoarabicchapter'> <div class='sidebarfgeoarabicchapter js-sidebarfgeoarabicchapter'> <div class='sidebarfgeoarabicchapter__wrapper'> <ul class='sidebarfgeoarabicchapter__list'>"+leChapteraptor.join("")+"</ul> </div> </div> </div>";var sidebarfgeoarabicchapter=document.querySelector(".chapter-sidebarfgeoarabicchapter");sidebarfgeoarabicchapter&&initializeChaptersidebarfgeoarabicchapter()}else document.getElementById("chapter").style.display="none";function jump(z) { a = document.getElementById("navbar-main"); b = document.getElementById("header-wrapper"); var tops = document.getElementById(z).offsetTop; if (a) { a = a.offsetHeight || a.clientHeight; } else { a = 0; } if (b) { b = b.offsetHeight || b.clientHeight } else { b = 0; } var top = tops - (a + 10); window.scrollTo({top,behavior:'smooth'}); } 
