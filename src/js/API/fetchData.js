import { alertUser } from '../errorHandling/alertUser';

/**
 * Fetches data from a given URL using the provided options.
 *
 * This asynchronous function sends a fetch request to the specified URL
 * with the given options. It parses the JSON response and checks for any
 * HTTP errors, throwing an error if the response is not OK.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {Object} object - The options to pass to the fetch request, including method, headers, and body.
 * @returns {Promise<Object>} A promise that resolves to the JSON-parsed response data.
 * @throws {Error} If the HTTP response is not OK, an error with the response status is thrown.
 */
export async function fetchData(url, object, alertType) {
  const response = await fetch(url, object);
  const result = await response.json();

  alertUser(alertType, response.status);

  if (!response.ok) {
    throw new Error(response.status);
  }

  return result;
}
