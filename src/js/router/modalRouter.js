import { listings } from '../data/listings';
import { loginModal } from '../template/loginModal';
import { registerModal } from '../template/registerModal';
import { listingModal } from '../template/listingModal';
import { galleryModal } from '../template/galleryModal';
import { profileModal } from '../template/profileModal';
import { newListingModal } from '../template/newListingModal';

let modalLogin;
let modalRegister;
let modalListing;
let modalGallery;
let modalProfile;
let modalNewListing;

export function modalRouter(modalValue) {
  switch (modalValue) {
    case 'login':
      modalLogin = loginModal();
      return modalLogin;
    case 'register':
      modalRegister = registerModal();
      return modalRegister;
    case 'listing':
      modalListing = listingModal(listings);
      return modalListing;
    case 'gallery':
      modalGallery = galleryModal();
      return modalGallery;
    case 'profile':
      modalProfile = profileModal();
      return modalProfile;
    case 'newListing':
      modalNewListing = newListingModal();
      return modalNewListing;
    default:
      throw console.error('No modal were matched in the router!');
  }
}
