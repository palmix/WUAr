        var videotracks = "";   
        var wopenpop = 450;
        var hopenpop = 450;
        var left = Number((screen.width/2)-(wopenpop/2));
        var tops = Number((screen.height/2)-(hopenpop/2));
function b64DecodeUnicode(str) {
	return decodeURIComponent( escape( atob( str ) ) );
}
var searchs = location.search;
var hashidonsite = location.hash;
var uncidvideourls = "Ly93dWFyYWIuYmxvZ3Nwb3QuY29tL3AvdmlkZW9zLmh0bWw/dmlkZW89";
var idvideourls = b64DecodeUnicode(uncidvideourls);
var idvideo = searchs.replace("?video=","");
var vidyut= b64DecodeUnicode(idvideo);
var idvideourl = idvideourls+idvideo;
var uncyt = "eW91dHViZQ==";
var setcyt= b64DecodeUnicode(uncyt);
var uncem = "LmNvbS9lbWJlZC8=";
var setcem= b64DecodeUnicode(uncem);
var th = "https://www."
var uncimg = "aHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8="
var setcimg= b64DecodeUnicode(uncimg);
var uncvidy = "aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0="
var setcvidy= b64DecodeUnicode(uncvidy);
var uncvidd = "aHR0cHM6Ly95Mm1hdGUuY29tL3lvdXR1YmUv"
var setcvidd= b64DecodeUnicode(uncvidd);
var uncvidd = "aHR0cHM6Ly95Mm1hdGUuY29tL3lvdXR1YmUv"
var setcvidd= b64DecodeUnicode(uncvidd);




var setonechashid = Base64.decode(hashidonsite);
var replacehash = setonechashid.replace("#","");
var sethashids = "https://wuarabic.blogspot.com"+setonechashid;

var blob = new Blob([th+setcyt+setcem+vidyut], { type: 'text/plain' });
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
