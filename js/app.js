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
