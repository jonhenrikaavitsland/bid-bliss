import { listingCard } from '../template/listingCard';
import { createLoadingOverlay } from './createLoadingOverlay';

/**
 * Renders the next batch of auction listings in a specified container.
 *
 * This function retrieves the current index from the state and slices the listings
 * array to render the next batch of listings based on the specified batch size.
 * It updates the parent container, displays a loading overlay, and appends the new listings.
 * The current index is then updated and stored in the session storage.
 *
 * @function renderNextBatch
 * @param {Object} state - The current state object containing the currentIndex.
 * @param {Array} listings - The array of listing objects to render.
 * @param {number} batchSize - The number of listings to render in each batch.
 * @returns {void}
 * @example
 * const state = { currentIndex: 10 };
 * renderNextBatch(state, listings, 5);
 */
export function renderNextBatch(state, listings, batchSize) {
  const { currentIndex } = state;
  let listingsToRender = listings.slice(0, currentIndex + batchSize);

  const parent = document.querySelector(`[data-modal="auctionModalDisplayListings"]`);
  parent.innerHTML = '';
  const overlay = createLoadingOverlay();
  console.log('nextBatch:', overlay);

  parent.appendChild(overlay);

  listingsToRender.forEach((listing) => {
    const card = listingCard(listing);
    parent.appendChild(card);
  });

  state.currentIndex += batchSize;

  sessionStorage.setItem('listingState', JSON.stringify(state));
}
