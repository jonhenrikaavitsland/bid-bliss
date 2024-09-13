/**
 * Logs the user out by clearing all localStorage data and redirecting to the homepage.
 *
 * This function clears all data stored in localStorage, effectively logging the user out of the application,
 * and then redirects the browser to the homepage.
 *
 * @returns {void} No return value; performs logout and redirects the user.
 * @example
 * ```js
 * // Log the user out and redirect to the homepage
 * logout();
 * ```
 */
export function logout() {
  localStorage.clear();
  window.location.href = '/';
}
