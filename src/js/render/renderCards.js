import { setupScrollListener } from '../listeners/setupScrollListener';
import { createLoadingOverlay } from './createLoadingOverlay';
import { renderNextBatch } from './renderNextBatch';

export function renderCards(listings) {
  const state = { currentIndex: 0 };
  const batchSize = 15;

  const parent = document.querySelector(`[data-modal="auctionModalDisplayListings"]`);
  const overlay = createLoadingOverlay();
  parent.innerHTML = '';
  parent.appendChild(overlay);

  renderNextBatch(parent, listings, state.currentIndex, batchSize);

  setupScrollListener(renderNextBatch.bind(null, parent), overlay, listings, batchSize, state);
}
