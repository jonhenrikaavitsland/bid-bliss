import { getProfile } from '../../API/getProfile';
import { load } from '../../localStorage/load';
import { loggedInButton } from '../../template/loggedInButton';
import { loggedInButton2 } from '../../template/loggedInButton2';
import { navLinks } from '../../template/navLinks';
import { addBtn } from './addBtn';

const nav = document.querySelector('nav');

/**
 * Updates the UI if the user is logged in by loading profile data, adding buttons, and rendering navigation elements.
 *
 * This function checks if a valid token and profile are present in localStorage. If both are found, it fetches the user's profile,
 * adds a "New Auction" button, clears the existing navigation, and appends logged-in buttons and navigation links.
 *
 * @async
 * @returns {Promise<void>} No return value; updates the DOM with logged-in user elements and navigation links.
 * @example
 * ```js
 * // Check if the user is logged in and update the UI accordingly
 * ifLoggedIn();
 * ```
 */
export async function ifLoggedIn() {
  const token = load('token');
  const profile = load('profile');

  if (token && profile) {
    await getProfile();

    addBtn();

    nav.innerHTML = '';

    document.body.append(loggedInButton2());
    nav.append(loggedInButton());

    const links = navLinks();
    nav.append(links);
  }
}
