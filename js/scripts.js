$(document).ready(function(){
  $("#breakfast").hover(function(){
    $("#breakfast").fadeOut();
    $("#breakfast").fadeIn();
  });
  $("#lunch").hover(function(){
    $("#lunch").fadeOut();
      $("#lunch").fadeIn();
  });
  $("#dinner").hover(function(){
    $("#dinner").fadeOut();
      $("#dinner").fadeIn();
  });


  $("form#form").submit(function(event){
    event.preventDefault();
    var email=$("input#email").val();
    alert("Thank you for subscribing ;-)");
  })




});
