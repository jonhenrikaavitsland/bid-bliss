import { listingService } from './listingService';
import { sortListings } from './sortListings';

export async function initializeListings() {
  await listingService.fetchListings();
  const listings = listingService.getListings() || [];
  return sortListings(listings);
}
