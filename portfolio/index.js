document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');

    menuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');

        // Optioneel: verander het icoontje naar een 'X' bij openen
        const icon = menuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('bi-list', 'bi-x-lg');
        } else {
            icon.classList.replace('bi-x-lg', 'bi-list');
        }
    });

    // Sluit het menu automatisch als je op een link klikt
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuBtn.querySelector('i').classList.replace('bi-x-lg', 'bi-list');
        });
    });
});