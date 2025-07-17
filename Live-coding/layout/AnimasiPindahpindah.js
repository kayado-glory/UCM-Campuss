
  window.addEventListener('scroll', () => {
    const gambar = document.querySelector('.img-orgUCM');
    const teks = document.querySelector('.text-kanan');

    const layarTinggi = window.innerHeight;
    const posisiGambar = gambar.getBoundingClientRect().top;
    const posisiTeks = teks.getBoundingClientRect().top;

    if (posisiGambar < layarTinggi) {
      gambar.classList.add('visible');
    } else{
      gambar.classList.remove('visible');
    }

    if (posisiTeks < layarTinggi) {
      teks.classList.add('visible');
    }else{
       teks.classList.remove('visible');
    }
  });

