/**
 * Closes the gallery by hiding it, clearing its contents, and temporarily disabling pointer events.
 *
 * This function removes the gallery's display classes, hides it, clears its inner HTML, and disables pointer events on the body
 * for a short duration to prevent unintended interactions during the close animation.
 *
 * @param {HTMLElement} gallery The gallery element to be closed.
 * @returns {void} No return value; modifies the DOM to hide the gallery.
 * @example
 * ```js
 * // Close the gallery element
 * const galleryElement = document.querySelector('.gallery');
 * closeGallery(galleryElement);
 * ```
 */
export function closeGallery(gallery) {
  gallery.classList.remove('flex', 'items-center', 'justify-center', 'py-5');
  gallery.classList.add('hidden');
  gallery.innerHTML = '';
  document.body.classList.add('pointer-events-none');
  setTimeout(() => {
    document.body.classList.remove('pointer-events-none');
  }, 1000);
}
