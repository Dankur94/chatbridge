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

    // Story paragraph fade-in with staggered delay
    const storyFades = document.querySelectorAll('.story-fade');
    const storyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                storyObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    storyFades.forEach((el, i) => {
        el.style.transitionDelay = (i * 50) + 'ms';
        storyObserver.observe(el);
    });

    // Journey image reveal
    const journeyPhoto = document.querySelector('.journey-image-col .journey-photo');
    if (journeyPhoto) {
        const imgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    imgObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        imgObserver.observe(journeyPhoto);

        // Subtle parallax on journey image
        const journeyImg = journeyPhoto.querySelector('img');
        if (journeyImg) {
            window.addEventListener('scroll', () => {
                const rect = journeyPhoto.getBoundingClientRect();
                const viewH = window.innerHeight;
                if (rect.top < viewH && rect.bottom > 0) {
                    const progress = (viewH - rect.top) / (viewH + rect.height);
                    const shift = (progress - 0.5) * -30;
                    journeyImg.style.transform = 'translateY(' + shift + 'px)';
                }
            }, { passive: true });
        }
    }

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

    // Language toggle (EN / DE / 中文)
    function setLanguage(lang) {
        document.querySelectorAll('[data-en]').forEach(el => {
            var text = el.getAttribute('data-' + lang);
            if (text === null) text = el.getAttribute('data-en');
            el.innerHTML = text;
        });
        // Block-based language switching (impressum, privacy pages)
        ['en', 'de', 'zh'].forEach(function(l) {
            var block = document.querySelector('[data-' + l + '-block]');
            if (block) block.style.display = (l === lang) ? '' : 'none';
        });
        document.querySelectorAll('.lang-toggle button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        var title = document.documentElement.getAttribute('data-title-' + lang)
            || document.documentElement.getAttribute('data-title-en');
        if (title) document.title = title;
        var langMap = { en: 'en', de: 'de', zh: 'zh-Hans' };
        document.documentElement.lang = langMap[lang] || 'en';
        localStorage.setItem('lang', lang);
    }

    var defaultLang = 'en';
    var savedLang = localStorage.getItem('lang') || defaultLang;
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === savedLang);
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
    setLanguage(savedLang);
});
