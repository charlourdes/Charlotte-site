let projectData = [
    {
        image: 'img/project-1.png',
        name: 'project one',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#javascript, #fullstack, #css'
    },
]

const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project-container');

    projectContainer.innerHTML += `
            <div class="project-card" data-tags="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="img/close.png" class="close-btn" alt="">
                        <img src="${data.image}" class="project-img" alt="">
                        <span class="tags">${data.tags}</span>
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                        <p class="project-detail">${data.detail}</p>
                        <a href="${data.github}" class="btn">github</a>
                        <a href="${data.live}" class="btn">see live</a>
                    </div>
                </div>
            </div>
 `;
}


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