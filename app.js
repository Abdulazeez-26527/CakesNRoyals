const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);


window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) loader.classList.add('hidden');
});


document.querySelectorAll('a').forEach(link => {
  const href = link.getAttribute('href');

  if (href && href.endsWith('.html')) {
    link.addEventListener('click', (e) => {
      const loader = document.getElementById('page-loader');
      if (loader) {
        loader.classList.remove('hidden');
      }
    });
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});