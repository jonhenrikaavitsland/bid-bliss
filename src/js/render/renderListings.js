import { listingCard } from '../template/listingCard';

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
