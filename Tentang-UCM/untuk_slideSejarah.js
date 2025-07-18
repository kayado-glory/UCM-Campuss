// Pastikan DOM sudah siap sebelum menjalankan observer
document.addEventListener('DOMContentLoaded', function() {
    
    // Observer untuk timeline items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe semua timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(el => {
        observer.observe(el);
    });

    // Observer untuk hero section
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.3 // Tingkatkan threshold untuk hero section
    });

    // Observe hero section
    const heroElement = document.querySelector('.gambar-gedung');
    if (heroElement) {
        heroObserver.observe(heroElement);
    }

    // Debug: Log untuk memastikan elemen ditemukan
    console.log('Timeline items found:', timelineItems.length);
    console.log('Hero element found:', heroElement ? 'Yes' : 'No');
});