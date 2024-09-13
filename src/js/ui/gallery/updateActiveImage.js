import { DEFAULT_IMAGE_ALT, DEFAULT_IMAGE_URL } from '../../template/galleryModal';

/**
 * Updates the active image and UI based on the selected index.
 * @param {HTMLElement} activeImage - The element displaying the active image.
 * @param {HTMLElement} allImages - The container holding all image thumbnails.
 * @param {Array} media - The media array containing image data.
 * @param {number} index - The index of the new active image.
 */
export function updateActiveImage(activeImage, allImages, media, index) {
  const image = media[index];
  activeImage.src = image.url || DEFAULT_IMAGE_URL;
  activeImage.alt = image.alt || DEFAULT_IMAGE_ALT;

  allImages.childNodes.forEach((img) => img.classList.add('blur-sm'));
  allImages.childNodes[index].classList.remove('blur-sm');
}
