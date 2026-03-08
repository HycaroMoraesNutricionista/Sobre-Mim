document.addEventListener('DOMContentLoaded', () => {
    
    /* --- Menu Mobile --- */
    const mobileBtn = document.getElementById('mobile-menu');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-link, .btn-nav');

    function toggleMenu() {
        navContainer.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        
        if (navContainer.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    mobileBtn.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navContainer.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    /* --- Sticky Header --- */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --- Animações ScrollReveal --- */
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 800,
        delay: 100,
        easing: 'ease-in-out',
        reset: false
    });

    sr.reveal('.reveal-up');
    sr.reveal('.reveal-left', { origin: 'left' });
    sr.reveal('.reveal-right', { origin: 'right' });
});
