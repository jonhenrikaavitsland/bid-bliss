import { initializeListings } from './data/initializeListings';
import { loginBtnListener } from './listeners/loginBtnListener';
import { renderListings } from './render/renderListings';
import { renderLoginBtn } from './render/renderLoginBtn';
import { ifLoggedIn } from './ui/loggedIn/ifLoggedIn';
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
