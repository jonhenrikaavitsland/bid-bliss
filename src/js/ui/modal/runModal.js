import { linkListener } from '../../listeners/linkListener.js';
import { setupUploadAvatarListener } from '../../listeners/setupUploadAvatarListener.js';
import { modalRouter } from '../../router/modalRouter.js';
import { gatherUserData } from '../login Form/gatherUserData.js';
import { openGallery } from './openGallery.js';
import { openModal } from './openModal.js';

/**
 * Controls the display of modals based on the provided state and modal type.
 *
 * This function manages the opening of different types of modals such as gallery, register, login, and profile
 * based on the provided `modalValue`. It also sets up necessary listeners or gathers data for specific modal types.
 * For gallery modals, it opens the gallery view, while other modals are opened normally with their respective
 * functionality set up.
 *
 * @async
 * @param {boolean} state - The state to determine whether the modal should be opened (`true`) or not.
 * @param {string} modalValue - The type of modal to display (e.g., 'gallery', 'register', 'login', 'profile').
 * @param {string} [listingId] - Optional listing ID, used when fetching specific listing details for certain modals.
 *
 * @example
 * // Run a profile modal with setup for avatar upload listener
 * runModal(true, 'profile');
 *
 * @example
 * // Run a gallery modal for viewing images
 * runModal(true, 'gallery');
 */
export async function runModal(state = 'false', modalValue, listingId, media = {}) {
  const currentModal = await modalRouter(modalValue, listingId, media);

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
