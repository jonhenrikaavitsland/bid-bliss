import { linkListener } from '../../listeners/linkListener.js';
import { setupUploadAvatarListener } from '../../listeners/setupUploadAvatarListener.js';
import { modalRouter } from '../../router/modalRouter.js';
import { gatherUserData } from '../login Form/gatherUserData.js';
import { openGallery } from './openGallery.js';
import { openModal } from './openModal.js';

/**
 * Runs the modal functionality based on the provided state and modal type, routing to the appropriate content.
 *
 * This function determines which modal to display based on the `modalValue` parameter, opening either a gallery or a standard modal.
 * It sets up specific listeners and actions based on the modal type, such as link listeners for login/register or upload listeners for profile.
 *
 * @async
 * @param {boolean} [state=false] The state indicating whether the modal should be opened (`true`) or not.
 * @param {string} modalValue The type of modal to be displayed (e.g., 'gallery', 'register', 'login', 'profile').
 * @returns {Promise<void>} No return value; modifies the DOM to display the appropriate modal and sets up event listeners.
 * @example
 * ```js
 * // Run the modal with the login form
 * runModal(true, 'login');
 * ```
 */
export async function runModal(state = 'false', modalValue) {
  const currentModal = await modalRouter(modalValue);
  console.log(currentModal);

  if (state === true && modalValue === 'gallery') {
    openGallery(currentModal);
    return;
  }

  if (state === true) {
    openModal(currentModal);

    if (modalValue === 'register' || modalValue === 'login') {
      linkListener(modalValue);

      gatherUserData();
    }
    if (modalValue === 'profile') {
      setupUploadAvatarListener();
    }
  }
}
