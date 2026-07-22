// Navbar Logic
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hero Parallax Interaction
const dashboard = document.getElementById('hero-dashboard');

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;
    
    if (dashboard) {
        dashboard.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    }
});

// Simple Reveal On Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

document.querySelectorAll('.hero-content, .hero-visual').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 1s cubic-bezier(0.16, 1, 0.3, 1)";
    observer.observe(el);
});

// Keyframe addition for reveal logic
const style = document.createElement('style');
style.textContent = `
    .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.append(style);
