// Content toggle start //

/*$(document).ready(function(){
  $("div.lol").click(function () {
    $(this).toggleClass("flipper");
      console.log("1");
    return true;
  });
});
$(document).ready(function(){
  $("div.back").click(function () {
    $(this).toggleClass("flipper");
    return true;
  });
});*/
$(document).ready(function(){
  $(".social").mouseenter(function (e) {
      var hoverText = $(this).attr("title");
      $("#hint").text(hoverText).show();
      /*$("#hint").css("top", e.clientY+15).css("left", e.clientX+15);*/
      console.log("1");
  });
});
$(document).ready(function(){
  $("img.social").mouseleave(function() {
        $("#hint").hide();
      console.log("2");
  });
});

// Content toggle end //

// Image slider start //
/*
var image1 = new Image();
image1.src = "./img/design.jpg";
var image2 = new Image();
image2.src = "./img/fotboll3.jpg";
var image3 = new Image();
image3.src = "./img/puck.jpg";
var image4 = new Image();
image4.src = "./img/gaming.jpg";
var image5 = new Image();
image5.src = "./img/topgear.jpg";

var numberImage = 1;
var slide = true;

function slideIt() {
    if(slide)
    {
    document.images.slide.src = eval("image"+numberImage+".src")
    
    if(numberImage < 5) {
        numberImage = numberImage + 1;
        
        }
    else {
       numberImage = 1;
        
    }
    }
    setTimeout("slideIt()",5000);
    
    
}



$(document).ready(function(){
    $("#imagis").mouseenter(function(){
        $(this).next("img").stop(true);
        slide = false;
        return true;
    });
    $("#imagis").mouseleave(function(){
        $(this).next("img").stop(true);
        slide = true;
        return true;
    });
});


slideIt();*/
// Image slider end //
function flipit(el, boo) {
        
        if(boo == true){
        el.children[1].style.webkitTransform = "perspective(600px) rotateY(-180deg)";
        el.children[0].style.webkitTransform = "perspective(600px) rotateY(0deg)";
        el.children[1].style.transition = "all .5s linear 0s";
        el.children[0].style.transition = "all .5s linear 0s";
        el.children[1].style.transform = "perspective(600px) rotateY(-180deg)";
        el.children[0].style.transform = "perspective(600px) rotateY(0deg)";
        el.children[1].style.webkitTransition = "all .5s linear 0s";
        el.children[0].style.webkitTransition = "all .5s linear 0s";
        }
        if(boo == false){
        el.children[1].style.webkitTransform = "perspective(600px) rotateY(0deg)";
        el.children[0].style.webkitTransform = "perspective(600px) rotateY(180deg)";
        el.children[1].style.transition = "all .5s linear 0s";
        el.children[0].style.transition = "all .5s linear 0s";
        el.children[1].style.transform = "perspective(600px) rotateY(0deg)";
        el.children[0].style.transform = "perspective(600px) rotateY(180deg)";
        el.children[1].style.webkitTransition = "all .5s linear 0s";
        el.children[0].style.webkitTransition = "all .5s linear 0s";
        }
    }
