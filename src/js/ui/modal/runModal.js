import { linkListener } from '../../listeners/linkListener.js';
import { setupUploadAvatarListener } from '../../listeners/setupUploadAvatarListener.js';
import { modalRouter } from '../../router/modalRouter.js';
import { gatherUserData } from '../login Form/gatherUserData.js';
import { openGallery } from './openGallery.js';
import { openModal } from './openModal.js';

/**
 * Displays a specified modal based on the given state and modal type.
 *
 * This function handles the display of various modals based on the provided `modalValue`. Depending on the `state`,
 * it either opens the modal using `openModal` or `openGallery` for gallery-type modals. It also sets up event listeners
 * and data gathering for specific modals, such as login, register, and profile modals.
 *
 * @async
 * @param {boolean} state - Determines whether to open the modal (`true`) or not (`false`).
 * @param {string} modalValue - The type of modal to display (e.g., 'login', 'register', 'listing', 'gallery', 'profile', 'newListing').
 * @param {string} [listingId] - Optional listing ID used when fetching specific listing details for the listing modal.
 * @param {Object} [media={}] - Optional media object, used for the gallery modal to display images.
 *
 * @example
 * // Open the gallery modal with media
 * await runModal(true, 'gallery', null, { images: [...] });
 *
 * @example
 * // Open the listing modal with a specific listing ID
 * await runModal(true, 'listing', '12345-listing-id');
 *
 * @example
 * // Open the login modal
 * await runModal(true, 'login');
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
