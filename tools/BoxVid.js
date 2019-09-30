var gettdvideoID = document.getElementById('tdvideoID');
var gettdvideo2ID = document.getElementById('tdvideo2ID');
var gettdvideoIDOk = document.getElementById('tdvideoIDOk');
var gettdvideo2IDOk = document.getElementById('tdvideo2IDOk');
var gettdvideoIDDaily = document.getElementById('tdvideoIDDaily');
var gettdvideo2IDDaily = document.getElementById('tdvideo2IDDaily');
var gettdvideoIDRutube = document.getElementById('tdvideoIDRutube');
var gettdvideoIDVk = document.getElementById('tdvideoIDVk');
var gettdvideoIDGoogle = document.getElementById('tdvideoIDGoogle');
var gettdvideoIDGoogleReserve = document.getElementById('tdvideoIDGoogleReserve');
var gettdvideoIDGoogleDrive = document.getElementById('tdvideoIDGoogleDrive');
var gettdvideoIDiframelink = document.getElementById('tdvideoIDiframelink');
var getvideotracks = document.getElementById('videotracks');
var novid = 'no_video';
var videoID = gettdvideoID.textContent;
var video2ID = gettdvideo2ID.textContent;
var videoIDOk = gettdvideoIDOk.textContent;
var video2IDOk = gettdvideo2IDOk.textContent;
var videoIDDaily = gettdvideoIDDaily.textContent;
var video2IDDaily = gettdvideo2IDDaily.textContent;
var videoIDRutube = gettdvideoIDRutube.textContent;
var videoIDVk = gettdvideoIDVk.textContent;
var videoIDGoogle = gettdvideoIDGoogle.textContent;
var videoIDGoogleReserve = gettdvideoIDGoogleReserve.textContent;
var videoIDGoogleDrive = gettdvideoIDGoogleDrive.textContent;
var videoIDiframelink = gettdvideoIDiframelink.textContent;
var videotrackslink = getvideotracks.textContent;
  
var btnvideoshow = '';
var changevideoID = '';

     if (getvideotracks == novid){
var videotracks = ''
}else{
 var  videotracks = 'file:'+videotrackslink;
  }
   if (videoID == novid){

  }else{
     function changeVideo(changevideoID) {
      jwplayer('VAndD').setup({
       width: '100%',
       height: '100%',
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
      image: idimageforvideo,
      sources: [{
      file: 'https://youtu.be/'+ videoID,

      },],
         tracks: [{
    videotracks,
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
  btnvideoshow += '<a class="btnshowvideo" href="javascript:changeVideo(changevideoID);"></a>'
  }

  
  
  
  
   if (videoIDOk !== novid){
function changeVideoOk(changevideoID) {
document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//ok.ru/videoembed/'+videoIDOk+'" frameborder="0" allowfullscreen></iframe>';

}  
    btnvideoshow += '<a class="btnshowvideo" href="javascript:changeVideoOk(changevideoID);"></a>';
  }
  
  
  
  
  
  
   if (video2IDOk !== novid){

 function changeVideoOk2(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//ok.ru/videoembed/'+video2IDOk+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<a class="btnshowvideo" href="javascript:changeVideoOk2(changevideoID);"></a>';
  }
  
  
  
  
   if (videoIDDaily !== novid){

 function changeVideoDaily(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//www.dailymotion.com/embed/video/'+videoIDDaily+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<a class="btnshowvideo" href="javascript:changeVideoDaily(changevideoID);"></a>';
  }
  
  
  
   if (video2IDDaily !== novid){

 function changeVideoDaily2(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//www.dailymotion.com/embed/video/'+video2IDDaily+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<a class="btnshowvideo" href="javascript:changeVideoDaily2(changevideoID);"></a>';
  }
  
  
  
  
   if (videoIDRutube !== novid){

 function changeVideoIDRutube(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//rutube.ru/play/embed/'+videoIDRutube+'?skinColor=13aae6&sTitle=false&sAuthor=false" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<a class="btnshowvideo" href="javascript:changeVideoIDRutube(changevideoID);"></a>';
  }
  
  
  
  
   if (videoIDVk !== novid){

 function changeVideoVk(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//vk.com/video_ext.php?'+videoIDVk+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<a class="btnshowvideo" href="javascript:changeVideoVk(changevideoID);"></a>';
  }
  
  
  
   if (videoIDGoogle !== novid){

 function changeVideoGoogle(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//video.geoarabic.com/p/videog.html?m=0&video='+videoIDGoogle+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<a class="btnshowvideo" href="javascript:changeVideoGoogle(changevideoID);"></a>';
  }
  
  
   if (videoIDGoogleDrive !== novid){

 function changeVideoGoogleDrive(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//drive.google.com/file/d/'+videoIDGoogleDrive+'/preview" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<a class="btnshowvideo" href="javascript:changeVideoGoogleDrive(changevideoID);"></a>';
  }
  
  
   if (videoIDiframelink !== novid){

 function changeVideoiframelink(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="'+videoIDiframelink+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<a class="btnshowvideo" href="javascript:changeVideoiframelink(changevideoID);"></a>';
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  document.getElementById('btnvideoshowid').innerHTML = '<div class="owl-carousel">'+btnvideoshow+'</div>';
  





$('.owl-carousel').owlCarousel({

    loop:true,
            rtl: true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
