/**
 * Closes the modal by hiding it, clearing its contents, and temporarily disabling pointer events.
 *
 * This function removes the modal's display classes, hides it, clears its inner HTML, and disables pointer events on the body
 * for a brief period to prevent unintended interactions during the close process. It also removes the body's overflow-hidden class.
 *
 * @param {HTMLElement} modal The modal element to be closed.
 * @returns {void} No return value; modifies the DOM to hide the modal.
 * @example
 * ```js
 * // Close the modal element
 * const modalElement = document.querySelector('.modal');
 * closeModal(modalElement);
 * ```
 */
export function closeModal(modal) {
  modal.classList.remove('flex', 'items-center', 'justify-center', 'px-5');
  modal.classList.add('hidden');
  modal.innerHTML = '';
  document.body.classList.add('pointer-events-none');
  document.body.classList.remove('overflow-hidden');
  setTimeout(() => {
    document.body.classList.remove('pointer-events-none');
  }, 500);
}
