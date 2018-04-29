        var wopenpop = 450;
        var hopenpop = 450;
        var left = Number((screen.width/2)-(wopenpop/2));
        var tops = Number((screen.height/2)-(hopenpop/2));
function b64EncodeUnicode(str) {
return btoa( unescape( encodeURIComponent( str ) ) );
}
function b64DecodeUnicode(str) {
return decodeURIComponent( escape( atob( str ) ) );}
var searchs = location.search;
idvideo = searchs.replace("?video=","");
idvideourl = "http://ps-7ora.alafdal.net/h238-page?video="+idvideo;
idvideos = searchs.replace("?video=","");
vidyut= b64DecodeUnicode(idvideos);

var blob = new Blob(["https://www.youtube.com/embed/"+vidyut], { type: 'text/plain' });
var blobUrl = URL.createObjectURL(blob);

var xhr = new XMLHttpRequest;
xhr.responseType = 'blob';

xhr.onload = function() {
   var recoveredBlob = xhr.response;

   var reader = new FileReader;

   reader.onload = function() {
     var blobAsDataUrl = reader.result;
     window.location = blobAsDataUrl;
   };

   reader.readAsDataURL(recoveredBlob);
};

