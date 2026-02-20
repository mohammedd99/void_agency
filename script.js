document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    // 1. Text Reveal (Blur-to-Sharp) Logic
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));

    // 3. Mobile Menu Toggle
    const burgerToggle = document.getElementById('burger-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    burgerToggle.addEventListener('click', () => {
        burgerToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // 4. Video Source Obfuscation
    const videoElement = document.getElementById('bg-video');

    // Obfuscated URL components
    const _0x1 = 'https://d8j0ntlcm91z4.cloudfront.net/';
    const _0x2 = 'user_38xzZboKViGWJOttwIXH07lWA1P/';
    const _0x3 = 'hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4';
    const rawUrl = _0x1 + _0x2 + _0x3;

    async function loadEncodedVideo() {
        try {
            const response = await fetch(rawUrl);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            videoElement.src = blobUrl;
            videoElement.load();
        } catch (error) {
            console.error('Video loading failed');
            // Fallback to direct URL if blob fails (optional security trade-off)
            videoElement.src = rawUrl;
        }
    }

    loadEncodedVideo();

    // 5. Basic DevTools Protection
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    document.addEventListener('keydown', (e) => {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.ctrlKey && e.key === 'U')
        ) {
            e.preventDefault();
        }
    });

    console.log('VOID Agency Customizations Applied');
});
