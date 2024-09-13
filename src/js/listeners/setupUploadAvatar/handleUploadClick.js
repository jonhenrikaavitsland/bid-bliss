import { isValidUrl } from '../../data/isValidUrl';
import { isImageAccessible } from '../../API/isImageAccessible';
import { handleInvalidUrl } from './handleInvalidUrl';
import { updateAvatar } from './updateAvatar';

/**
 * Handles the click event for the upload button, validating the URL and updating the avatar if valid.
 *
 * This function prevents the default button behavior, validates the image URL from the input field,
 * checks if the image is accessible, and updates the avatar. If the URL is invalid or the image is inaccessible,
 * it handles the error by updating input styles and showing an alert message. Logs errors if encountered during the process.
 *
 * @async
 * @param {Event} event The event object from the click event.
 * @returns {Promise<void>} No return value; performs actions based on URL validity.
 * @example
 * ```js
 * // Set up a click event listener for the upload button
 * const uploadButton = document.querySelector('[data-upload="btn"]');
 * uploadButton.addEventListener('click', handleUploadClick);
 * ```
 */
export async function handleUploadClick(event) {
  event.preventDefault();

  const uploadInput = document.querySelector('[data-upload="input"]');

  if (!uploadInput) {
    console.error('Upload input element not found');
    return;
  }

  const url = uploadInput.value.trim();

  try {
    if (!isValidUrl(url) || !(await isImageAccessible(url))) {
      handleInvalidUrl();
      return;
    }

    await updateAvatar(url);
  } catch (error) {
    console.error('Error handling upload click:', error);
    handleInvalidUrl();
  }
}
