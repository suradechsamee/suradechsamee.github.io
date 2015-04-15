$(document).ready(function(){
  $("h3.flip").click(function () {
    $(this).next("p.intro").slideToggle("slow");
    return false;
  });
});
$(document).ready(function(){
  $("img.social").click(function () {
    $(this).next("p.kon").slideToggle("slow");
    return false;
  });
});


var image1 = new Image();
image1.src = "./img/design.jpg";
var image2 = new Image();
image2.src = "./img/fotboll.jpg";
var image3 = new Image();
image3.src = "./img/puck.jpg";
var image4 = new Image();
image4.src = "./img/gaming.jpg";
var image5 = new Image();
image5.src = "./img/topgear.jpg";

var numberImage = 1;
function slideIt() {
    document.images.slide.src = eval("image"+numberImage+".src")
    if(numberImage < 5) {
        numberImage = numberImage + 1;
        
        }
    else {
       numberImage = 1;
        
    }
    setTimeout("slideIt()",3000);
}
slideIt();


