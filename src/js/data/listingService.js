import { fetchAllListings } from '../API/fetchAllListings';

class ListingService {
  constructor() {
    this.listings = null;
  }

  async fetchListings() {
    try {
      this.listings = (await fetchAllListings()) || [];
    } catch (error) {
      console.error('Error fetching listings:', error);
      this.listings = [];
    }
  }

  getListings() {
    return this.listings || [];
  }
}

export const listingService = new ListingService();
