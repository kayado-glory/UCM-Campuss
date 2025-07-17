const sliderContent = document.querySelector('.slider-content');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  sliderContent.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Misal pakai tombol next/prev
document.getElementById('nextBtn').addEventListener('click', () => {
  showSlide(currentIndex + 1);
});
document.getElementById('prevBtn').addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

// Tampilkan slide awal
showSlide(0);
