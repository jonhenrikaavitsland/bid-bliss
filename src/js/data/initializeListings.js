import { listingService } from './listingService';
import { sortListings } from './sortListings';

/**
 * Initializes listings by fetching and sorting them.
 *
 * Fetches listings using the `listingService` and then sorts the fetched listings using the `sortListings` function.
 * If no listings are found, an empty array is sorted and returned.
 *
 * @async
 * @returns {Promise<Array>} A promise that resolves to an array of sorted listings.
 * @example
 * ```js
 * // Initialize and sort listings
 * initializeListings()
 *   .then(sortedListings => {
 *     console.log('Listings initialized and sorted:', sortedListings);
 *   })
 *   .catch(error => {
 *     console.error('Error initializing listings:', error);
 *   });
 * ```
 */
export async function initializeListings() {
  await listingService.fetchListings();
  const listings = listingService.getListings() || [];
  return sortListings(listings);
}
