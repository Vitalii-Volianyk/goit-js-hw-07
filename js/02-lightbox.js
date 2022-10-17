import { galleryItems } from './gallery-items.js';
// Change code below this line

(() => {
  const gallery = document.querySelector(".gallery");
  let elements = "";
  galleryItems.forEach(({preview,original,description}) => {
    elements += `
	<a class="gallery__item" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}" />
	</a>`;
  });

  gallery.insertAdjacentHTML('beforeend', elements);
  var lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});
})();

