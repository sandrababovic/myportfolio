$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 0px, changes navbar color
          if($(this).scrollTop() > 0) { 
              $('#navbar').css({ "background-color" : "rgba(0, 0, 0, 1)"});
          } else {
              $('#navbar').css({ "background-color" : "rgba(0, 0, 0, 0.4)"});
          }
        });
});
