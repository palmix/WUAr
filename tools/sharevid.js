var btnvideoshow = ''
var btnvideodownload = ''
var changevideoID = ''

  var idimageforvideos = $.query.get("imgh");
  var idimageforvideobtn = $.query.get("imgl");
  var videoID = $.query.get("y");
  var video2ID = $.query.get("y2");
  var videoIDOk = $.query.get("o");
  var video2IDOk = $.query.get("o2");
  var videoIDDaily = $.query.get("d");
  var video2IDDaily = $.query.get("d2");
  var videoIDRutube = $.query.get("r");
  var videoIDVk = $.query.get("v");
  var videoIDGoogle = $.query.get("gp");
  var videoIDGoogleReserve = $.query.get("gr");
  var videoIDGoogleDrive = $.query.get("gd");
  var videoIDiframelink = $.query.get("f");
  var videotrackslink = $.query.get("t");









var wopenpop = 450;
var hopenpop = 450;
var left = Number((screen.width/2)-(wopenpop/2));
var tops = Number((screen.height/2)-(hopenpop/2));

  


  
     if (videotrackslink == 'no_video'){
var videotracks = '';
}else{
 var  videotracks = videotrackslink;
  }
   if (videoID == 'no_video'){

  }else{
     function changeVideo(videoID) {
      jwplayer('VAndD').setup({
       width: '100%',
        aspectratio: '16:9',
      skin: 'bekle',
      androidhls: 'true',
      stretching: 'exactfit',
      abouttext: 'سياسة الخصوصية',
      aboutlink: 'https://www.geoarabic.com/p/privacy.html',
            logo: {
        file: 'https://lh3.googleusercontent.com/-n2FsP5m7CNo/WwJ-mqzb5yI/AAAAAAAACeM/MEf_j10rqUMxtWU5XwXvJ6RlSRIgfcNywCLcBGAs/s1600/Untitled-32.png',
        position: 'bottom-right',
        timeout: '25',
        hide: 'false',
        over: '1',
        out: '1',
        margin:'11.5',
    },
      autostart: 'false',
      image:idimageforvideos,
      sources: [{
      file: 'https://youtu.be/'+ videoID,

      },],
         tracks: [{
    file:videotracks,
'default': true
  }],  captions: {
        color: '#FFFFFF',
  fontSize: 23,
        backgroundOpacity: 0,
        edgeStyle: 'raised',

    },
      
       events:{
            onError: function() {
                jwplayer().load({image: 'https://lh3.googleusercontent.com/-5FGasZediAM/Wwn4opzQGnI/AAAAAAAACgM/VxSvalcG2MU5HHD5jyMXdyrIBgMNoKhtQCLcBGAs/s1620/0.jpg',file:'https://raw.githack.com/palmix/WUAr/master/js/player/Untitled (1).mp4'});jwplayer().play()
                }
            }
   
            }).addButton(
  '//lh5.googleusercontent.com/-R_PUSl5mXAk/VQmyyawqlKI/AAAAAAAADeE/4K4KoGP9FAc/s1600/download-button.png',
  'تحميل الفيديو',
  function(){
window.open('https://www.youtubepp.com/watch?v='+videoID+'#result', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+wopenpop+', height=600, top='+tops+', left='+left);
},
  'download'
);}
changeVideo(videoID);
  function download1() {window.open("https://www.youtubepp.com/watch?v="+videoID+"#result", '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+wopenpop+', height=600, top='+tops+', left='+left)};

  btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideo(videoID);"></a></div>'
  btnvideodownload += '<div class="btndownloadvideo"><a class="btnshowvideo btndowvideo" href="javascript:download1();"></a></div>';

  }

  
     if (video2ID !== 'no_video'){
  function download3() {window.open("https://www.youtubepp.com/watch?v="+video2ID+"#result", '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+wopenpop+', height=600, top='+tops+', left='+left)};

    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideo(video2ID);"></a></div>';
     btnvideodownload += '<div class="btndownloadvideo"><a class="btnshowvideo btndowvideo" href="javascript:download3();"></a></div>';

  }
  
  
   if (videoIDOk !== 'no_video'){
function changeVideoOk(changevideoID) {
document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//ok.ru/videoembed/'+videoIDOk+'" frameborder="0" allowfullscreen></iframe>';

}  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoOk(changevideoID);"></a></div>';
  }
  
  
  
  
  
  
   if (video2IDOk !== 'no_video'){

 function changeVideoOk2(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//ok.ru/videoembed/'+video2IDOk+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoOk2(changevideoID);"></a></div>';
  }
  
  
  
  
   if (videoIDDaily !== 'no_video'){

 function changeVideoDaily(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//www.dailymotion.com/embed/video/'+videoIDDaily+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoDaily(changevideoID);"></a></div>';
  }
  
  
  
   if (video2IDDaily !== 'no_video'){

 function changeVideoDaily2(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//www.dailymotion.com/embed/video/'+video2IDDaily+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoDaily2(changevideoID);"></a></div>';
  }
  
  
  
  
   if (videoIDRutube !== 'no_video'){

 function changeVideoIDRutube(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//rutube.ru/play/embed/'+videoIDRutube+'?skinColor=13aae6&sTitle=false&sAuthor=false" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoIDRutube(changevideoID);"></a></div>';
  }
  
  
  
  
   if (videoIDVk !== 'no_video'){

 function changeVideoVk(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//vk.com/video_ext.php?'+videoIDVk+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoVk(changevideoID);"></a></div>';
  }
  
  
  
   if (videoIDGoogle !== 'no_video'){

 function changeVideoGoogle(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//video.geoarabic.com/p/videog.html?m=0&video='+videoIDGoogle+'" frameborder="0" allowfullscreen></iframe>';

 }  
 function download2() {window.open("https://lh3.googleusercontent.com/"+videoIDGoogle+"=m22", '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+wopenpop+', height=600, top='+tops+', left='+left)};

    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoGoogle(changevideoID);"></a></div>';
    btnvideodownload += '<div class="btndownloadvideo"><a class="btnshowvideo btndowvideo" href="javascript:download2();"></a></div>';

   }
  
  
   if (videoIDGoogleDrive !== 'no_video'){

 function changeVideoGoogleDrive(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//drive.google.com/file/d/'+videoIDGoogleDrive+'/preview" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoGoogleDrive(changevideoID);"></a></div>';
  }
  
  
   if (videoIDiframelink !== 'no_video'){

 function changeVideoiframelink(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="'+videoIDiframelink+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoiframelink(changevideoID);"></a></div>';
  }
  
  
  

  
document.getElementById('btnvideoshowid').innerHTML = '<div class="owl-carousel owl-theme">' + btnvideoshow + btnvideodownload + '</div>';
  $('.btnshowvideo').css('background-image', 'url('+idimageforvideobtn+')');
   $('.btndowvideo').css('background-image', 'url(https://lh3.googleusercontent.com/-ompladqwDs4/XZPcEf3KfRI/AAAAAAAADeQ/OT0uHOuvT3YM2wjEMhANmyiL_YbFrgC4ACLcBGAsYHQ/w102-h62-c/554sd32.jpg)');
  
  
  
  
  
               $(document).ready(function() {
              $('.owl-carousel').owlCarousel({
                 rtl: true,
                loop: true,
                margin: 10,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    loop: false,
                    nav: false
                  },
                   250: {
                    items: 2,
                     loop: false,
                    nav: false
                  },
                  320: {
                    items: 3,
                    loop: false,
                    nav: false
                  },
                  500: {
                    items: 4,
                    loop: false,
                    nav: false
                  },
                  1000: {
                    items: 5,
                    nav: false,
                    loop: false,
                    margin: 20
                  }
                }
              })
            })
