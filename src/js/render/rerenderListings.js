import { listingCard } from '../template/listingCard';
import { createLoadingOverlay } from './createLoadingOverlay';

/**
 * Rerenders a list of auction listings within a specified parent container.
 *
 * This function clears the content of the parent container, displays a loading overlay,
 * and then renders the provided listings up to a specified index.
 *
 * @function rerenderListings
 * @param {HTMLElement} parent - The parent container where the listings will be rendered.
 * @param {Array} listings - An array of listing objects to render.
 * @param {number} currentIndex - The number of listings to render, starting from the first.
 * @returns {void}
 * @example
 * // Re-render the first 10 listings in a container
 * rerenderListings(document.getElementById('listingContainer'), listings, 10);
 */
export function rerenderListings(parent, listings, currentIndex) {
  const overlay = createLoadingOverlay();
  parent.innerHTML = '';
  parent.appendChild(overlay);

  const listingsToRender = listings.slice(0, currentIndex);

  listingsToRender.forEach((listing) => {
    const card = listingCard(listing);
    parent.appendChild(card);
  });
}
