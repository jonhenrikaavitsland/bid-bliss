import { placeholderItemImg } from './images';

/**
 * Handles errors when an image fails to load by replacing the image source with a placeholder image.
 *
 * This function is used as an error handler for images that fail to load. When an image loading error occurs,
 * it sets the image's source to a default placeholder image. Additionally, it removes the error handler to prevent
 * an infinite loop in case the placeholder image also fails to load.
 *
 * @param {HTMLImageElement} img - The image element that encountered a loading error.
 *
 * @example
 * // Set an error handler on an image element
 * const img = document.createElement('img');
 * img.onerror = () => handleImageError(img);
 * img.src = 'invalid-url.jpg'; // If this fails, the placeholder image will be loaded instead.
 */
export function handleImageError(img) {
  img.src = placeholderItemImg;
  img.onerror = null;
}
