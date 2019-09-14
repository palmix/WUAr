var setcardinfo11 = document.getElementById("cardinfo11");
var cardinfo11 = setcardinfo11.innerHTML;
cardinfo11 = cardinfo11.replace("<ul>","")
cardinfo11 = cardinfo11.replace("</ul>","")
cardinfo11 = cardinfo11.replace("<br>","")
    $("#cardinfo").after("<div class='douknowcardinfo'><div class='youknowcardinfo'>هل تعلم؟</div><span class='youknowcardinfoafter'></span><div id='slidescardinfo'>"+cardinfo11+"</div></div>"); 
    		$(document).ready(function() { 
			$("#slidescardinfo li:nth-of-type(1)").addClass("slidecardinfo showingslidcardinfo"); 
			$("#slidescardinfo li:nth-of-type(2)").addClass("slidecardinfo"); 
			$("#slidescardinfo li:nth-of-type(3)").addClass("slidecardinfo"); 
			$("#slidescardinfo li:nth-of-type(4)").addClass("slidecardinfo"); 
			$("#slidescardinfo li:nth-of-type(5)").addClass("slidecardinfo"); 
			$("#slidescardinfo li:nth-of-type(6)").addClass("slidecardinfo"); 
			$("#slidescardinfo li:nth-of-type(7)").addClass("slidecardinfo");
			$("#slidescardinfo li:nth-of-type(8)").addClass("slidecardinfo");
			$("#slidescardinfo li:nth-of-type(9)").addClass("slidecardinfo");
			$("#slidescardinfo li:nth-of-type(10)").addClass("slidecardinfo");
    var currentSlide = 0;
    var slidescardinfo = document.querySelectorAll('#slidescardinfo .slidecardinfo');
    var slideIntervaltimer = setInterval(nextSlide,5000);
        $('.douknowcardinfo').hover(function(ev){
    clearInterval(slideIntervaltimer);
}, function(ev){
    slideIntervaltimer = setInterval( nextSlide, 2000);
});
function nextSlide(){
    slidescardinfo[currentSlide].className = 'slidecardinfo';
    currentSlide = (currentSlide+1)%slidescardinfo.length;
    slidescardinfo[currentSlide].className = 'slidecardinfo showingslidcardinfo';
    
}
}); 
