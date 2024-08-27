import { listingCard } from '../template/listingCard';

export function renderListings(listings) {
  const parent = document.querySelector(`[data-modal="auctionModalDisplayListings"]`);
  parent.innerHTML = '';
  listings.forEach((list) => {
    const card = listingCard(list);
    parent.append(card);
  });
}
