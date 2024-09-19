import { listingCard } from '../template/listingCard';
import { createLoadingOverlay } from './createLoadingOverlay';

export function rerenderListings(parent, listings, currentIndex) {
  // Clear the current cards
  const overlay = createLoadingOverlay();
  parent.innerHTML = '';
  parent.appendChild(overlay);

  // Render the updated batch of listings
  const listingsToRender = listings.slice(0, currentIndex);

  listingsToRender.forEach((listing) => {
    const card = listingCard(listing);
    parent.appendChild(card);
  });
}
