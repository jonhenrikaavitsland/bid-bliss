import { listingService } from '../data/listingService';

/**
 * Refreshes the listings by fetching the latest data from the listing service.
 *
 * This function calls the `fetchListings` method of the `listingService` to update the listings data.
 * It performs the fetch operation asynchronously to ensure the latest data is loaded.
 *
 * @async
 * @returns {Promise<void>} No return value; refreshes the listings by fetching new data.
 * @example
 * ```js
 * // Refresh the listings by fetching the latest data
 * refreshListings()
 *   .then(() => console.log('Listings refreshed successfully'))
 *   .catch(error => console.error('Error refreshing listings:', error));
 * ```
 */
export async function refreshListings() {
  await listingService.fetchListings();
}
