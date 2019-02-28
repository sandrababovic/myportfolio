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

// Typewriter

let i=0;
let txt="I am interested in front-end web development.";
let p=document.querySelector(".type");

function typeWriter() {

	if(i<txt.length){
                
        	p.innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter,80);
	}
}

typeWriter();
