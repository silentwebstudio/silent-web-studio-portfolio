/**
 * SILENT WEB STUDIO - CORE INTERACTIONS
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Custom Cursor Follower
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    });

    // 2. Magnetic Buttons Physics
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach((m) => {
        m.addEventListener('mousemove', function(e) {
            const pos = m.getBoundingClientRect();
            const x = e.clientX - pos.left - pos.width / 2;
            const y = e.clientY - pos.top - pos.height / 2;
            
            m.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            m.children[0].style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        m.addEventListener('mouseleave', function() {
            m.style.transform = `translate(0px, 0px)`;
            m.children[0].style.transform = `translate(0px, 0px)`;
        });
    });

    // 3. Smart Navbar (Hide on Scroll Down)
    let lastScroll = 0;
    const nav = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        if (currentScroll > lastScroll && currentScroll > 500) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
    });

    // 4. Reveal Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

    // 5. Parallax Hero Visual
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const visual = document.querySelector('.bento-visual');
        if (visual) {
            visual.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    });

    // 6. Project Hover Logic (Cursor expanding)
    const workCards = document.querySelectorAll('.work-card');
    workCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cursor.style.width = '80px';
            cursor.style.height = '80px';
            cursor.innerHTML = '<span style="font-size: 10px; font-weight: 800; color: black;">VIEW</span>';
            cursor.style.display = 'flex';
            cursor.style.alignItems = 'center';
            cursor.style.justifyContent = 'center';
        });
        card.addEventListener('mouseleave', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.innerHTML = '';
        });
    });
});
