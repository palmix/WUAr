function initializeChaptersidebarfgeoarabicchapter(){function e(){var e=document.querySelector(".chapter-sidebarfgeoarabicchapter"),t=document.querySelector("#header-wrapper"),i=t.getBoundingClientRect().bottom;42>=i?addClass(e,"chapter-sidebarfgeoarabicchapter--sticky"):removeClass(e,"chapter-sidebarfgeoarabicchapter--sticky");for(var n=document.querySelectorAll(".sidebarfgeoarabicchapter__link--highlight"),r=0;r<n.length;r++)removeClass(n[r],"sidebarfgeoarabicchapter__link--highlight");for(var a=document.querySelectorAll(".subheading__heading"),r=a.length-1;r>=0;r--){var l=a[r],s=l.getBoundingClientRect();if(s.top<window.innerHeight-window.innerHeight/2-40){for(var o=l.getAttribute("id"),d=document.querySelectorAll(".sidebarfgeoarabicchapter__link"),c=0;c<d.length;c++){var h=d[c],u=h.getAttribute("href").substring(1);u===o&&addClass(h,"sidebarfgeoarabicchapter__link--highlight")}break}}}window.addEventListener?window.addEventListener("scroll",throttle(e,15),!1):window.attachEvent&&window.attachEvent("onscroll",throttle(e,15))}function throttle(e,t){var i=!1;return function(){i||(e.call(),i=!0,setTimeout(function(){i=!1},t))}}function addClass(e,t){e.classList?e.classList.add(t):-1===e.className.indexOf(t)&&(e.className+=" "+t)}function removeClass(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function getHeight(e){var t=e.cloneNode(!0);e.parentNode.replaceChild(t,e),t.style.display="block",t.style.visibility="hidden",t.style.height="auto";var i=t.offsetHeight;return t.parentNode.replaceChild(e,t),i}function slideDown(e){var t=getHeight(e);setTimeout(function(){e.style.height=t+"px"},1)}function slideUp(e){var t=getHeight(e);e.style.height=t+"px",setTimeout(function(){e.style.height="0px"},1)}var sidebarfgeoarabicchapter=document.querySelector(".chapter-sidebarfgeoarabicchapter");sidebarfgeoarabicchapter&&initializeChaptersidebarfgeoarabicchapter();
