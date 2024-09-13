import { modal } from '../data/constants.js';
import { runModal } from '../ui/modal/runModal.js';

/**
 * Sets up an event listener on a link within the modal to switch between login and register modals.
 *
 * This function adds a click event listener to the current link inside the modal. Depending on the `target` parameter,
 * it swaps the modal content between the login and register forms. It also temporarily disables the link's pointer events
 * to prevent multiple clicks during the transition.
 *
 * @param {string} target The target modal type to switch to when the link is clicked ('login' or 'register').
 * @returns {void} No return value; manages event listeners and modal transitions internally.
 * @example
 * ```js
 * // Set up link listener to switch from login to register modal
 * linkListener('login');
 *
 * // Set up link listener to switch from register to login modal
 * linkListener('register');
 * ```
 */
export function linkListener(target) {
  const currentModalLink = modal.querySelector('a');

  if (!currentModalLink) return;

  const handleClick = () => {
    currentModalLink.classList.add('pointer-events-none');

    modal.innerHTML = '';

    if (target === 'login') {
      runModal(true, 'register');
    } else if (target === 'register') {
      runModal(true, 'login');
    }

    currentModalLink.removeEventListener('click', handleClick);

    setTimeout(() => {
      currentModalLink.classList.remove('pointer-events-none');
    }, 1000);
  };

  currentModalLink.addEventListener('click', handleClick);
}
