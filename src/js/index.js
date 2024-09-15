import { initializeListings } from './data/initializeListings';
import { loginBtnListener } from './listeners/loginBtnListener';
import { renderListings } from './render/renderListings';
import { renderLoginBtn } from './render/renderLoginBtn';
import { newProfileModal } from './template/newProfileModal';
import { ifLoggedIn } from './ui/loggedIn/ifLoggedIn';
import { openModal } from './ui/modal/openModal';
import { search } from './ui/search/search';

runApp();

async function runApp() {
  const newListings = await initializeListings();
  renderListings(newListings);
  search();
  renderLoginBtn();
  loginBtnListener();
  ifLoggedIn();

  console.log('Listings:', newListings);
}

// Testing Zone
// const testingParent = document.querySelector(`[data-modal="modalObject"]`);
// console.log('Test parent:', testingParent);
// const testingModal = newProfileModal();
// openModal(testingModal);
// End of testing Zone
