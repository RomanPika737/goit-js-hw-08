import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

 function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
          <a class="gallery__item" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </div>
      `
    )
    .join('');
};

 let lightbox = new SimpleLightbox('.gallery .gallery__item', {
    overlayOpacity: 0.5,
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    animationSpeed: 350,
    fadeSpeed: 350,
    enableKeyboard: true,
});

console.log(galleryItems);

