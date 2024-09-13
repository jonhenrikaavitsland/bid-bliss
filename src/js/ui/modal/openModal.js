import { closeModal } from './closeModal.js';
import { modal } from '../../data/constants.js';

/**
 * Opens the modal and displays the specified target element inside it.
 *
 * This function shows the modal, positions it based on the current scroll position, and appends the target content.
 * It also sets up event listeners to close the modal when clicking or touching outside the target content.
 * If no target is provided, the modal is closed immediately.
 *
 * @param {HTMLElement|null} target The target element to display inside the modal. If null, the modal will be closed.
 * @returns {void} No return value; modifies the DOM to show the modal and handle interactions.
 * @example
 * ```js
 * // Open the modal with a specific content element
 * const contentElement = document.querySelector('.content-preview');
 * openModal(contentElement);
 * ```
 */
export function openModal(target) {
  if (!target) {
    closeModal(modal);
    return;
  }

  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  modal.classList.remove('hidden');
  modal.classList.add('flex', 'items-center', 'justify-center', 'p-5', 'md:px-10');

  modal.style.top = `${scrollPosition}px`;
  document.body.classList.add('overflow-hidden');

  modal.append(target);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
  modal.addEventListener('touchstart', (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
}
