// top-bar.js
document.addEventListener('DOMContentLoaded', () => {
    const topBar = document.querySelector('.top-bar');
    const navBar = document.querySelector('.navbar');
    let lastScrollY = 0;
    const scrollThreshold = 30; // Minimum scroll before toggling
  
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + scrollThreshold) {
        // Scrolled down
        topBar.classList.add('hidden');
        navBar.classList.add('hidden');
      } else if (currentScrollY < lastScrollY - scrollThreshold) {
        // Scrolled up
        topBar.classList.remove('hidden');
        navBar.classList.remove('hidden');
      }
      lastScrollY = currentScrollY;
    });
  });
  