/* ==========================================================================
   BAREERAH TARIQ — PORTFOLIO JAVASCRIPT (script.js)
   Handles:
   1. Dynamic Copyright Year
   2. Mobile Menu Toggle
   3. Active Section Highlighting on Scroll
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Dynamic Footer Year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Mobile Navigation Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      menuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // 3. Active Nav Link Highlighting on Scroll
  const pageSections = document.querySelectorAll('section[id]');
  const navigationLinks = document.querySelectorAll('.nav-link');

  function highlightOnScroll() {
    const scrollPosition = window.scrollY + 150;

    pageSections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navigationLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightOnScroll);
});