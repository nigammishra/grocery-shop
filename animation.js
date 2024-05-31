document.addEventListener("DOMContentLoaded", function () {
    const fadeInLeftElements = document.querySelectorAll('.fade-in-left');
    const fadeZoomElements = document.querySelectorAll('.fade-zoom');
    const slideInRightElements = document.querySelectorAll('.slide-in-right');
    const slideInTopElements = document.querySelectorAll('.slide-in-top');
    const slideInBottomElements = document.querySelectorAll('.slide-in-bottom');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        fadeInLeftElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });

        fadeZoomElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });

        slideInRightElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });

        slideInTopElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });

        slideInBottomElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Initial check on load
});



