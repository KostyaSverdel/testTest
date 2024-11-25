// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const markupImages = createMarkupImages(galleryItems);

gallery.insertAdjacentHTML("beforeend", markupImages);

function createMarkupImages(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                    src="${preview}"
                    alt="${description}">
                </img>
            </a>
        </li>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
