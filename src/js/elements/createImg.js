import { handleImageError } from '../data/handleImageError';
import { placeholderItemImg } from '../data/images';
import { isValidUrl } from '../data/isValidUrl';

/**
 * Creates an HTML `<img>` element with the specified source, alternative text, and optional CSS classes.
 *
 * This function constructs an image element, validates the source URL, and applies lazy loading for performance.
 * If the URL is invalid or the image dimensions are too small, it falls back to a placeholder image.
 * Error handling for failed image loading is also managed by a specified error handler function.
 *
 * @param {string} [src=''] - The source URL of the image.
 * @param {string} [alt=''] - The alternative text for the image, used for accessibility.
 * @param {...string} classes - Additional CSS classes to apply to the image element.
 * @returns {HTMLImageElement} - The constructed `<img>` element with the specified attributes and classes.
 *
 * @example
 * // Create an image with a valid URL, alt text, and custom classes
 * const image = createImg('https://example.com/image.jpg', 'Example image', 'responsive', 'rounded');
 * document.body.append(image);
 *
 * @example
 * // Create an image with an invalid URL, which will fallback to the placeholder
 * const invalidImage = createImg('invalid-url', 'Invalid image');
 * document.body.append(invalidImage);
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

  image.onerror = () => handleImageError(image);
  image.loading = 'lazy';

  image.onload = () => {
    if (image.naturalWidth < 327 || image.naturalHeight < 327) {
      image.src = placeholderItemImg;

      image.onerror = null;
    }
  };

  return image;
}
