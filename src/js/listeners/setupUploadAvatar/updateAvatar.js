import { updateProfile } from '../../API/updateProfile';
import { updateImageElements } from './updateImageElements';
import { updateInputStyles } from './updateInputStyles';

/**
 * Updates the user's avatar by updating the profile with the new image URL and refreshing relevant elements.
 *
 * This function attempts to update the user's profile with the provided image URL. If the update is successful,
 * it updates the image elements on the page and resets the input field. It also updates the input styles to reflect
 * a successful operation. Logs an error if updating the profile fails or if an error occurs during the process.
 *
 * @async
 * @param {string} url The URL of the new avatar image.
 * @returns {Promise<void>} No return value; performs actions based on the outcome of the profile update.
 * @example
 * ```js
 * // Update the avatar with a new image URL
 * const newAvatarUrl = 'https://example.com/avatar.jpg';
 * updateAvatar(newAvatarUrl)
 *   .then(() => console.log('Avatar updated successfully'))
 *   .catch(error => console.error('Error updating avatar:', error));
 * ```
 */
export async function updateAvatar(url) {
  try {
    const updatedProfile = await updateProfile(url);

    if (!updatedProfile) {
      console.error('Failed to update profile');
      return;
    }

    updateImageElements(url, updatedProfile.name);

    const uploadInput = document.querySelector('[data-upload="input"]');
    if (uploadInput) {
      uploadInput.value = '';
    } else {
      console.error('Upload input element not found');
    }

    updateInputStyles(true);
  } catch (error) {
    console.error('Error updating avatar:', error);
  }
}
