import { listings } from '../data/listings.js';
import { loginModal } from '../template/loginModal.js';
import { registerModal } from '../template/registerModal.js';
import { listingModal } from '../template/listingModal.js';
import { galleryModal } from '../template/galleryModal.js';

export function modalRouter(modalValue) {
  const modalLogin = loginModal();
  const modalRegister = registerModal();
  const modalListing = listingModal(listings.data);
  const modalGallery = galleryModal();

  switch (modalValue) {
    case 'login':
      return modalLogin;
    case 'register':
      return modalRegister;
    case 'listing':
      return modalListing;
    case 'gallery':
      return modalGallery;
    default:
      throw console.error('No modal were matched in the router!');
  }
}
