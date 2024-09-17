import { initializeListings } from './data/initializeListings';
import { loginBtnListener } from './listeners/loginBtnListener';
import { renderListings } from './render/renderListings';
import { renderLoginBtn } from './render/renderLoginBtn';
// import { testModal } from './template/testModal';
import { ifLoggedIn } from './ui/loggedIn/ifLoggedIn';
// import { openModal } from './ui/modal/openModal';
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
// const testingModal = await testModal('a414a683-de77-47ea-b55e-ed8685082af5');
// openModal(testingModal);
// End of testing Zone
