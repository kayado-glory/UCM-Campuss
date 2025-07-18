
  const target = document.querySelector('.gambar-gedung');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        target.classList.add('active');
      } 
    });
  }, {
    threshold: 0.3 // muncul saat 30% elemen terlihat
  });

  observer.observe(target);

