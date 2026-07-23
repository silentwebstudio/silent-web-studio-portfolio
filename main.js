"use strict";

/* ==========================================
   SILENT WEB STUDIO
   Premium JavaScript
   Version: 1.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Silent Web Studio Loaded Successfully 🚀");
   
    /* ==========================================
   ELEMENT SELECTORS
========================================== */

const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav__link");
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav--mobile");
const themeToggle = document.querySelector(".theme-toggle");
const preloader = document.querySelector(".preloader");
const progressBar = document.querySelector(".scroll-progress__bar");
const faqItems = document.querySelectorAll(".faq__item");
const contactForm = document.querySelector(".contact__form");
const newsletterForm = document.querySelector(".newsletter__form");
const scrollTopBtn = document.querySelector(".floating-btn--top");

    /* ==========================================
   STICKY HEADER + SCROLL PROGRESS
========================================== */

window.addEventListener("scroll", () => {

    // Header Effect
    if (header && window.scrollY > 50) {
        header.style.background = "rgba(2,6,23,0.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
    } else if (header) {
        header.style.background = "rgba(2,6,23,.75)";
        header.style.boxShadow = "none";
    }

    // Scroll Progress
    if (progressBar) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;

        progressBar.style.width = `${progress}%`;
    }

    });

    /* ==========================================
   MOBILE MENU
========================================== */

if (hamburger && mobileNav) {

    hamburger.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

}

/* ==========================================
   SMOOTH SCROLL
========================================== */

navLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        const targetId = link.getAttribute("href");

        if (targetId && targetId.startsWith("#")) {

            e.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }

    });

});

    /* ==========================================
   THEME TOGGLE
========================================== */

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        const isLight = document.body.classList.contains("light-theme");

        localStorage.setItem("theme", isLight ? "light" : "dark");

    });

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

}

/* ==========================================
   FAQ ACCORDION
========================================== */

faqItems.forEach(item => {

    item.addEventListener("toggle", () => {

        if (item.open) {

            faqItems.forEach(otherItem => {

                if (otherItem !== item) {
                    otherItem.removeAttribute("open");
                }

            });

        }

    });

});

/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");

        let isValid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                isValid = false;
                input.style.borderColor = "#ef4444";

            } else {

                input.style.borderColor = "";

            }

        });


        if (isValid) {

            alert("Message sent successfully 🚀");
            contactForm.reset();

        } else {

            alert("Please fill all required fields.");

        }

    });

}

/* ==========================================
   NEWSLETTER FORM
========================================== */

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const emailInput = newsletterForm.querySelector("input");

        if (emailInput && emailInput.value.trim() !== "") {

            alert("Thanks for subscribing 🚀");
            newsletterForm.reset();

        } else {

            alert("Please enter your email.");

        }

    });

}
/* ==========================================
   BACK TO TOP BUTTON
========================================== */

if (scrollTopBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTopBtn.classList.add("active");

        } else {

            scrollTopBtn.classList.remove("active");

        }

    });


    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
    "section, .services__card, .process__step, .pricing__card, .team__placeholder, .testimonials__placeholder"
);


const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold:0.15
});


revealElements.forEach(element => {

    element.classList.add("hidden");

    revealObserver.observe(element);

});

/* ==========================================
   ACTIVE NAVIGATION ON SCROLL
========================================== */

const allSections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    allSections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load", () => {

    if (preloader) {

        setTimeout(() => {

            preloader.classList.add("hidden");

        }, 800);

    }

});

});
