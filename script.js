document.addEventListener('DOMContentLoaded', () => {
    
    // Elementos a animar
    const elementsToAnimate = document.querySelectorAll('.section-title, .skill-card, .project-card, .about-text, .about-img');

    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });
});