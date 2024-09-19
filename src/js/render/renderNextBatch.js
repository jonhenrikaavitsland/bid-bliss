import { listingCard } from '../template/listingCard';
import { createLoadingOverlay } from './createLoadingOverlay';

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
