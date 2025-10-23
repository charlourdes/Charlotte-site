// Highlight nav links based on scroll position
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    function checkSectionInView() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= (sectionTop - 60) && window.scrollY < (sectionTop + sectionHeight - 60)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            const target = link.getAttribute('data-target');
            link.classList.toggle('in-view', target === currentSection);
        });
    }

    window.addEventListener('scroll', checkSectionInView);
    checkSectionInView();
});

// Navbar hide/show on scroll
document.addEventListener('DOMContentLoaded', () => {
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
});

// Rotating text functionality
document.addEventListener('DOMContentLoaded', () => {
    const textItems = document.querySelectorAll('.text-item');
    let currentIndex = 0;

    function rotateText() {
        textItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % textItems.length;
        textItems[currentIndex].classList.add('active');
    }

    if (textItems.length > 0) {
        textItems[0].classList.add('active');
        setTimeout(() => {
            setInterval(rotateText, 1500);
        }, 4000);
    }
});

// Custom cursor functionality
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const interactiveElements = document.querySelectorAll('a, button, .card, .links, [role="button"]');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
});

// UK time updater
function updateUKTime() {
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
    const timeElement = document.getElementById('uk-time');
    if (timeElement) {
        timeElement.innerHTML = `London, United Kingdom<br>${ukDate} ${ukTime}`;
    }
}
document.addEventListener('DOMContentLoaded', updateUKTime);
setInterval(updateUKTime, 1000);

// Burger menu functionality
document.addEventListener('DOMContentLoaded', () => {
const burger = document.getElementById('burger-menu');
const overlay = document.getElementById('nav-overlay');
const navbar = document.querySelector('.navbar');
const logoImg = document.querySelector('.logo-topleft .logo-img');

if (burger && overlay && navbar && logoImg) {
  burger.addEventListener('click', () => {
    overlay.classList.toggle('active');
    navbar.classList.toggle('overlay-active');
    if (overlay.classList.contains('active')) {
      logoImg.src = 'Assets/assets/Images/CRlogo.png';
    } else {
      logoImg.src = 'Assets/assets/Images/CRbluelogo.png';
    }
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.tagName === 'A') {
      overlay.classList.remove('active');
      navbar.classList.remove('overlay-active');
      logoImg.src = 'Assets/assets/Images/CRlogo.png';
    }
  });
}
});





document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 900) {
    document.querySelectorAll('.project-row').forEach(row => {
      row.addEventListener('click', () => {
        // Close all other rows
        document.querySelectorAll('.project-row.expanded').forEach(otherRow => {
          if (otherRow !== row) {
            otherRow.classList.remove('expanded');
          }
        });
        // Toggle the clicked row
        row.classList.toggle('expanded');
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const projectRows = document.querySelectorAll(".project-row");

  // Only enable click behavior on touch devices
  if (window.matchMedia("(hover: none)").matches) {
    projectRows.forEach(row => {
      row.addEventListener("click", () => {
        row.classList.toggle("expanded");
      });
    });
  }
});