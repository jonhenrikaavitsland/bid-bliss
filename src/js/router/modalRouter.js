import { loginModal } from '../template/loginModal';
import { registerModal } from '../template/registerModal';
import { listingModal } from '../template/listingModal';
import { galleryModal } from '../template/galleryModal';
import { profileModal } from '../template/profileModal';
import { newListingModal } from '../template/newListingModal';

/**
 * Routes to the appropriate modal based on the provided modal value.
 *
 * This function determines which modal component to render based on the `modalValue` provided. It handles different
 * modal types such as login, register, listing, gallery, profile, and new listing. For the listing modal, it also
 * accepts a `listingId` to fetch specific listing details.
 *
 * @async
 * @param {string} modalValue - The type of modal to display (e.g., 'login', 'register', 'listing', 'gallery', 'profile', 'newListing').
 * @param {string} [listingId] - Optional listing ID, used when fetching specific listing details for the listing modal.
 * @returns {Promise<HTMLElement|null>} The modal element to be displayed, or `null` if an error occurs.
 *
 * @example
 * // Fetch and display the login modal
 * const loginElement = await modalRouter('login');
 *
 * @example
 * // Fetch and display a specific listing modal
 * const listingElement = await modalRouter('listing', '12345-listing-id');
 */
export async function modalRouter(modalValue, listingId, media = {}) {
  try {
    switch (modalValue) {
      case 'login':
        return loginModal();
      case 'register':
        return registerModal();
      case 'listing':
        return listingModal(listingId);
      case 'gallery':
        return galleryModal(media);
      case 'profile':
        return profileModal();
      case 'newListing':
        return newListingModal();
      default:
        throw new Error(`No modal matched for the value: ${modalValue}`);
    }
  } catch (error) {
    console.error('Error in modalRouter: ', error);
    return null;
  }
}
