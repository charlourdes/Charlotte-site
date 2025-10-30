document.addEventListener('DOMContentLoaded', () => {
  /* ---------------- NAV HIGHLIGHT ---------------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  function checkSectionInView() {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        window.scrollY >= sectionTop - 60 &&
        window.scrollY < sectionTop + sectionHeight - 60
      ) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      const target = link.dataset.target;
      link.classList.toggle('in-view', target === currentSection);
    });
  }

  window.addEventListener('scroll', checkSectionInView);
  checkSectionInView();

  /* ---------------- NAVBAR HIDE/SHOW ---------------- */
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');
  const logo = document.querySelector('.logo-topleft');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (!navbar || !logo) return;

    if (currentScroll > lastScrollTop) {
      navbar.classList.add('hidden');
      logo.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
      logo.classList.remove('hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  /* ---------------- ROTATING TEXT ---------------- */
  const textItems = document.querySelectorAll('.text-item');
  let currentIndex = 0;
  if (textItems.length > 0) {
    textItems[0].classList.add('active');
    setTimeout(() => {
      setInterval(() => {
        textItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % textItems.length;
        textItems[currentIndex].classList.add('active');
      }, 1500);
    }, 4000);
  }

  /* ---------------- CUSTOM CURSOR ---------------- */
  const cursor = document.querySelector('.cursor');
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll('a, button, .card, .links, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }

  /* ---------------- BURGER MENU ---------------- */
  const burger = document.getElementById('burger-menu');
  const overlay = document.getElementById('nav-overlay');
  const logoImg = document.querySelector('.logo-topleft .logo-img');

  if (burger && overlay && navbar && logoImg) {
    burger.addEventListener('click', () => {
      overlay.classList.toggle('active');
      navbar.classList.toggle('overlay-active');
      logoImg.src = overlay.classList.contains('active')
        ? 'Assets/assets/Images/CRlogo.png'
        : 'Assets/assets/Images/CRbluelogo.png';
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.tagName === 'A') {
        overlay.classList.remove('active');
        navbar.classList.remove('overlay-active');
        logoImg.src = 'Assets/assets/Images/CRlogo.png';
      }
    });
  }

  /* ---------------- PROJECT ROWS (Accordion) ---------------- */
  const projectRows = document.querySelectorAll('.project-row');

  projectRows.forEach(row => {
    const details = row.querySelector('.project-details');

    row.addEventListener('click', () => {
      const isExpanded = row.classList.contains('expanded');

      // Collapse all rows first
      projectRows.forEach(other => {
        const otherDetails = other.querySelector('.project-details');
        other.classList.remove('expanded');
        otherDetails.style.height = '0px';
      });

      if (!isExpanded) {
        row.classList.add('expanded');
        const scrollHeight = details.scrollHeight;
        details.style.height = scrollHeight + 'px';

        details.addEventListener('transitionend', function handler() {
          if (row.classList.contains('expanded')) {
            details.style.height = 'auto';
          }
          details.removeEventListener('transitionend', handler);
        });
      } else {
        row.classList.remove('expanded');
        details.style.height = '0px';
      }
    });
  });

  /* ---------------- UK TIME ---------------- */
  const timeElement = document.getElementById('uk-time');
  function updateUKTime() {
    if (!timeElement) return;
    const now = new Date();
    const ukTime = now.toLocaleString('en-GB', {
      timeZone: 'Europe/London',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    const ukDate = now.toLocaleDateString('en-GB', {
      timeZone: 'Europe/London',
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    timeElement.innerHTML = `London, United Kingdom<br>${ukDate} ${ukTime}`;
  }
  updateUKTime();
  setInterval(updateUKTime, 1000);
});
