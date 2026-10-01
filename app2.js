const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);

const categoryButtons = document.querySelectorAll('.category-item');
const menuGroups = document.querySelectorAll('.menu-grid');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.category;

    categoryButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    menuGroups.forEach(group => {
      group.style.display = group.dataset.group === selected ? 'grid' : 'none';
    });
  });
});


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

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}