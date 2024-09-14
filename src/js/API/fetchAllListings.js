import { fetchData } from './fetchData';
import { API_Base, API_Listings } from '../data/constants';

export async function fetchAllListings() {
  let page = 1;
  let allListings = [];
  let hasMoreListings = true;

  while (hasMoreListings) {
    try {
      const url = `${API_Base}${API_Listings}?page=${page}&_seller=true&_bids=true`;

      const response = await fetchData(url);

      if (response && response.data && response.data.length > 0) {
        allListings = allListings.concat(response.data);

        if (response.data.length < 100) {
          hasMoreListings = false;
        } else {
          page += 1;
        }
      } else {
        hasMoreListings = false;
      }
    } catch (error) {
      console.error('Error fetching listings:', error);
      throw error;
    }
  }
  return allListings;
}
