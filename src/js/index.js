import { listings } from './data/listings';
import { loginBtnListener } from './listeners/loginBtnListener';
import { renderListings } from './render/renderListings';
import { ifLoggedIn } from './ui/loggedIn/ifLoggedIn';

ifLoggedIn();
renderListings(listings.data);

loginBtnListener();

console.log('Listings:', listings);
