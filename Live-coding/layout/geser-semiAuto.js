
  const slideBox = document.getElementById("slide-box");
  const totalSlides = slideBox.children.length;
  let index = 0;

  function moveSlide(direction) {
    index += direction;
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    slideBox.style.transform = `translateX(-${index * 100}%)`;
  }

  //  Geser otomatis tiap 5 detik
  setInterval(() => {
    moveSlide(1);
  }, 5000);

