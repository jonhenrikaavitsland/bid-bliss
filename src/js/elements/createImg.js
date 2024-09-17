import { handleImageError } from '../data/handleImageError';
import { placeholderItemImg } from '../data/images';
import { isValidUrl } from '../data/isValidUrl';

/**
 * Creates an `<img>` element with specified attributes, classes, and error handling.
 *
 * This function generates an image element with the provided source URL and alternative text.
 * It validates the URL and applies a placeholder image if the URL is invalid.
 * The image will load lazily, and additional classes can be applied to the element.
 * If the image is not an SVG, it will check the dimensions upon loading, replacing the image with
 * a placeholder if it is too small. Error handling is also included to manage failed image loads.
 *
 * @param {string} [src=''] - The source URL of the image. If the URL is invalid, a placeholder image is used.
 * @param {string} [alt=''] - The alternative text for the image. Defaults to 'Image description unavailable' if not provided.
 * @param {...string} classes - Additional CSS classes to apply to the image element.
 * @returns {HTMLImageElement} The created image element with lazy loading and error handling.
 *
 * @example
 * // Create an image element with a valid source
 * const img = createImg('https://example.com/image.jpg', 'Example Image', 'class1', 'class2');
 * document.body.appendChild(img);
 *
 * @example
 * // Create an image element with an invalid source, resulting in a placeholder
 * const img = createImg('invalid-url', 'Invalid Image');
 * document.body.appendChild(img); // Displays a placeholder instead of the invalid URL
 */
export function createImg(src = '', alt = '', ...classes) {
  const image = document.createElement('img');

  if (isValidUrl(src)) {
    image.src = src;
  } else {
    image.src = placeholderItemImg;
  }

  image.alt = typeof alt === 'string' ? alt : 'Image description unavailable';

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    image.classList.add(...validClasses);
  }

  image.onerror = () => handleImageError(image);
  image.loading = 'lazy';

  if (!src.endsWith('.svg')) {
    image.onload = () => {
      if (image.naturalWidth < 327 || image.naturalHeight < 327) {
        image.src = placeholderItemImg;

        image.onerror = null;
      }
    };
  }

  return image;
}
