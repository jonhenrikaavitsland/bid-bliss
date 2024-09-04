import { listings } from './data/listings';
import { loginBtnListener } from './listeners/loginBtnListener';
import { renderListings } from './render/renderListings';
import { renderLoginBtn } from './render/renderLoginBtn';
import { ifLoggedIn } from './ui/loggedIn/ifLoggedIn';
import { search } from './ui/search/search';

renderListings(listings.data);
search();
renderLoginBtn();
loginBtnListener();
ifLoggedIn();

console.log('Listings:', listings);
