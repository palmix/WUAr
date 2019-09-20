var setcardinfo11 = document.getElementById("cardinfo11");
var ifgetcardinfo112 = setcardinfo11.getElementsByTagName("UL")[0];
        var wopenpop = 450;
        var hopenpop = 450;
        var left = Number((screen.width/2)-(wopenpop/2));
        var tops = Number((screen.height/2)-(hopenpop/2));
  	var linkpageurl = window.location.href;
   if(ifgetcardinfo112){

var cardinfo11 = setcardinfo11.innerHTML;
cardinfo11 = cardinfo11.replace("<ul>","")
cardinfo11 = cardinfo11.replace("</ul>","")
cardinfo11 = cardinfo11.replace("<br>","")
    $("#cardinfo").after("<div class='douknowcardinfo'><div class='youknowcardinfo'>هل تعلم؟</div><span class='youknowcardinfoafter'></span><div id='slidescardinfo'>"+cardinfo11+"<br/><span id='twittershardidyouknow'></span></div></div>"); 
  var tweetnowtexts = document.getElementById("twittershardidyouknow");
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
    $('.showingslidcardinfo').attr('id', 'showingslidcardinfo');
  var tweetnow = document.getElementById('showingslidcardinfo');
var tweetnowtext = tweetnow.textContent;
tweetnowtexts.innerHTML = "<span id='twittershardidyouknows' onclick='window.open(&quot;//twitter.com/intent/tweet?hashtags=جيو_عربي&amp;url="+linkpageurl+"&amp;text="+tweetnowtext+" -  &amp;via=GeoArabs&amp;related=clipsv,wildlifeSite,NetPalMix,ghoror_alward,RamallahInfo&quot;, &#39;&#39;, &#39;toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=&#39;+wopenpop+&#39;, height=&#39;+hopenpop+&#39;, top=&#39;+tops+&#39;, left=&#39;+left)' title='"+tweetnowtext+"(شارك هذا على تويتر)'></span> ";

    var currentSlide = 0;
    var slidescardinfo = document.querySelectorAll('#slidescardinfo .slidecardinfo');
	  $('.douknowcardinfo').hover(function(ev){
    clearInterval(slideIntervaltimer);
}, function(ev){
    slideIntervaltimer = setInterval( nextSlide, 5000);
});
    var slideIntervaltimer = setInterval(nextSlide,6000);

			function nextSlide(){
    slidescardinfo[currentSlide].className = 'slidecardinfo';
    currentSlide = (currentSlide+1)%slidescardinfo.length;
    slidescardinfo[currentSlide].className = 'slidecardinfo showingslidcardinfo';
    var currentSlidefordidknow = slidescardinfo[currentSlide];
var tweetnowtext = currentSlidefordidknow.textContent;
tweetnowtexts.innerHTML = "<span id='twittershardidyouknows' onclick='window.open(&quot;//twitter.com/intent/tweet?hashtags=جيو_عربي&amp;url="+linkpageurl+"&amp;text="+tweetnowtext+" -  &amp;via=GeoArabs&amp;related=clipsv,wildlifeSite,NetPalMix,ghoror_alward,RamallahInfo&quot;, &#39;&#39;, &#39;toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=&#39;+wopenpop+&#39;, height=&#39;+hopenpop+&#39;, top=&#39;+tops+&#39;, left=&#39;+left)' title='"+tweetnowtext+"(شارك هذا على تويتر)'></span> ";

}
}); 
   }
