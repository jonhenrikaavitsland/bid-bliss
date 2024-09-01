import { listings } from '../data/listings.js';
import { loginModal } from '../template/loginModal.js';
import { registerModal } from '../template/registerModal.js';
import { listingModal } from '../template/listingModal.js';
import { galleryModal } from '../template/galleryModal.js';
import { profileModal } from '../template/profileModal.js';

let modalLogin;
let modalRegister;
let modalListing;
let modalGallery;
let modalProfile;

export function modalRouter(modalValue) {
  switch (modalValue) {
    case 'login':
      modalLogin = loginModal();
      return modalLogin;
    case 'register':
      modalRegister = registerModal();
      return modalRegister;
    case 'listing':
      modalListing = listingModal(listings.data);
      return modalListing;
    case 'gallery':
      modalGallery = galleryModal();
      return modalGallery;
    case 'profile':
      modalProfile = profileModal();
      return modalProfile;
    default:
      throw console.error('No modal were matched in the router!');
  }
}
