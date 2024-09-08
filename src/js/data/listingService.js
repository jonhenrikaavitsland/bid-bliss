import { fetchData } from '../API/fetchData';
import { API_Base, API_Listings } from './constants';

class ListingService {
  constructor() {
    this.listings = null;
  }

  async fetchListings() {
    try {
      const response = await fetchData(`${API_Base}${API_Listings}?_seller=true&_bids=true`);
      this.listings = response || [];
    } catch (error) {
      console.error('Error fetching listings:', error);
      this.listings = [];
    }
  }

  getListings() {
    return this.listings || [];
  }

  updateListings(newData) {
    if (!Array.isArray(newData)) {
      console.error('Invalid data format. Listings should be an array.');
      return;
    }
    this.listings = newData;
  }
}

export const listingService = new ListingService();
