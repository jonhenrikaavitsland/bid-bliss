import { loginModal } from '../template/loginModal';
import { registerModal } from '../template/registerModal';
import { listingModal } from '../template/listingModal';
import { galleryModal } from '../template/galleryModal';
import { profileModal } from '../template/profileModal';
import { newListingModal } from '../template/newListingModal';
import { updateListingsIf } from './updateListingsIf';

/**
 * Routes to the appropriate modal based on the provided modal value.
 *
 * This function determines which modal to render based on the `modalValue` parameter.
 * It may fetch listings if required and logs errors if the provided modal value does not match any known modals.
 *
 * @async
 * @param {string} modalValue The type of modal to render ('login', 'register', 'listing', 'gallery', 'profile', 'newListing').
 * @returns {Promise<HTMLElement|null>} A promise that resolves to the corresponding modal element or `null` if an error occurs.
 * @example
 * ```js
 * // Route to the login modal
 * modalRouter('login').then(modal => {
 *   if (modal) document.body.append(modal);
 * });
 *
 * // Route to the listing modal
 * modalRouter('listing').then(modal => {
 *   if (modal) document.body.append(modal);
 * });
 * ```
 */
export async function modalRouter(modalValue) {
  try {
    const listings = await updateListingsIf(modalValue);
    console.log('Listings in router:', listings);

    switch (modalValue) {
      case 'login':
        return loginModal();
      case 'register':
        return registerModal();
      case 'listing':
        return listingModal(listings);
      case 'gallery':
        return galleryModal();
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
