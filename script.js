document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Animation using Intersection Observer
    const observerOptions = {
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // 2. Navbar Background Toggle on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile Menu Logic
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // For a world-class feel, add a full-screen overlay menu here
        // Simple toggle for this snippet:
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(10,10,12,0.95)';
        navLinks.style.padding = '2rem';
    });

    // 4. Contact Form Validation & Animation
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Premium Feedback Loop
            const submitBtn = contactForm.querySelector('button');
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API Call
            setTimeout(() => {
                contactForm.style.display = 'none';
                formStatus.innerHTML = `
                    <div class="reveal active" style="text-align: center; padding: 2rem;">
                        <i class="fas fa-check-circle" style="font-size: 3rem; color: #10b981; margin-bottom: 1rem;"></i>
                        <h3>Message Received!</h3>
                        <p>We'll get back to you within 24 hours.</p>
                    </div>
                `;
            }, 1500);
        });
    }

    // 5. Smooth Scroll for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
