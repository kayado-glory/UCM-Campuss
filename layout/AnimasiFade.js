// JavaScript untuk efek scroll masuk & keluar
const fadeElements = document.querySelectorAll('.konten-utama-1');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.3 // seberapa banyak bagian harus terlihat sebelum muncul
});

fadeElements.forEach(el => observer.observe(el));
