const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let activeSlides = [0, 1];

function updateSlides() {
  slides.forEach((slide, index) => {
    if (activeSlides.includes(index)) {
      slide.setAttribute('data-active', true);
    } else {
      slide.removeAttribute('data-active');
    }
  });
}

nextButton.addEventListener('click', () => {
  activeSlides = activeSlides.map(index => (index + 2) % slides.length);
  updateSlides();
});

prevButton.addEventListener('click', () => {
  activeSlides = activeSlides.map(index => (index - 2 + slides.length) % slides.length);
  updateSlides();
});