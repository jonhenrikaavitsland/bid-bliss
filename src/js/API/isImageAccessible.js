/**
 * Checks if an image at the given URL is accessible by making a HEAD request.
 *
 * Verifies the accessibility of the image by sending a HEAD request to the provided URL,
 * checking for a successful response status.
 *
 * @param {string} url The URL of the image to check accessibility.
 * @returns {Promise<boolean>} Returns `true` if the image is accessible, otherwise `false`.
 * @example
 * ```js
 * // Check if an image is accessible
 * const imageUrl = 'https://example.com/image.jpg';
 * isImageAccessible(imageUrl)
 *   .then(isAccessible => {
 *     if (isAccessible) {
 *       console.log('Image is accessible');
 *     } else {
 *       console.log('Image is not accessible');
 *     }
 *   })
 *   .catch(error => console.error('Error checking image:', error));
 * ```
 */
export async function isImageAccessible(url) {
  if (typeof url !== 'string' || !url.trim()) {
    console.error('Invalid URL provided for image accessibility check.');
    return false;
  }

  try {
    const response = await fetch(url, { method: 'HEAD' });

    if (response.ok) {
      return true;
    }

    console.error(`Image not accessible at ${url}: ${response.status} ${response.statusText}`);
    return false;
  } catch (error) {
    console.error(`Error while checking image accessibility at ${url}:`, error);
    return false;
  }
}
