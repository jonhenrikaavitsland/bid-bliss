import { fetchData } from './fetchData';
import { API_Base, API_Listings } from '../data/constants';

/**
 * Fetches all listings from the API by iterating through paginated results until no more listings are available.
 *
 * This function requests listings from the API page by page, concatenating the results into a single array.
 * It continues fetching until a page returns fewer than 100 listings, indicating the end of available data.
 *
 * @async
 * @returns {Promise<Array>} A promise that resolves to an array of all fetched listings.
 * @throws Will throw an error if fetching listings fails.
 * @example
 * ```js
 * // Fetch all listings from the API
 * fetchAllListings().then(listings => console.log(listings));
 * ```
 */
export async function fetchAllListings() {
  let page = 1;
  let allListings = [];
  let hasMoreListings = true;

  while (hasMoreListings) {
    try {
      const url = `${API_Base}${API_Listings}?page=${page}&_seller=true&_bids=true`;

      const response = await fetchData(url);

      if (response && response.data && response.data.length > 0) {
        allListings = allListings.concat(response.data);

        if (response.data.length < 100) {
          hasMoreListings = false;
        } else {
          page += 1;
        }
      } else {
        hasMoreListings = false;
      }
    } catch (error) {
      console.error('Error fetching listings:', error);
      throw error;
    }
  }
  return allListings;
}
