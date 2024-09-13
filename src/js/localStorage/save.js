/**
 * Saves a value to localStorage under the specified key after serializing it as JSON.
 *
 * This function stores a given value in localStorage using the provided key.
 * If the key is invalid or empty, it logs an error and does not attempt to save.
 * Catches and logs any errors that occur during the JSON serialization or saving process.
 *
 * @param {string} key The key under which the value should be stored in localStorage.
 * @param {any} value The value to be saved, which will be serialized as JSON.
 * @returns {void} No return value; handles saving directly and logs errors if encountered.
 * @example
 * ```js
 * // Save a profile object to localStorage
 * const profile = { name: 'John Doe', age: 30 };
 * save('profile', profile);
 *
 * // Attempt to save with an invalid key
 * save('', profile); // Logs: Invalid key provided for localStorage save
 * ```
 */
export function save(key, value) {
  if (typeof key !== 'string' || key.trim() === '') {
    console.error('Invalid key provided for localStorage save');
    return;
  }

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}
