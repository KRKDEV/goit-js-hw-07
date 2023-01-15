import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageList = document.querySelector(".gallery");

galleryItems.forEach((image) => {
    imageList.insertAdjacentHTML(
        "beforeend",
        `<div class="gallery__item">
      <a class=gallery__link href="${image.original}">
        <img src="${image.preview}" alt="${image.description}" class="gallery__image" data-source="${image.original}"/>
      </a>
    </div>`
    );
});

function imageModal(event) {
    console.log(event.target);
    if (event.target.nodeName !== "IMG") {
        return;
    }
    event.preventDefault();
    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
      `);

    instance.show();

    document.addEventListener("keydown", function escapeKey(event) {
        if (event.key === "Escape") {
            instance.close();
            document.removeEventListener("keydown", escapeKey);
            console.log("esc");
        }
    });
}

imageList.addEventListener("click", imageModal);
