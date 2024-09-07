import { listingService } from './listingService';
import { sortListings } from './sortListings';

export async function initializeListings() {
  if (!listingService.getListings()) {
    await listingService.fetchListings();
  }

  let listings = listingService.getListings() || [];

  const sortedListings = sortListings(listings);
  return sortedListings;
}
