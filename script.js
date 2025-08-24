// Simple Lightbox functionality for the gallery
// When a gallery image is clicked the lightbox is shown
// with the full‑sized image; clicking anywhere on the
// lightbox will dismiss it.

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const galleryImages = document.querySelectorAll('.gallery-grid img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || '';
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  });
});