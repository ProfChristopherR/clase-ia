/**
 * ============================================
   UTILIDADES - Clases de IA
   Scroll reveal, acordeones, navbar scroll, quiz
   ============================================
 */

(function() {
  'use strict';

  // ---------- Scroll Reveal ----------
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  // ---------- Navbar scroll effect ----------
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // Añadir clase scrolled cuando hay scroll
      if (currentScroll > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Ocultar/mostrar navbar al hacer scroll
      if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ---------- Mobile menu toggle ----------
  function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.navbar-nav');
    if (!menuBtn || !nav) return;

    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      const isOpen = nav.classList.contains('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar menú al hacer clic en un link
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Smooth scroll para anclas ----------
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ---------- Ripple effect en botones ----------
  function initRippleEffect() {
    document.querySelectorAll('.ripple').forEach(btn => {
      btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  // ---------- Parallax sutil en hero ----------
  function initParallax() {
    const heroBg = document.querySelector('.hero-bg');
    if (!heroBg) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }, { passive: true });
  }

  // ---------- Acordeones de tips ----------
  function initTips() {
    document.querySelectorAll('.tip-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        if (!content) return;
        toggle.classList.toggle('open');
        content.classList.toggle('show');
      });
    });
  }

  // ---------- Quiz interactivo ----------
  function initQuiz() {
    const checkBtn = document.querySelector('.btn-check-quiz');
    if (!checkBtn) return;

    checkBtn.addEventListener('click', () => {
      let correct = 0;
      document.querySelectorAll('.quiz-question').forEach(q => {
        const selected = q.querySelector('input[type="radio"]:checked');
        const feedback = q.querySelector('.quiz-feedback');
        if (!feedback) return;

        feedback.className = 'quiz-feedback';
        if (!selected) {
          feedback.textContent = 'Selecciona una respuesta.';
          feedback.classList.add('incorrect');
          return;
        }

        const isCorrect = selected.dataset.correct === 'true';
        if (isCorrect) {
          correct++;
          feedback.textContent = '✅ ¡Correcto!';
          feedback.classList.add('correct');
        } else {
          feedback.textContent = '❌ Incorrecto. Revisa el contenido de la clase.';
          feedback.classList.add('incorrect');
        }
      });

      const result = document.querySelector('.quiz-result');
      if (result) {
        const total = document.querySelectorAll('.quiz-question').length;
        result.textContent = `Obtuviste ${correct} de ${total} respuestas correctas.`;
        result.style.display = 'block';
        result.className = 'quiz-result alert-box ' + (correct === total ? 'alert-success' : 'alert-info');
      }
    });
  }

  // ---------- Inicializar todo ----------
  function init() {
    initScrollReveal();
    initNavbarScroll();
    initMobileMenu();
    initSmoothScroll();
    initRippleEffect();
    initParallax();
    initTips();
    initQuiz();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
