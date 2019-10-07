var setcardinfo11 = document.getElementById("cardinfo11");
var ifgetcardinfo112 = setcardinfo11.getElementsByTagName("UL")[0];
var cardinfo11 = $(ifgetcardinfo112).html();

cardinfo11 = cardinfo11.replace("<br/>","")
cardinfo11 = cardinfo11.replace("<br>","")
  $("#cardinfo").after("<center><div id='didyouknow'><p class='didyouknow0005'>هل تعلم</p><div class='didyouknow0004'></div><div class='owl-carousel owl-theme'>"+cardinfo11+"</div></div></center>"); 





            $(document).ready(function() {
              $('#didyouknow .owl-carousel').owlCarousel({
                responsiveClass: true,
           autoHeight:true,
    rtl: true,
    items:1,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    stagePadding: 50,
    loop:true,
    margin:30,
    nav:true,

          
              })
            })
