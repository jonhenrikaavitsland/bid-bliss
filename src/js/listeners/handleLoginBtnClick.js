import { runModal } from '../ui/modal/runModal';

/**
 * Handles the click event for the login button by displaying the login modal.
 *
 * Invokes the `runModal` function to open the login modal. If an error occurs during the process,
 * it logs the error to the console.
 *
 * @returns {void} No return value; handles modal display internally.
 * @example
 * ```js
 * // Add an event listener to a login button
 * const loginButton = document.getElementById('login-button');
 * loginButton.addEventListener('click', handleLoginBtnClick);
 * ```
 */
export function handleLoginBtnClick() {
  try {
    runModal(true, 'login');
  } catch (error) {
    console.error('Error running login modal:', error);
  }
}
