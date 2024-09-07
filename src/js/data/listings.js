import { fetchData } from '../API/fetchData';
import { API_Base, API_Listings } from './constants';
import { sortListings } from './sortListings';

export const listings = await fetchData(`${API_Base}${API_Listings}?_seller=true&_bids=true`);

// Sorts the array
export const sortedListings = sortListings(listings);
