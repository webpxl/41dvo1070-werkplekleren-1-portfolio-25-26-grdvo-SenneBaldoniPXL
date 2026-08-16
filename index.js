document.addEventListener('DOMContentLoaded', () => {
    // 1. Ambient Glow Tracker (alleen als het element bestaat)
    const glow = document.getElementById('ambientGlow');
    if (glow && window.innerWidth > 768) {
        window.addEventListener('mousemove', (e) => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    }

    // 2. Mobiel Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.className = 'bi bi-x-lg';
                } else {
                    icon.className = 'bi bi-grid';
                }
            }
        });

        const navLinks = document.querySelectorAll('.nav-link, .btn-nav');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) icon.className = 'bi bi-grid';
            });
        });
    }

    // 3. Talen progress balkjes vullen
    const targetWidths = ['100%', '85%', '45%', '25%'];
    const meters = document.querySelectorAll('.meter-fill');
    meters.forEach((meter, index) => {
        meter.style.width = targetWidths[index] || '100%';
    });

    // 4. Reveal animaties activeren (zonder dat content ooit onzichtbaar kan blijven hangen)
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade');

    if (revealElements.length > 0) {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        obs.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.05,
                rootMargin: '0px 0px 50px 0px'
            });

            revealElements.forEach(el => observer.observe(el));
        } else {
            revealElements.forEach(el => el.classList.add('reveal-active'));
        }
    }
});