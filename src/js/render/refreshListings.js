import { initializeListings } from '../data/initializeListings';
import { rerenderListings } from './rerenderListings';

export async function refreshListings() {
  const parent = document.querySelector(`[data-modal="auctionModalDisplayListings"]`);
  const listings = await initializeListings();

  let state = JSON.parse(sessionStorage.getItem('listingState'));

  // Rerender the current batch of listings
  rerenderListings(parent, listings, state.currentIndex);
}
