import { getProfile } from '../../API/getProfile';
import { load } from '../../localStorage/load';
import { loggedInButton } from '../../template/loggedInButton';
import { loggedInButton2 } from '../../template/loggedInButton2';
import { navLinks } from '../../template/navLinks';
import { addBtn } from './addBtn';

const nav = document.querySelector('nav');

/**
 * Handles the setup of UI elements when a user is logged in.
 *
 * This function checks if a valid token and profile are stored locally, and if so, ensures that the user's profile
 * information is up-to-date by fetching it if necessary. It updates the navigation by adding buttons and links specific to
 * logged-in users, such as the "New Auction" button and navigation links, and replaces the current navigation content.
 *
 * @async
 * @returns {Promise<void>} No return value. Updates the UI if the user is logged in.
 *
 * @example
 * // Automatically updates the navigation bar and UI components when a user is logged in.
 * ifLoggedIn();
 */
export async function ifLoggedIn() {
  const token = load('token');
  const profile = load('profile');

  if (token && profile) {
    const profileObj = load('profile');

    if (!profileObj.credits) {
      await getProfile();
    }

    addBtn();

    nav.innerHTML = '';

    document.body.append(loggedInButton2());
    nav.append(loggedInButton());

    const links = navLinks();
    nav.append(links);
  }
}
