import { fetchData } from '../API/fetchData';
import { API_Base, API_Listings } from './constants';

class ListingService {
  constructor() {
    this.listings = null;
  }

  async fetchListings() {
    this.listings = await fetchData(`${API_Base}${API_Listings}?_seller=true&_bids=true`);
  }

  getListings() {
    return this.listings;
  }

  updateListings(newData) {
    this.listings = newData;
  }
}

export const listingService = new ListingService();
await listingService.fetchListings();
