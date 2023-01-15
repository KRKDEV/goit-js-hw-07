import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imageList = document.querySelector(".gallery");

galleryItems.forEach((image) => {
    imageList.insertAdjacentHTML(
        "beforeend",
        `<li class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img src="${image.preview}" alt="${image.description}" class="gallery__image"/>
      </a>
    </li>`
    );
});

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
