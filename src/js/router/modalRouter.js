import { listings } from '../data/listings.js';
import { loginModal } from '../template/loginModal.js';
import { registerModal } from '../template/registerModal.js';
import { listingModal } from '../template/listingModal.js';

export function modalRouter(modalValue) {
  const modalLogin = loginModal();
  const modalRegister = registerModal();
  const modalListing = listingModal(listings.data);

  switch (modalValue) {
    case 'login':
      return modalLogin;
    case 'register':
      return modalRegister;
    case 'listing':
      return modalListing;
    default:
      throw console.error('No modal were matched in the router!');
  }
}
