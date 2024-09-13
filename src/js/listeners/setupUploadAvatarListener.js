import { handleInputChange } from './setupUploadAvatar/handleInputChange';
import { handleUploadClick } from './setupUploadAvatar/handleUploadClick';

/**
 * Sets up event listeners for the upload button and input elements for uploading an avatar.
 *
 * Adds click and input event listeners to the upload button and input elements, respectively,
 * to handle avatar upload functionality. Existing event listeners are removed before adding new ones to prevent duplicates.
 * Logs an error if either the button or input element is not found in the DOM.
 *
 * @returns {void} No return value; sets up event listeners for upload actions.
 * @example
 * ```js
 * // Initialize upload avatar listeners
 * setupUploadAvatarListener();
 * ```
 */
export function setupUploadAvatarListener() {
  const uploadButton = document.querySelector('[data-upload="btn"]');
  const uploadInput = document.querySelector('[data-upload="input"]');

  if (uploadButton) {
    uploadButton.removeEventListener('click', handleUploadClick); // Remove existing listener
    uploadButton.addEventListener('click', handleUploadClick); // Add new listener
  } else {
    console.error('Upload button not found');
  }

  if (uploadInput) {
    uploadInput.removeEventListener('input', handleInputChange); // Remove existing listener
    uploadInput.addEventListener('input', handleInputChange); // Add new listener
  } else {
    console.error('Upload input not found');
  }
}
