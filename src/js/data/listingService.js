import { fetchData } from '../API/fetchData';
import { API_Base, API_Listings } from './constants';

/**
 * A service class for managing listings, including fetching, retrieving, and updating listings data.
 */
class ListingService {
  /**
   * Creates an instance of ListingService.
   */
  constructor() {
    /**
     * @private
     * @type {Array|null} listings - Holds the listings data fetched from the API.
     */
    this.listings = null;
  }

  /**
   * Fetches listings from the API, including seller and bids information.
   *
   * Makes a request to the listings API endpoint to retrieve the listings data
   * and stores the response. If an error occurs during the fetch, an empty array is set as listings.
   *
   * @async
   * @returns {Promise<void>} Resolves when listings are fetched and stored.
   * @throws {Error} Logs an error if the fetch operation fails.
   * @example
   * ```js
   * // Fetch listings using the service
   * listingService.fetchListings()
   *   .then(() => console.log('Listings fetched successfully'))
   *   .catch(error => console.error('Failed to fetch listings:', error));
   * ```
   */
  async fetchListings() {
    try {
      const response = await fetchData(`${API_Base}${API_Listings}?_seller=true&_bids=true`);
      this.listings = response || [];
    } catch (error) {
      console.error('Error fetching listings:', error);
      this.listings = [];
    }
  }

  /**
   * Retrieves the current listings data.
   *
   * @returns {Array} An array of listings; returns an empty array if listings have not been fetched.
   * @example
   * ```js
   * // Get current listings
   * const listings = listingService.getListings();
   * console.log(listings);
   * ```
   */
  getListings() {
    return this.listings || [];
  }

  /**
   * Updates the listings with new data.
   *
   * Replaces the current listings data with the provided array. Logs an error if the provided data is not an array.
   *
   * @param {Array} newData The new listings data to update.
   * @returns {void}
   * @example
   * ```js
   * // Update listings with new data
   * const newListings = [{ id: 1, name: 'New Listing' }];
   * listingService.updateListings(newListings);
   * ```
   */
  updateListings(newData) {
    if (!Array.isArray(newData)) {
      console.error('Invalid data format. Listings should be an array.');
      return;
    }
    this.listings = newData;
  }
}

export const listingService = new ListingService();
