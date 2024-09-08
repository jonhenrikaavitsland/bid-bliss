import { fetchData } from '../../API/fetchData';
import { API_Base, API_Listings } from '../../data/constants';
import { renderListings } from '../../render/renderListings';
import { sanitizeInput } from '../../validate/sanitize/sanitizeInput';
import { initializeListings } from '../../data/initializeListings';

export function search() {
  const form = document.querySelector(`[data-form="search"]`);
  const input = document.querySelector('#searchField');
  const originalPlaceholder = input.placeholder;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const rawQuery = input.value.trim();
    const query = sanitizeInput(rawQuery);

    try {
      let newListings;

      if (!query) {
        newListings = await initializeListings();

        if (!newListings.data) {
          newListings = { data: newListings };
        }
      } else {
        newListings = await fetchData(`${API_Base}${API_Listings}/search?q=${encodeURIComponent(query)}`);

        if (!newListings.data || newListings.data.length === 0) {
          newListings = await initializeListings();

          if (!newListings.data) {
            newListings = { data: newListings };
          }

          input.value = `No results found for '${rawQuery}'`;
          input.classList.add('border-2', 'border-error', 'text-error');
          input.setAttribute('data-no-results', 'true');
        }
      }

      renderListings(newListings.data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  });

  input.addEventListener('click', () => {
    if (input.getAttribute('data-no-results') === 'true') {
      input.classList.remove('border-2', 'border-error', 'text-error');
      input.value = '';
      input.removeAttribute('data-no-results');
    }
  });
}
