/* =============================================
   LITTLE ANGEL PRE PRIMARY SCHOOL - Main JS
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Navbar scroll effect ----
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // ---- Active nav link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Back to top ----
  const btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) btt.classList.add('visible');
      else btt.classList.remove('visible');
    });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ---- Fade-in on scroll ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

  // ---- Counter animation ----
  const counterEls = document.querySelectorAll('.counter-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const step = Math.ceil(target / 60);
        const interval = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current + suffix;
          if (current >= target) clearInterval(interval);
        }, 30);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => counterObserver.observe(el));

  // ---- Cookie banner ----
  const cookieBanner = document.getElementById('cookieBanner');
  if (cookieBanner && !localStorage.getItem('cookieAccepted')) {
    cookieBanner.style.display = 'flex';
    document.getElementById('acceptCookie')?.addEventListener('click', () => {
      localStorage.setItem('cookieAccepted', '1');
      cookieBanner.style.display = 'none';
    });
  } else if (cookieBanner) cookieBanner.style.display = 'none';

  // ---- Form validation ----
  document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        const btn = form.querySelector('[type="submit"]');
        const orig = btn.textContent;
        btn.disabled = true;
        btn.textContent = 'Submitting…';
        setTimeout(() => {
          form.reset();
          form.classList.remove('was-validated');
          btn.disabled = false;
          btn.textContent = orig;
          showToast('✅ Thank you! We\'ll get back to you within 24 hours.');
        }, 1500);
      }
      form.classList.add('was-validated');
    });
  });

  // ---- Toast helper ----
  window.showToast = (msg, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = 'position-fixed top-0 end-0 m-3 p-3 rounded-3 shadow-lg text-white fw-bold';
    toast.style.cssText = `background:${type === 'success' ? '#22C55E' : '#EF4444'};z-index:99999;max-width:340px;font-family:var(--font-body);animation:fadeInDown 0.4s ease`;
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  };

  // ---- Gallery lightbox ----
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const emoji = item.querySelector('.gallery-placeholder')?.textContent || '🖼️';
      const label = item.dataset.label || 'School Activity';
      const modal = document.createElement('div');
      modal.className = 'd-flex align-items-center justify-content-center';
      modal.style.cssText = 'position:fixed;inset:0;background:rgba(15,31,53,0.92);z-index:99999;cursor:pointer;backdrop-filter:blur(8px)';
      modal.innerHTML = `<div style="text-align:center;animation:zoomIn 0.3s ease"><div style="font-size:8rem">${emoji}</div><p style="color:white;font-family:var(--font-display);font-size:1.4rem;margin-top:16px">${label}</p><p style="color:rgba(255,255,255,0.5);font-size:0.85rem">Click anywhere to close</p></div>`;
      document.body.appendChild(modal);
      modal.addEventListener('click', () => modal.remove());
    });
  });

  // ---- Smooth internal links ----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Duplicate marquee track for seamless loop ----
  const track = document.querySelector('.marquee-track');
  if (track) {
    const clone = track.cloneNode(true);
    track.parentNode.appendChild(clone);
  }

});

// CSS keyframes injected via JS for toast/modal
const style = document.createElement('style');
style.textContent = `
@keyframes fadeInDown { from { opacity:0; transform:translateY(-20px); } to { opacity:1; transform:translateY(0); } }
@keyframes zoomIn    { from { opacity:0; transform:scale(0.8); }         to { opacity:1; transform:scale(1); } }
`;
document.head.appendChild(style);
