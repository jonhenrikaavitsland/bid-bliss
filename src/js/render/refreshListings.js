import { listingService } from '../data/listingService';

export async function refreshListings() {
  await listingService.fetchListings();
}
