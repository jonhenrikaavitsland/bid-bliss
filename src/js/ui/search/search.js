import { fetchData } from '../../API/fetchData';
import { API_Base, API_Listings } from '../../data/constants';
import { renderListings } from '../../render/renderListings';
import { sanitizeInput } from '../../validate/sanitize/sanitizeInput';

export function search() {
  const form = document.querySelector(`[data-form="search"]`);
  const input = document.querySelector('#searchField');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const rawQuery = input.value.trim();
    const query = sanitizeInput(rawQuery);

    if (!query) {
      return;
    }

    try {
      const newListings = await fetchData(`${API_Base}${API_Listings}/search?q=${encodeURIComponent(query)}`);
      console.log(newListings);

      renderListings(newListings.data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  });
}
