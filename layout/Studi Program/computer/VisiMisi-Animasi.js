// VisiMisi-Animasi.js - Versi Clean
function toggleProgressive(element) {
    // Cari elemen progressive-body dan progress-fill di dalam card yang diklik
    const progressiveBody = element.querySelector('.progressive-body');
    const progressFill = element.querySelector('.progress-fill');
    
    // Toggle class active pada card utama
    element.classList.toggle('active');
    
    // Toggle class active pada body untuk animasi expand/collapse
    if (progressiveBody) {
        progressiveBody.classList.toggle('active');
    }
    
    // Animasi progress indicator
    if (progressFill) {
        if (element.classList.contains('active')) {
            progressFill.style.width = '100%';
        } else {
            progressFill.style.width = '0%';
        }
    }
    
    // Smooth scroll ke elemen saat dibuka
    if (element.classList.contains('active')) {
        setTimeout(() => {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest',
                inline: 'nearest'
            });
        }, 200);
    }
}

// Initialize saat DOM loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state untuk semua progress indicators
    const allProgressFills = document.querySelectorAll('.visi-misi-komputer .progress-fill');
    allProgressFills.forEach(fill => {
        fill.style.width = '0%';
        fill.style.transition = 'width 0.5s ease';
    });
    
    // Optional: Auto-expand pertama kali load (hapus komentar jika diinginkan)
    /*
    const firstCard = document.querySelector('.visi-misi-komputer .progressive-card');
    if (firstCard) {
        setTimeout(() => {
            toggleProgressive(firstCard);
        }, 500);
    }
    */
});