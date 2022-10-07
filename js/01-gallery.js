import { galleryItems } from './gallery-items.js';
// Change code below this line

(() => {
  const gallery = document.querySelector(".gallery");
  let elements = "";
  galleryItems.forEach(({preview,original,description}) => {
    elements += `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
      </a>
      </div>`;
  });
  
  let instance;
  gallery.insertAdjacentHTML('beforeend', elements);
  gallery.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.nodeName === "IMG") {
      openModal(event.target.dataset.source);
    }else if (event.target.nodeName === "A") { //Відкриття модального вікна з клавіатури
      openModal(event.target.href);
    }
  })

  function openModal(url) {
    instance = basicLightbox.create(
      `<img src="${url}">`,
      {
        onClose: () => {
        document.removeEventListener("keydown", modalClose);
      }})
      document.addEventListener('keydown', modalClose);
      instance.show()
  }

  function modalClose(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
})();
