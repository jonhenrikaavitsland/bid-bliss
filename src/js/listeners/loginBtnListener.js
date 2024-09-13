import { load } from '../localStorage/load';
import { handleLoginBtnClick } from './handleLoginBtnClick';

/**
 * Sets up a click event listener for the login button, triggering the login modal.
 *
 * Checks if the user is already logged in by loading the profile and token from local storage.
 * If the user is not logged in, it finds the login button and adds a click event listener to trigger the login modal.
 * Logs a warning if the login button is not found in the DOM.
 *
 * @returns {void} No return value; manages the event listener setup internally.
 * @example
 * ```js
 * // Initialize the login button listener
 * loginBtnListener();
 * ```
 */
export function loginBtnListener() {
  const profile = load('profile');
  const token = load('token');

  if (profile && token) {
    return;
  }

  const loginButton = document.querySelector(`[data-modal="loginModalOpen"]`);

  if (!loginButton) {
    console.warn('Login button not found');
    return;
  }

  loginButton.addEventListener('click', handleLoginBtnClick);
}
