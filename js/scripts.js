$(document).ready(function(){

  $("form#form").submit(function(event){
    event.preventDefault();
    var email=$("input#email").val();
    alert("Thank you for subscribing ;-)");
  })
});
