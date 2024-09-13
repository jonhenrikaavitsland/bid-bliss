import { placeholderItemImg } from '../data/images';
import { isValidUrl } from '../data/isValidUrl';

/**
 * Creates an `<img>` element with a specified source, alt text, and CSS classes.
 *
 * Validates the provided image source URL; if invalid, sets a placeholder image.
 * Adds optional alt text and CSS classes to the image element.
 *
 * @param {string} [src=''] The source URL of the image. If invalid, a placeholder image is used.
 * @param {string} [alt=''] The alt text for the image. Defaults to 'Image description unavailable' if not a string.
 * @param {...string} classes Optional CSS classes to add to the image element.
 * @returns {HTMLImageElement} The created image element with the specified source, alt text, and classes.
 * @example
 * ```js
 * // Create an image with a valid source, alt text, and classes
 * const image = createImg('https://example.com/image.jpg', 'Example Image', 'responsive', 'thumbnail');
 * document.body.appendChild(image);
 *
 * // Create an image with an invalid source, triggering a placeholder image
 * const placeholderImage = createImg('invalid-url', 'Broken Image');
 * document.body.appendChild(placeholderImage);
 * ```
 */
export function createImg(src = '', alt = '', ...classes) {
  const image = document.createElement('img');

  if (isValidUrl(src)) {
    image.src = src;
  } else {
    console.error(`Invalid image source URL: ${src}`);
    image.src = placeholderItemImg;
  }

  image.alt = typeof alt === 'string' ? alt : 'Image description unavailable';

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    image.classList.add(...validClasses);
  }

  return image;
}
