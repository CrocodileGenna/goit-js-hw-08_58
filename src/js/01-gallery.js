// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
function renderGalery(el) {
  return el
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
              />
          </a>
      </div>
      `;
    })
    .join('');
}

gallery.insertAdjacentHTML('beforeend', renderGalery(galleryItems));

const modal = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 500,
  captions: true,
});
// modal.on("error.simplelightbox", );
