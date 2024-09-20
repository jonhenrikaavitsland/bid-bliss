import { initializeListings } from '../data/initializeListings';
import { rerenderListings } from './rerenderListings';

/**
 * Refreshes and re-renders auction listings in the modal.
 *
 * This function fetches the latest listings using `initializeListings()` and updates the
 * displayed listings in the modal. It retrieves the current render state (e.g., `currentIndex`)
 * from session storage, ensuring the listings are rendered from the correct index.
 *
 * @async
 * @function refreshListings
 * @returns {Promise<void>}
 * @example
 * await refreshListings();
 */
export async function refreshListings() {
  const parent = document.querySelector(`[data-modal="auctionModalDisplayListings"]`);
  const listings = await initializeListings();

  let state = JSON.parse(sessionStorage.getItem('listingState'));

  rerenderListings(parent, listings, state.currentIndex);
}
