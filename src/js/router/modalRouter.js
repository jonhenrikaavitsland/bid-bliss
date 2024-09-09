import { loginModal } from '../template/loginModal';
import { registerModal } from '../template/registerModal';
import { listingModal } from '../template/listingModal';
import { galleryModal } from '../template/galleryModal';
import { profileModal } from '../template/profileModal';
import { newListingModal } from '../template/newListingModal';
import { updateListingsIf } from './updateListingsIf';

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
