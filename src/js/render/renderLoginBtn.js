import { load } from '../localStorage/load';
import { loginLink } from '../template/loginLink';

/**
 * Renders a login button in the navigation if the user is not logged in.
 *
 * This function checks if the user is already logged in by checking for a profile and token in localStorage.
 * If not logged in, it adds a login link to the navigation element. Logs errors if the navigation element is not found
 * and warns if the login link already exists.
 *
 * @returns {void} No return value; updates the navigation by appending the login link if conditions are met.
 * @example
 * ```js
 * // Render the login button if the user is not logged in
 * renderLoginBtn();
 * ```
 */
export function renderLoginBtn() {
  const profile = load('profile');
  const token = load('token');

  if (profile || token) {
    return;
  }

  const nav = document.querySelector('nav');

  if (!nav) {
    console.error('Navigation element not found');
    return;
  }

  if (nav.querySelector('[data-login="link"]')) {
    console.warn('Login link already exists');
    return;
  }

  const link = loginLink();
  nav.append(link);
}
