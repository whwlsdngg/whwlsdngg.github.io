document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.pixel-container');

  for (let i = 0; i < 1000000; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    container.appendChild(pixel);
  }
});
