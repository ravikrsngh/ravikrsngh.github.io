$(document).ready(function(){
  var height = document.querySelector(".first").offsetHeight;
  if(height < 900) {
    ScrollReveal().reveal('.second h1', { duration: 1000 , distance: '50px'});
    ScrollReveal().reveal('.second p', { duration: 1000 , distance: '50px'});
    ScrollReveal().reveal('.second .box ', { duration: 1000 , distance: '50px'});

    ScrollReveal().reveal('.third h1', { duration: 1000 , distance: '50px' });
    ScrollReveal().reveal('.third-img', { duration: 1000 , distance: '50px'});
    ScrollReveal().reveal('.service-card ', { duration: 1000 , distance: '50px'});
    ScrollReveal().reveal('.m-service-card ', { duration: 1000 , distance: '50px'});

    ScrollReveal().reveal('.content1-img', { duration: 1000 , distance: '50px' });
    ScrollReveal().reveal('.content1 span', { duration: 1000 , distance: '50px'});
    ScrollReveal().reveal('.content1 h3', { duration: 1000 , distance: '50px'});
    ScrollReveal().reveal('.content1 p', { duration: 1000 , distance: '50px'});
    ScrollReveal().reveal('.m-content2', { duration: 1000 , distance: '50px'});
    ScrollReveal().reveal('.m-content2 p', { duration: 1000 , distance: '50px'});
    ScrollReveal().reveal('.m-content2 h3', { duration: 1000 , distance: '50px',origin: 'left'});

    ScrollReveal().reveal('.cc', { duration: 1000 , distance: '50px' });
    ScrollReveal().reveal('.cc-text h3', { duration: 1000 , distance: '50px'});
    ScrollReveal().reveal('.cc-text p', { duration: 1000 , distance: '50px'});
    ScrollReveal().reveal('.cc-img', { duration: 1000 , distance: '50px'});

    ScrollReveal().reveal('.fourth-line div', { interval: 20 });
    ScrollReveal().reveal('.fourth h1', { duration: 1000 , distance: '50px' });
    ScrollReveal().reveal('.fourth-cd', { duration: 1000 , distance: '50px' });
    ScrollReveal().reveal('.fourth-arrow span', { duration: 1000 , distance: '50px' });
    ScrollReveal().reveal('.m-fourth-card', { duration: 1000 , distance: '50px' });

    ScrollReveal().reveal('.fifth h1', { duration: 1000 , distance: '50px' });
    ScrollReveal().reveal('.fifth-card', { duration: 1000 , distance: '50px' });
    ScrollReveal().reveal('.fifth-arrow span', { duration: 1000 , distance: '50px' });

    ScrollReveal().reveal('.sixth h1', { duration: 1000 , distance: '50px' });
    ScrollReveal().reveal('.sixth-arrow', { duration: 1000 , distance: '-100px' });
    ScrollReveal().reveal('.sixth input', { duration: 1000 , distance: '50px' });
    ScrollReveal().reveal('.sixth textarea', { duration: 1000 , distance: '50px' });
    ScrollReveal().reveal('.sixth button', { duration: 1000 , distance: '50px' });
  } else {

  }

})
