const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;

    filterButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    galleryItems.forEach(item => {
      if (selected === 'all' || item.dataset.category === selected) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});