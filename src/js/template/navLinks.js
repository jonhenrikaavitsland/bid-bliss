import { createBtn } from '../elements/createBtn';
import { createLi } from '../elements/createLi';
import { createUl } from '../elements/createUl';
import { logout } from '../ui/logoutBtn/logout';
import { runModal } from '../ui/modal/runModal';

/**
 * Creates and returns a navigation element with links for logged-in users.
 *
 * This function generates a list of navigation buttons, including "New Auction," "Profile," and "Logout."
 * Each button is wrapped in a list item and is styled for navigation. Event listeners are attached to handle
 * modal openings and logout functionality based on the button clicked.
 *
 * @returns {HTMLElement} The constructed unordered list element containing navigation buttons.
 * @example
 * ```js
 * // Create navigation links and append them to the navigation bar
 * const nav = navLinks();
 * document.querySelector('nav').append(nav);
 * ```
 */
export function navLinks() {
  const element = createUl('hidden', 'lg:flex', 'order-first', 'font-serif', 'gap-5', 'text-white', 'text-xl');

  const links = ['new auction', 'profile', 'logout'];

  links.forEach((btn, index) => {
    const buttonWrap = createLi();
    const button = createBtn(btn, 'uppercase', 'py-3', 'px-6', 'hover:bg-hoverPrimary', 'rounded-xl');

    button.setAttribute('data-nav', index);

    switch (btn) {
      case 'profile':
        button.addEventListener('click', () => runModal(true, 'profile'));
        break;
      case 'new auction':
        button.addEventListener('click', () => runModal(true, 'newListing'));
        break;
      case 'logout':
        button.addEventListener('click', logout);
        break;
    }

    buttonWrap.append(button);
    element.append(buttonWrap);
  });

  return element;
}
