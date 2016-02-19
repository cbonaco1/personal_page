$(document).ready(function(){

  //Display description of a GOLD rotation when
  //hovering over its title
  $(".gold-rotations-title").hover(function(){
      $(this).next(".rotation-description").toggle(300);
      $(this).prev().toggleClass("icon-rotate-90", 300);
  });

  
});
