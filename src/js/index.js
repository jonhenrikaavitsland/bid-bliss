import { listings } from './data/listings';
import { loginBtnListener } from './listeners/loginBtnListener';
import { renderListings } from './render/renderListings';

renderListings(listings.data);

loginBtnListener();

console.log('Listings:', listings);
