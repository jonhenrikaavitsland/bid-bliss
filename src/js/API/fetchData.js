import { alertUser } from '../errorHandling/alertUser';

/**
 * Fetches data from a specified URL with optional configuration object and alert type.
 *
 * @param {string} url The URL to fetch data from.
 * @param {Object} [object={}] Optional fetch configuration object (e.g., headers, method).
 * @param {string} [alertType] Optional alert type to determine how to alert the user on response.
 * @returns {Promise<Object>} A promise that resolves to the fetched data as a JSON object.
 * @throws {Error} Throws an error if the URL is invalid or the fetch request fails.
 * @example
 * ```js
 * // Fetch data from an API
 * const url = 'https://api.example.com/data';
 * const options = { method: 'GET' };
 * const alertType = 'success';
 * fetchData(url, options, alertType)
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 * ```
 */
export async function fetchData(url, object = {}, alertType) {
  if (typeof url !== 'string' || !url.trim()) {
    console.error('Invalid URL provided');
    throw new Error('Invalid URL');
  }

  try {
    const response = await fetch(url, object);

    const result = await response.json();

    alertUser(alertType, response.status);

    if (!response.ok) {
      console.error('Error:', response.status, response.statusText);
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    return result;
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
}
