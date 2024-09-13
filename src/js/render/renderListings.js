import { listingCard } from '../template/listingCard';

/**
 * Renders a list of listings into the specified parent element in the DOM.
 *
 * This function clears the existing content of the target parent element and appends a fragment containing
 * generated listing cards based on the provided listings data. Logs an error if the parent element is not found
 * or if the listings data is not an array.
 *
 * @param {Array} listings An array of listing objects to render.
 * @returns {void} No return value; updates the DOM with the rendered listings.
 * @example
 * ```js
 * // Render a list of listings
 * const sampleListings = [
 *   { id: 1, title: 'Item 1', price: 100 },
 *   { id: 2, title: 'Item 2', price: 200 }
 * ];
 * renderListings(sampleListings);
 * ```
 */
export function renderListings(listings) {
  const parent = document.querySelector(`[data-modal="auctionModalDisplayListings"]`);

  if (!parent) {
    console.error('Parent element for listings not found');
    return;
  }

  if (!Array.isArray(listings)) {
    console.error('Invalid listings data: Expected an array');
    return;
  }

  parent.innerHTML = '';

  const fragment = document.createDocumentFragment();

  listings.forEach((list) => {
    const card = listingCard(list);
    fragment.append(card);
  });

  parent.appendChild(fragment);
}
