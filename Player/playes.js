        var videotracks = "";   
        var wopenpop = 450;
        var hopenpop = 450;
        var left = Number((screen.width/2)-(wopenpop/2));
        var tops = Number((screen.height/2)-(hopenpop/2));
var searchs = location.search;
var hashidonsite = location.hash;
var uncidvideourls = "Ly93dWFyYWIuYmxvZ3Nwb3QuY29tL3AvdmlkZW9zLmh0bWw/dmlkZW89";
var idvideourls = Base64.decode(uncidvideourls);
var idvideo = searchs.replace("?video=","");
var vidyuts= Base64.decode(idvideo);
var vidyut = vidyuts.replace(" ","");
var idvideourl = idvideourls+idvideo;
var uncyt = "eW91dHViZQ==";
var setcyt= Base64.decode(uncyt);
var uncem = "LmNvbS9lbWJlZC8=";
var setcem= Base64.decode(uncem);
var th = "https://www."
var uncimg = "aHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8=";
var setcimg= Base64.decode(uncimg);
var uncvidy = "aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0=";
var setcvidy= Base64.decode(uncvidy);
var uncvidd = "aHR0cHM6Ly95Mm1hdGUuY29tL3lvdXR1YmUv";
var setcvidd= Base64.decode(uncvidd);
var uncvidd = "aHR0cHM6Ly95Mm1hdGUuY29tL3lvdXR1YmUv";
var setcvidd= Base64.decode(uncvidd);




var setonechashid = Base64.decode(hashidonsite);
var replacehash = setonechashid.replace("#","");
var sethashidsc = "aHR0cHM6Ly93dWFyYWJpYy5ibG9nc3BvdC5jb20=",
var sethashidsa = Base64.decode(sethashidsc),
var sethashids = sethashidsa + replacehash,



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
