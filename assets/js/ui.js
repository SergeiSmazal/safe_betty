document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  document.body.appendChild(lightbox);

  const images = document.querySelectorAll('.photo-card');
  images.forEach(image => {
    image.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      const img = document.createElement('img');
      img.src = image.src;
      lightbox.innerHTML = '';
      lightbox.appendChild(img);
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
});
