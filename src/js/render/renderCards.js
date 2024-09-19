import { setupScrollListener } from '../listeners/setupScrollListener';
import { renderNextBatch } from './renderNextBatch';

export function renderCards(listings) {
  let state = {
    currentIndex: 0,
  };

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

    sessionStorage.setItem('batchSize', batchSize);
  });

  sessionStorage.setItem('listingState', JSON.stringify(state));
  sessionStorage.setItem('batchSize', batchSize);

  renderNextBatch(state, listings, batchSize);

  setupScrollListener(renderNextBatch, listings);
}
