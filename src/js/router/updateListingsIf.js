import { initializeListings } from '../data/initializeListings';

export async function updateListingsIf(modalValue) {
  let updatedListings = [];

  if (modalValue === 'listing') {
    updatedListings = await initializeListings();
  }
  return updatedListings;
}
