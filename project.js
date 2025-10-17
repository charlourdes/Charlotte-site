


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    const checkSectionInView = () => {
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
            if (target === currentSection) {
                link.classList.add('in-view');
            } else {
                link.classList.remove('in-view');
            }
        });
    };

    window.addEventListener('scroll', checkSectionInView);
});


// JavaScript to toggle the navbar visibility based on scroll direction
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo-topleft');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('hidden');
        logo.classList.add('hidden');        // ADD THIS TO LINE 70
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
        logo.classList.remove('hidden');     // ADD THIS TO LINE 73
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


document.getElementById('hamburger-btn').onclick = function() {
    document.querySelector('.navbar').classList.toggle('open');
};

document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger-btn');
    // If menu is open and click is outside navbar and hamburger
    if (navbar.classList.contains('open') &&
        !navbar.contains(event.target) &&
        !hamburger.contains(event.target)) {
        navbar.classList.remove('open');
    }
});

document.querySelectorAll('.links').forEach(function(link) {
    link.addEventListener('click', function() {
        document.querySelector('.navbar').classList.remove('open');
    });
});


// Rotating text functionality
document.addEventListener('DOMContentLoaded', () => {
    const textItems = document.querySelectorAll('.text-item');
    let currentIndex = 0;

    function rotateText() {
        // Remove active class from current item
        textItems[currentIndex].classList.remove('active');
        
        // Move to next item (loop back to 0 if at end)
        currentIndex = (currentIndex + 1) % textItems.length;
        
        // Add active class to new item
        textItems[currentIndex].classList.add('active');
    }

    // Delay the start of rotation until after all animations
    setTimeout(() => {
        if (textItems.length > 0) {
            textItems[0].classList.add('active'); // Show first item
            setInterval(rotateText, 3000); // Start rotating every 3 seconds
        }
    }, 4000); // Wait 4 seconds before starting
});


document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    
    // Follow mouse
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover class on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card, .links, [role="button"]');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
});







function updateUKTime() {
    const now = new Date();
    
    // Convert to UK time
    const ukTime = now.toLocaleString('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    
    // Get full UK date (day, month, year)
    const ukDate = now.toLocaleDateString('en-GB', {
        timeZone: 'Europe/London',
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    // Update the element
    const timeElement = document.getElementById('uk-time');
    if (timeElement) {
        timeElement.innerHTML = `London, United Kingdom<br>${ukDate} ${ukTime}`;
    }
}

// Update immediately on page load
document.addEventListener('DOMContentLoaded', updateUKTime);

// Update every second
setInterval(updateUKTime, 1000);



// nav toggle 

let links = document.querySelectorAll('.links');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(item => item.classList.remove('active'))
        link.classList.add('active');
    })
})