document.addEventListener("DOMContentLoaded", function () {
  const gambar = document.querySelector('.img-judul-besar');
  const balok = document.querySelector('.balok-gradient');
  const tulisan = document.querySelector('.judul-tulisan');
  let sudahMuncul = false;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !sudahMuncul) {
        gambar.classList.add('muncul');
        balok.classList.add('muncul');
        tulisan.classList.add('muncul');
        sudahMuncul = true; // supaya animasi cuma muncul 1x
      }
    });
  }, {threshold: 0.1}); // 10% dari elemen harus terlihat

  observer.observe(gambar);
});
