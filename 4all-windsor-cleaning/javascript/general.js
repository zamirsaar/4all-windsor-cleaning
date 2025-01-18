// general.js
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  
    // Intersection Observer to fade sections in
    // (if you want each <section> to fade/slide in as user scrolls)
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // When 20% of the section is visible
      }
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  