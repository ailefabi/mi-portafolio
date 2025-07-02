const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxDesc = document.getElementById('lightbox-desc');

function abrirLightbox(src, desc) {
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
  lightboxDesc.textContent = desc;
}

function cerrarLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
