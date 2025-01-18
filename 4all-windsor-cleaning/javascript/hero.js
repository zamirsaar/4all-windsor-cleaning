// hero.js
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const topBarHeight = document.querySelector('.top-bar').offsetHeight;
  
    window.addEventListener('scroll', () => {
      // If you want the navbar to become 'sticky' after scrolling past top bar:
      if (window.scrollY > topBarHeight) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  });
  