import { createBtn } from '../../elements/createBtn';
import { runModal } from '../modal/runModal';

/**
 * Adds a "New Auction" button to the specified parent element and sets up an event listener to open the new listing modal.
 *
 * This function creates a button for starting a new auction, appends it to the designated parent element,
 * and adds styling classes to the parent element to adjust its layout.
 *
 * @returns {void} No return value; modifies the DOM by adding the button and updating the parent element's classes.
 * @example
 * ```js
 * // Add a "New Auction" button to the page
 * addBtn();
 * ```
 */
export function addBtn() {
  const btnParent = document.querySelector(`[data-buttons="newAuction"]`);

  const btn = createBtn('new auction', 'py-3', 'px-4', 'md:py-3', 'md:px-6', 'md:text-lg', 'text-white', 'bg-primary', 'hover:bg-hoverPrimary', 'rounded-xl', 'uppercase', 'font-serif', 'font-medium', 'lg:hidden');
  btn.addEventListener('click', () => {
    runModal(true, 'newListing');
  });

  btnParent.append(btn);
  btnParent.classList.add('justify-between', 'flex-wrap', 'gap-5');
}
