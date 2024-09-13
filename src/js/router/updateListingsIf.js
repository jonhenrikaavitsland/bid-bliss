import { initializeListings } from '../data/initializeListings';

/**
 * Updates listings if the specified modal value requires it.
 *
 * This function checks the `modalValue` and updates the listings if the value matches 'listing'.
 * It initializes listings by calling `initializeListings` and returns the updated listings.
 * If the modal value does not require an update, it returns an empty array.
 *
 * @async
 * @param {string} modalValue The type of modal being handled, used to determine if listings need to be updated.
 * @returns {Promise<Array>} A promise that resolves to an array of updated listings if applicable, or an empty array otherwise.
 * @example
 * ```js
 * // Update listings if the modal value is 'listing'
 * updateListingsIf('listing').then(listings => {
 *   console.log('Updated listings:', listings);
 * });
 *
 * // No update is performed if the modal value is not 'listing'
 * updateListingsIf('gallery').then(listings => {
 *   console.log('Listings not updated:', listings); // Outputs: []
 * });
 * ```
 */
export async function updateListingsIf(modalValue) {
  let updatedListings = [];

  if (modalValue === 'listing') {
    updatedListings = await initializeListings();
  }
  return updatedListings;
}
