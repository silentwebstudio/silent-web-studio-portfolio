/**
 * SILENT WEB STUDIO - Main JavaScript
 * Author: Silent Web Studio Team
 * Version: 1.0.0
 * Features: Scroll Animations, Performance Optimization, Form Handling
 */

"use strict";

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. PRELOADER ---
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 600);
        }
    });

    // --- 2. STICKY NAVIGATION & SCROLL PROGRESS ---
    const navbar = document.getElementById('main-nav');
    const scrollProgress = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        // Scroll Progress Bar
        if (scrollProgress) {
            scrollProgress.style.width = scrollPercentage + "%";
        }

        // Sticky Navbar Class
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to Top Visibility
        if (scrollTop > 500) {
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }
    });

    // Back to Top Click
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- 3. MOBILE MENU LOGIC ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const body = document.body;

    if (menuToggle && menuOverlay) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            body.classList.toggle('no-scroll'); // Prevent background scrolling
        });

        // Close menu on link click
        const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                menuOverlay.classList.remove('active');
                body.classList.remove('no-scroll');
            });
        });
    }

    // --- 4. FADE-UP ANIMATION (Intersection Observer) ---
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const fadeObserverOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, fadeObserverOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    // --- 5. ANIMATED COUNTERS ---
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const startCounter = (el) => {
        const target = +el.getAttribute('data-target');
        const count = +el.innerText;
        const increment = target / speed;

        if (count < target) {
            el.innerText = Math.ceil(count + increment);
            setTimeout(() => startCounter(el), 10);
        } else {
            el.innerText = target;
        }
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 1.0 });

    counters.forEach(counter => counterObserver.observe(counter));

    // --- 6. FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items (optional - remove if multiple can be open)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // --- 7. FORM HANDLING UX ---
    const contactForm = document.getElementById('home-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const btn = this.querySelector('button');
            const originalText = btn.innerText;
            
            // Simple visual feedback before Formspree takes over
            btn.innerText = "Sending...";
            btn.style.opacity = "0.7";
            btn.disabled = true;

            // Formspree handles the actual redirect/submission
            // If we were using AJAX, we would e.preventDefault() here
        });
    }

    // --- 8. SMOOTH SCROLL FOR ANCHORS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

});

// --- 9. LOGO ANIMATION (SVG Stroke) ---
// This function can be called to re-trigger the logo draw effect if needed
const animateLogo = () => {
    const paths = document.querySelectorAll('.logo svg path');
    paths.forEach(path => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
        path.getBoundingClientRect(); // Trigger reflow
        path.style.transition = 'stroke-dashoffset 2s ease-in-out';
        path.style.strokeDashoffset = '0';
    });
};
