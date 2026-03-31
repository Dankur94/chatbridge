// Scroll-based fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll(
        '.stat, .arch-step, .case-card, .cost-item, .start-step, .platform, ' +
        '.solution-card, .phase-card, .profile-item, .contact-card, ' +
        '.scenario-card, .process-step'
    );
    targets.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    targets.forEach(el => observer.observe(el));

    // Nav background on scroll
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        nav.style.background = window.scrollY > 50
            ? 'rgba(0,0,0,0.95)'
            : 'rgba(0,0,0,0.8)';
    });

    // Mobile nav toggle
    const toggle = document.getElementById('navToggle');
    const links = document.querySelector('.nav-links');
    if (toggle) {
        toggle.addEventListener('click', () => {
            links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
            links.style.flexDirection = 'column';
            links.style.position = 'absolute';
            links.style.top = '100%';
            links.style.left = '0';
            links.style.right = '0';
            links.style.background = 'rgba(0,0,0,0.95)';
            links.style.padding = '1.5rem';
            links.style.gap = '1.5rem';
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
            if (links) links.style.display = '';
        });
    });

    // Language toggle
    function setLanguage(lang) {
        document.querySelectorAll('[data-en][data-de]').forEach(el => {
            el.innerHTML = el.getAttribute('data-' + lang);
        });
        document.querySelectorAll('.lang-toggle button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        const titleEn = document.documentElement.getAttribute('data-title-en');
        const titleDe = document.documentElement.getAttribute('data-title-de');
        if (titleEn && titleDe) {
            document.title = lang === 'en' ? titleEn : titleDe;
        }
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);
    }

    const defaultLang = document.documentElement.lang === 'de' ? 'de' : 'en';
    const savedLang = localStorage.getItem('lang') || defaultLang;
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === savedLang);
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
    if (savedLang !== defaultLang) {
        setLanguage(savedLang);
    }
});
