var gettdimgvideo = document.getElementById('tdimgvideo');
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
var getvideotracks = document.getElementById('tdvideotracks');
var novid = 'no_video';
var imgvideoID = gettdimgvideo.textContent;
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
  
var btnvideoshow = ''
var btnvideodownload = ''
var changevideoID = ''
var idimageforvideos = '';
var idimageforvideobtn = '';

var wopenpop = 450;
var hopenpop = 450;
var left = Number((screen.width/2)-(wopenpop/2));
var tops = Number((screen.height/2)-(hopenpop/2));

  
       if (idimageforvideos == novid){
idimageforvideos = 'https://lh3.googleusercontent.com/-kmc5H3Cyr10/XZHW_x2JviI/AAAAAAAADds/CCzhTilo1sIm6CeSNTraI_q8A_EaaRoCgCLcBGAsYHQ/h1600/GeoArabic-2.jpg';
idimageforvideobtn = 'https://lh3.googleusercontent.com/-kmc5H3Cyr10/XZHW_x2JviI/AAAAAAAADds/CCzhTilo1sIm6CeSNTraI_q8A_EaaRoCgCLcBGAsYHQ/w102-h62-c/GeoArabic-2.jpg';
}else{




  var imgvideoIDs =  $("#tdimgvideo").find('a').attr('href');
  
  if (imgvideoIDs){
  idimageforvideos = imgvideoIDs.replace('/s1600/','/w635-h358-c/');
  idimageforvideobtn = imgvideoIDs.replace('/s1600/','/w102-h62-c/');
  idimageforvideos = imgvideoIDs.replace('/s120/','/w635-h358-c/');
  idimageforvideobtn = imgvideoIDs.replace('/s120/','/w102-h62-c/');
  idimageforvideobtn = idimageforvideobtn.replace('/s320/','/w102-h62-c/');
  }else{
idimageforvideos = 'https://lh3.googleusercontent.com/-kmc5H3Cyr10/XZHW_x2JviI/AAAAAAAADds/CCzhTilo1sIm6CeSNTraI_q8A_EaaRoCgCLcBGAsYHQ/h1600/GeoArabic-2.jpg';
idimageforvideobtn = 'https://lh3.googleusercontent.com/-kmc5H3Cyr10/XZHW_x2JviI/AAAAAAAADds/CCzhTilo1sIm6CeSNTraI_q8A_EaaRoCgCLcBGAsYHQ/w102-h62-c/GeoArabic-2.jpg';
  }
  }

  
     if (videotrackslink == novid){
var videotracks = '';
}else{
 var  videotracks = videotrackslink;
  }
   if (videoID == novid){

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
window.open('https://www.vidpaw.com/download/'+videoID, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+wopenpop+', height=600, top='+tops+', left='+left);
},
  'download'
);}
changeVideo(videoID);
  function download1() {window.open("https://www.vidpaw.com/download/"+videoID, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+wopenpop+', height=600, top='+tops+', left='+left)};

  btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideo(videoID);"></a></div>'
  btnvideodownload += '<div class="btndownloadvideo"><a class="btnshowvideo btndowvideo" href="javascript:download1();"></a></div>';

  }

  
     if (video2ID !== novid){
  function download3() {window.open("https://www.vidpaw.com/download/"+video2ID, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+wopenpop+', height=600, top='+tops+', left='+left)};

    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideo(video2ID);"></a></div>';
     btnvideodownload += '<div class="btndownloadvideo"><a class="btnshowvideo btndowvideo" href="javascript:download3();"></a></div>';

  }
  
  
   if (videoIDOk !== novid){
function changeVideoOk(changevideoID) {
document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//ok.ru/videoembed/'+videoIDOk+'" frameborder="0" allowfullscreen></iframe>';

}  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoOk(changevideoID);"></a></div>';
  }
  
  
  
  
  
  
   if (video2IDOk !== novid){

 function changeVideoOk2(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//ok.ru/videoembed/'+video2IDOk+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoOk2(changevideoID);"></a></div>';
  }
  
  
  
  
   if (videoIDDaily !== novid){

 function changeVideoDaily(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//www.dailymotion.com/embed/video/'+videoIDDaily+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoDaily(changevideoID);"></a></div>';
  }
  
  
  
   if (video2IDDaily !== novid){

 function changeVideoDaily2(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//www.dailymotion.com/embed/video/'+video2IDDaily+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoDaily2(changevideoID);"></a></div>';
  }
  
  
  
  
   if (videoIDRutube !== novid){

 function changeVideoIDRutube(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//rutube.ru/play/embed/'+videoIDRutube+'?skinColor=13aae6&sTitle=false&sAuthor=false" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoIDRutube(changevideoID);"></a></div>';
  }
  
  
  
  
   if (videoIDVk !== novid){

 function changeVideoVk(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//vk.com/video_ext.php?'+videoIDVk+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoVk(changevideoID);"></a></div>';
  }
  
  
  
   if (videoIDGoogle !== novid){

 function changeVideoGoogle(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//video.geoarabic.com/p/videog.html?m=0&video='+videoIDGoogle+'" frameborder="0" allowfullscreen></iframe>';

 }  
 function download2() {window.open("https://lh3.googleusercontent.com/"+videoIDGoogle+"=m22", '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+wopenpop+', height=600, top='+tops+', left='+left)};

    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoGoogle(changevideoID);"></a></div>';
    btnvideodownload += '<div class="btndownloadvideo"><a class="btnshowvideo btndowvideo" href="javascript:download2();"></a></div>';

   }
  
  
   if (videoIDGoogleDrive !== novid){

 function changeVideoGoogleDrive(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="//drive.google.com/file/d/'+videoIDGoogleDrive+'/preview" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoGoogleDrive(changevideoID);"></a></div>';
  }
  
  
   if (videoIDiframelink !== novid){

 function changeVideoiframelink(changevideoID) {
 document.getElementById('VAndD').innerHTML = '<iframe width="100%" height="100%" src="'+videoIDiframelink+'" frameborder="0" allowfullscreen></iframe>';

 }  
    btnvideoshow += '<div class="itembtnshowvideo"><a class="btnshowvideo" href="javascript:changeVideoiframelink(changevideoID);"></a></div>';
  }
  
  
  

  
document.getElementById('btnvideoshowid').innerHTML = '<div class="owl-carousel owl-theme">'+btnvideoshow+btnvideodownload+'</div>';
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
            });

  

    console.log('imgh=' + idimageforvideos + '&imgl=' + idimageforvideobtn + '&y=' + videoID + '&y2=' + video2ID + '&o=' + videoIDOk + '&o2=' + video2IDOk + '&d=' + videoIDDaily + '&d2=' + video2IDDaily + '&r=' + videoIDRutube + '&v=' + videoIDVk + '&gp=' + videoIDGoogle + '&gd=' + videoIDGoogleDrive + '&f=' + videoIDiframelink + '&t=' + videotrackslink);

  
