import { galleryItems } from './gallery-items.js';
// Change code below this line

const listItem = document.querySelector('.gallery');

function galleryMarkup(array) {
  return array
    .map(el => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${el.original}">
      <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
   </a>
</li>`;
    })
    .join('');
}

function renderGallery(array) {
  const markup = galleryMarkup(array);
  listItem.innerHTML = markup;
}
renderGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
