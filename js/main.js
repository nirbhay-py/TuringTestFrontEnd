$(document).ready(function(){
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 40) {
        $("#pswd").focus();
    }
    else if(event.keyCode == 38) {
        $("#username").focus();
    }
  });
  var elem = document.getElementById('main');

  var typewriter = new Typewriter(elem, {
      loop: false
  });

  typewriter.typeString('<strong>Turing Test</strong>')
      .start();
})
