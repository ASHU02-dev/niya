// NIYA INFO PRIVATE LIMITED - Interactive Script
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const menuBtn = document.querySelector('.menu');
  const navMenu = document.querySelector('nav');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', navMenu.classList.contains('open'));
      menuBtn.innerHTML = navMenu.classList.contains('open') ? '✕' : '☰';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuBtn.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        menuBtn.innerHTML = '☰';
      }
    });

    // Close menu on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuBtn.innerHTML = '☰';
      });
    });
  }

  // Header scroll shadow effect
  const header = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
      header.style.boxShadow = '0 4px 20px rgba(10, 28, 62, 0.08)';
    } else {
      header?.classList.remove('scrolled');
      header.style.boxShadow = 'none';
    }
  });

  // Contact Form Handling (if present)
  const contactForm = document.querySelector('.form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerText : 'Send Enquiry ↗';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Transmitting...';
      }

      setTimeout(() => {
        // Show success status
        let statusBox = contactForm.querySelector('.form-status');
        if (!statusBox) {
          statusBox = document.createElement('div');
          statusBox.className = 'form-status success';
          contactForm.insertBefore(statusBox, submitBtn);
        }
        statusBox.className = 'form-status success';
        statusBox.innerHTML = '✓ Thank you! Your enquiry has been recorded. Our telematics solutions team will get in touch with you shortly.';
        statusBox.style.display = 'block';

        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = originalText;
        }

        setTimeout(() => {
          statusBox.style.display = 'none';
        }, 8000);
      }, 700);
    });
  }
});
