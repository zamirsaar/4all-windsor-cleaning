// services.js
document.addEventListener('DOMContentLoaded', () => {
    const servicesWrapper = document.querySelector('.services-wrapper');
    if ('IntersectionObserver' in window && servicesWrapper) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-active');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
  
      observer.observe(servicesWrapper);
    }
  });
  