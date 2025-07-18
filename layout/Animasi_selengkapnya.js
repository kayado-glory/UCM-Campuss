function expandContent(contentId) {
    // Cari elemen berdasarkan contentId
    const contentElement = document.querySelector(`[data-content-id="${contentId}"]`);
    
    if (!contentElement) {
        console.error(`Element dengan content-id ${contentId} tidak ditemukan`);
        return;
    }
    
    // Untuk berita utama
    const preview = contentElement.querySelector('.content-preview');
    const full = contentElement.querySelector('.content-full');
    
    // Untuk sub berita 1
    const preview1 = contentElement.querySelector('.content-preview-1');
    const full1 = contentElement.querySelector('.content-full-1');
    
    // Untuk sub berita ke 2 (DIPERBAIKI: hilangkan titik di awal)
    const preview2 = contentElement.querySelector('.content-preview-2');
    const full2 = contentElement.querySelector('.content-full-2');

    // Tentukan elemen mana yang akan digunakan
    const previewElement = preview || preview1 || preview2;
    const fullElement = full || full1 || full2;
    
    if (!previewElement || !fullElement) {
        console.error('Element preview atau full tidak ditemukan');
        return;
    }
    
    // Add expanding animation class
    contentElement.classList.add('expanding');
    
    previewElement.style.display = 'none';
    fullElement.style.display = 'block';
    
    // Remove animation class after animation completes
    setTimeout(() => {
        contentElement.classList.remove('expanding');
    }, 300);
}

function collapseContent(contentId) {
    // Cari elemen berdasarkan contentId
    const contentElement = document.querySelector(`[data-content-id="${contentId}"]`);
    
    if (!contentElement) {
        console.error(`Element dengan content-id ${contentId} tidak ditemukan`);
        return;
    }
    
    // Untuk berita utama
    const preview = contentElement.querySelector('.content-preview');
    const full = contentElement.querySelector('.content-full');
    
    // Untuk sub berita 1
    const preview1 = contentElement.querySelector('.content-preview-1');
    const full1 = contentElement.querySelector('.content-full-1');
    
    // Untuk sub berita ke 2 (DIPERBAIKI: hilangkan titik di awal)
    const preview2 = contentElement.querySelector('.content-preview-2');
    const full2 = contentElement.querySelector('.content-full-2');

    // Tentukan elemen mana yang akan digunakan
    const previewElement = preview || preview1 || preview2;
    const fullElement = full || full1 || full2;
    
    if (!previewElement || !fullElement) {
        console.error('Element preview atau full tidak ditemukan');
        return;
    }
    
    // Add collapsing animation class
    contentElement.classList.add('collapsing');
    
    fullElement.style.display = 'none';
    previewElement.style.display = 'block';
    
    // Remove animation class after animation completes
    setTimeout(() => {
        contentElement.classList.remove('collapsing');
    }, 300);
}

// Smooth scroll untuk pengalaman yang lebih baik
document.addEventListener('DOMContentLoaded', function() {
    // DIPERBAIKI: Tambahkan .btn-selengkapnya-2 dan .btn-2-tutup
    document.querySelectorAll('.btn-selengkapnya, .btn-selengkapnya-1, .btn-selengkapnya-2, .btn-tutup, .btn-1-tutup, .btn-2-tutup').forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(() => {
                const artikel = this.closest('.berita-utama') || this.closest('.artikel-sub');
                if (artikel) {
                    artikel.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }
            }, 100);
        });
    });
});