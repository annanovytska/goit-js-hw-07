import { galleryItems } from './gallery-items.js';
// Change code below this line

const listItem = document.querySelector('.gallery');

function galleryMarkup(array) {
  return (markup = array
    .map(el => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</li>`;
    })
    .join(''));
}

function renderGallery(array) {
  const markup = galleryMarkup(array);
  listItem.innerHTML = markup;
}
renderGallery(galleryItems);

listItem.addEventListener('click', onListItemClick);

function onListItemClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const originalImg = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${originalImg}"/>`);

  instance.show();
}

////////////////////////////////////////////////////////////////////////

// document.addEventListener('keydown', onDocumentKeyDown);
// function onDocumentKeyDown(event) {
//   if (event.key === 'Escape') {
//     instance.close(()=> {});
//   }
// }
