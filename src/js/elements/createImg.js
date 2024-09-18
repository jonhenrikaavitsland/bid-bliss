import { handleImageError } from '../data/handleImageError';
import { placeholderItemImg } from '../data/images';
import { isValidUrl } from '../data/isValidUrl';

/**
 * Creates an image element with specified attributes, including source, alternative text, and optional CSS classes.
 * If the source URL is invalid or the image is too small, a placeholder image is used instead.
 *
 * The function checks the provided image URL and sets the `src` attribute accordingly. It adds error handling to replace
 * the image with a placeholder if loading fails or if the image dimensions are smaller than expected, unless the image
 * is located in specified exempt folders.
 *
 * @function createImg
 * @param {string} [src=''] - The source URL of the image. Defaults to an empty string.
 * @param {string} [alt=''] - The alternative text for the image. Defaults to 'Image description unavailable' if not provided.
 * @param {...string} classes - Additional CSS classes to be added to the image element.
 * @returns {HTMLImageElement} - The created image element.
 * @example
 * // Create an image with a source, alternative text, and some CSS classes
 * const img = createImg('https://example.com/image.jpg', 'Sample Image', 'rounded', 'shadow');
 * document.body.append(img);
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

  image.loading = 'lazy';

  image.onerror = () => handleImageError(image);
  console.log('Image loaded:', image.src, 'Dimensions:', image.naturalWidth, image.naturalHeight);

  image.onload = () => {
    const exemptFolders = ['/src/images', '/assets/'];

    // Normalize the URL to match against the exempt folders
    const normalizedSrc = new URL(image.src, window.location.origin).pathname;

    // Check if the image is exempt based on its path
    const isExempt = exemptFolders.some((folder) => normalizedSrc.startsWith(folder));

    console.log('Normalized Path:', normalizedSrc, 'Is Exempt:', isExempt);

    if (!isExempt && (image.naturalWidth < 327 || image.naturalHeight < 327)) {
      image.src = placeholderItemImg;

      image.onerror = null;
    }
  };

  return image;
}
