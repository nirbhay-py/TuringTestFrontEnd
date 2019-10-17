$(document).ready(function(){
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 40) {
        $("#pswd").focus();
    }
    else if(event.keyCode == 38) {
        $("#username").focus();
    }
  });
})
