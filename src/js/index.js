import { listings } from './data/listings';
import { loginBtnListener } from './listeners/loginBtnListener';
import { renderListings } from './render/renderListings';
import { ifLoggedIn } from './ui/loggedIn/ifLoggedIn';
import { load } from './localStorage/load';

renderListings(listings.data);
loginBtnListener();
ifLoggedIn();

console.log('Listings:', listings);
