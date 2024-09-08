import { listingService } from './listingService';
import { sortListings } from './sortListings';

export async function initializeListings() {
  await listingService.fetchListings();

  let listings = listingService.getListings() || [];

  const sortedListings = sortListings(listings);
  return sortedListings;
}
