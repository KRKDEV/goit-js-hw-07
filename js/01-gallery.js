import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

galleryItems.forEach((image) => {
    list.insertAdjacentHTML(
        "beforeend",
        `<div class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img src="${image.preview}" alt="${image.description}" class="gallery__image" data-source="${image.original}"/>
            </a>
        </div>`
    );
});
