import { setupScrollListener } from '../listeners/setupScrollListener';
import { createLoadingOverlay } from './createLoadingOverlay';
import { renderNextBatch } from './renderNextBatch';

export function renderCards(listings) {
  const state = { currentIndex: 0 };
  let batchSize = 15;

  if (window.innerWidth < 1245) {
    batchSize = batchSize % 2 === 0 ? batchSize : batchSize + 1;
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 1245) {
      batchSize = batchSize % 2 === 0 ? batchSize : batchSize + 1;
    } else {
      batchSize = 15; // or any other default batch size you want
    }
  });

  const parent = document.querySelector(`[data-modal="auctionModalDisplayListings"]`);
  const overlay = createLoadingOverlay();
  parent.innerHTML = '';
  parent.appendChild(overlay);

  renderNextBatch(parent, listings, state.currentIndex, batchSize);

  setupScrollListener(renderNextBatch.bind(null, parent), overlay, listings, batchSize, state);
}
