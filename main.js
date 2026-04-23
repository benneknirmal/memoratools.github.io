// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        navbar.style.padding = '1rem 0';
    }
});

// Simple Reveal Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            if (entry.target.getAttribute('data-aos') === 'fade-up') {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
            if (entry.target.getAttribute('data-aos') === 'zoom-in') {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    if (el.getAttribute('data-aos') === 'fade-up') {
        el.style.transform = 'translateY(40px)';
    }
    if (el.getAttribute('data-aos') === 'zoom-in') {
        el.style.transform = 'scale(0.9)';
    }
    observer.observe(el);
});

// Reveal Text Animation for Hero
document.addEventListener('DOMContentLoaded', () => {
    const revealText = document.querySelector('.reveal-text');
    if (revealText) {
        revealText.style.opacity = '1';
    }
});
