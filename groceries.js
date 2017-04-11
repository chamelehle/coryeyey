(function($) {
 $(function() {

        $('.update').live('change', function() {
            formObject.run($(this));
        });

    });
})(jQuery);






var myArray=[];
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function search()
{
  setCookie("contact", "",1);

}
function delt()
{
  setCookie("bio1", "",1);
}
function bio()
{
  var bio3 = document.getElementById("bio").value;
  setCookie("bio1", bio3, 20*365);
  var bcook=getCookie("bio1");
  document.getElementById('bval').value = bcook;

}
function bioon()
{
  var bcook=getCookie("bio1");
  document.getElementById('bval').value = bcook;
  var fccook=getCookie("color");
  document.body.style.backgroundColor = fccook;
}
function contact()
{

  var contact = document.getElementById("cn").value;
  myArray.push(contact);
  setCookie("contact", myArray , 20*365);
  var cncook=getCookie("contact");
  document.getElementById('cnval').value = cncook;

}
function contacton()
{
  var cncook=getCookie("contact");
  document.getElementById('cnval').value = cncook;
  var fccook=getCookie("color");
  document.body.style.backgroundColor = fccook;
}

function firstname()
{
  var first = document.getElementById("fn").value;
  setCookie("first", first, 20*365);
  var fcook=getCookie("first");
  document.getElementById('fval').value = fcook;
}
function firston()
{
  var fcook=getCookie("first");
  document.getElementById('fval').value = fcook;
}
function lastname()
{
  var last = document.getElementById("ln").value;
  setCookie("last", last, 20*365);
  var lcook=getCookie("last");
  document.getElementById('lval').value = lcook;

}
function laston()
{
  var lcook=getCookie("last");
  document.getElementById('lval').value = lcook;

}
function address()
{
  var ad = document.getElementById("ad").value;
  setCookie("address", ad, 20*365);
  var acook=getCookie("address");
  document.getElementById('aval').value = acook;

}
function addon()
{
  var acook=getCookie("address");
  document.getElementById('aval').value = acook;

}
function color()
{
  var fc = document.getElementById("fc").value;
  setCookie("color", fc, 20*365);
  var fcook=getCookie("color");
  document.getElementById('fcval').value = fcook;

  document.body.style.backgroundColor = fc;


}
function favon()
{
  var fccook=getCookie("color");
  document.getElementById('fcval').value = fccook;
var fccook=getCookie("color");
  document.body.style.backgroundColor = fccook;
}

//courtesy of stackoverflow, from: http://stackoverflow.com/questions/5802580/html-input-type-file-get-the-image-before-submitting-the-form
function previewFile() {
  var elephant = document.getElementById('img');
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  }
  else {
    preview.src = "";
  }
}

function User()
{
  window.open("User.html",'_self');
}
function Contacts()
{
  window.open("Contacts.html",'_self');
}
function Bio22()
{
  window.open("Bio.html",'_self');
}
function home()
{
  window.open("index.html",'_self');
}
function index()
{
  var fccook=getCookie("color");
  document.body.style.backgroundColor = fccook;
}


function storeTheImage() {
    var imgCanvas = document.getElementById('canvas-element'),
        imgContext = imgCanvas.getContext("2d");

    var img = document.getElementById('image-preview');
    // Make sure canvas is as big as the picture BUT make it half size to the file size is small enough
    imgCanvas.width = (img.width/4);
    imgCanvas.height = (img.height/4);

    // Draw image into canvas element
    imgContext.drawImage(img, 0, 0, (img.width/4), (img.height/4));

    // Get canvas contents as a data URL
    var imgAsDataURL = imgCanvas.toDataURL("image/png");

    // Save image into localStorage
    try {
        window.localStorage.setItem("imageStore", imgAsDataURL);
        $('.localstorage-output').html( window.localStorage.getItem('imageStore') );
    }
    catch (e) {
        console.log("Storage failed: " + e);
    }
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image-preview').attr('src', e.target.result);
            storeTheImage();
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$('.file-input').on('change', function() {
    readURL(this);
});


/*
function readURL(input)
{
    document.getElementById("BImg").style.display = "block";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('BImg').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}
*/

//courtesy of stackoverflow, from: http://stackoverflow.com/questions/5802580/html-input-type-file-get-the-image-before-submitting-the-form
/*
function setImage()
{
  var img = document.getElementById('file');
  var ShowImage = document.getElementById('Photo');
  var Data = getBase64Image(ShowImage);
  localStorage.setItem("imgD", Data);
  var image = new Image();
  image.src = Data;
  document.body.appendChild(image);
}
function getImage()
{
  var Image =  localStorage.getItem('imgD');
  ShowImage = document.getElementById('Image');
  ShowImage.src = "data:image/png;base64," + Image;
  document.getElementById('img2').setAttribute('src', 'data:image/png;base64,' + Image)
}
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
//courtesy of stackoverflow, from http://stackoverflow.com/questions/19183180/how-to-save-an-image-to-localstorage-and-display-it-on-the-next-page


function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        var span = document.createElement('span');
        span.innerHTML = ['<img class="thumb" src="', e.target.result,
                          '" title="', escape(theFile.name), '"/>'].join('');

        document.getElementById('list').insertBefore(span, null);
        localStorage.setItem('img', e.target.result);
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }

}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

if(localStorage.img)
{
       var span = document.createElement('span');
        span.innerHTML += ['<img class="thumb" src="', localStorage.img,
                          '" title="test"/>'].join('');
        document.getElementById('list').insertBefore(span, null);
}
*/
