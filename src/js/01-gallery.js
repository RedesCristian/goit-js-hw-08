// Add imports above this line
// Descris în documentație
import SimpleLightbox from 'simplelightbox';
// Import suplimentar de stil
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const list = document.querySelector('.gallery');

function createImagesGallery() {
  for (const image of galleryItems) {
    const listElement = document.createElement('li');
    listElement.classList.add('gallery__item');
    list.style.listStyle = 'none';
    const a = document.createElement('a');
    a.classList.add('gallery__link');
    a.setAttribute('href', image.original);
    const img = document.createElement('img');

    img.classList.add('gallery__image');
    img.setAttribute('src', image.preview);
    img.setAttribute('alt', image.description);

    list.append(listElement);
    listElement.append(a);
    a.append(img);

    a.addEventListener('click', x);
    function x(event) {
      event.preventDefault();
      img.src = image.original;
    }
  }
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsDelay: 250,
    captionsData: 'alt',
  });
}
createImagesGallery();
