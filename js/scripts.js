$(document).ready(function() {
  var age = parseInt(prompt("how old are you?"));
  if (age >=18){
    $("#ofage").show();
  } else {
    $("#notofage").show ();
  }


});
