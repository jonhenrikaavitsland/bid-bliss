import { listingCard } from '../template/listingCard';

export function renderNextBatch(parent, allListings, currentIndex, batchSize) {
  const listingsToRender = allListings.slice(currentIndex, currentIndex + batchSize);

  // Debugging log to check what listings are rendered
  console.log('Rendering next batch:', listingsToRender);

  listingsToRender.forEach((listing) => {
    const card = listingCard(listing);
    parent.appendChild(card);
  });
}
