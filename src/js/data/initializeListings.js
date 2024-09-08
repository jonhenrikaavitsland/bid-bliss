import { listingService } from './listingService';
import { sortListings } from './sortListings';

export async function initializeListings() {
  try {
    await listingService.fetchListings();
    const listings = listingService.getListings() || [];
    return sortListings(listings);
  } catch (error) {
    console.error('Error initializing listings:', error);
    return [];
  }
}
