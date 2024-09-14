import { fetchAllListings } from '../API/fetchAllListings';

/**
 * A service class for managing and fetching auction listings.
 *
 * This class handles fetching listings from an API and provides methods to access the fetched listings.
 * It manages the internal state of listings and ensures that errors during fetching are handled gracefully
 * by logging the error and setting the listings to an empty array.
 */
class ListingService {
  constructor() {
    /**
     * @private
     * @type {Array|null} listings - Stores the fetched listings or null if not fetched yet.
     */
    this.listings = null;
  }

  /**
   * Fetches listings from the API and updates the internal state.
   *
   * This method attempts to fetch all listings using an API call. If the fetch is successful,
   * it updates the `listings` property with the fetched data. If an error occurs during fetching,
   * it logs the error and sets `listings` to an empty array.
   *
   * @async
   * @returns {Promise<void>} No return value; updates the internal state of the listings.
   * @example
   * ```js
   * // Fetch listings from the API
   * await listingService.fetchListings();
   * ```
   */
  async fetchListings() {
    try {
      this.listings = (await fetchAllListings()) || [];
    } catch (error) {
      console.error('Error fetching listings:', error);
      this.listings = [];
    }
  }

  /**
   * Retrieves the current listings stored in the service.
   *
   * This method returns the listings that have been fetched or an empty array if no listings have been fetched yet.
   *
   * @returns {Array} The list of fetched listings or an empty array if no listings are available.
   * @example
   * ```js
   * // Get the current listings
   * const listings = listingService.getListings();
   * console.log(listings);
   * ```
   */
  getListings() {
    return this.listings || [];
  }
}

export const listingService = new ListingService();
