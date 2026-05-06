const textElement = document.getElementById('changing-text');
const imageElement = document.getElementById('role-image');

const roles = [
    "AI STUDENT",
    "AI INTERN",
    "ARTIST",
    "UI/UX\nDESIGNER",
    "GRAPHIC\nDESIGNER",
    // "FULL STACK\nDEVELOPER",
];

const images = [
    "image/ai-student.jpg",
    "image/ai-intern.jpg",
    "image/artist.jpg",
    "image/uiux.jpg",
    "image/graphicdesigner.jpg",
    // "image/uiux.jpg"
];

let currentIndex = 0;

// Add CSS transitions to elements
textElement.style.transition = 'opacity 0.5s ease-in-out';
imageElement.style.transition = 'opacity 0.5s ease-in-out';

function animateText() {
    // Fade out
    textElement.style.opacity = '0';
    imageElement.style.opacity = '0';
    
    setTimeout(() => {
        // Update content
        textElement.innerHTML = roles[currentIndex].replace(/\n/g, '<br class="line-break">');
        imageElement.src = images[currentIndex];
        
        // Force browser reflow
        void textElement.offsetWidth;
        void imageElement.offsetWidth;
        
        // Fade in
        textElement.style.opacity = '1';
        imageElement.style.opacity = '1';
        
        currentIndex = (currentIndex + 1) % roles.length;
    }, 500);
}

// Initial setup
textElement.innerHTML = roles[0].replace(/\n/g, '<br class="line-break">');
imageElement.src = images[0];
textElement.style.opacity = '1';
imageElement.style.opacity = '1';

// Start animation
setInterval(animateText, 3000);

// Optimize menu toggle
const mobileMenu = document.getElementById('mobileMenu');
const toggleBtn = document.querySelector('[onclick="toggleMenu()"]');

function toggleMenu() {
    requestAnimationFrame(() => {
        mobileMenu.classList.toggle('translate-x-full');
    });
}

// Optimize scroll handling
let ticking = false;
document.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            // Handle scroll events here
            ticking = false;
        });
        ticking = true;
    }
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));