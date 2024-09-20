import { setupScrollListener } from '../listeners/setupScrollListener';
import { renderNextBatch } from './renderNextBatch';

/**
 * Renders auction listing cards in batches and sets up dynamic resizing behavior.
 *
 * This function initializes the state for rendering auction listings, including the
 * current index and batch size. It adjusts the batch size based on the screen width
 * and listens for window resizing events to ensure responsive rendering. It also saves
 * the current state and batch size to session storage and renders the next batch of listings.
 * Additionally, a scroll listener is set up to trigger rendering when the user scrolls.
 *
 * @function renderCards
 * @param {Array} listings - An array of auction listing objects to render.
 * @returns {void}
 * @example
 * renderCards(listings);
 */
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
