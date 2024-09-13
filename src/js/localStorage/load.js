/**
 * Loads and parses a value from localStorage based on the provided key.
 *
 * This function retrieves a value from localStorage using the given key and parses it as JSON.
 * If the key is invalid or empty, or if an error occurs during JSON parsing, it logs an error and returns `null`.
 *
 * @param {string} key The key of the item to retrieve from localStorage.
 * @returns {any|null} The parsed value from localStorage, or `null` if the key is invalid, the item doesn't exist, or parsing fails.
 * @example
 * ```js
 * // Load a value from localStorage
 * const profile = load('profile');
 * if (profile) {
 *   console.log('Profile loaded:', profile);
 * } else {
 *   console.log('Profile not found or invalid.');
 * }
 * ```
 */
export function load(key) {
  if (typeof key !== 'string' || key.trim() === '') {
    console.error('Invalid key provided for localStorage load');
    return null;
  }

  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error parsing JSON from localStorage:', error);
    return null;
  }
}
