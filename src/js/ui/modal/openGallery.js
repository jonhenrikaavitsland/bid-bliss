import { gallery } from '../../data/constants';
import { modal } from '../../data/constants';
import { closeGallery } from './closeGallery';

/**
 * Opens the gallery and displays the specified target element within it.
 *
 * This function shows the gallery element, positions it based on the current scroll position, and appends the target content.
 * It also sets up event listeners to close the gallery when clicking or touching outside the target content.
 * If no target is provided, the gallery is closed immediately.
 *
 * @param {HTMLElement|null} target The target element to display inside the gallery. If null, the gallery will be closed.
 * @returns {void} No return value; modifies the DOM to show the gallery and handle interactions.
 * @example
 * ```js
 * // Open the gallery with a specific image element
 * const imageElement = document.querySelector('.image-preview');
 * openGallery(imageElement);
 * ```
 */
export function openGallery(target) {
  if (!target) {
    closeGallery(gallery);
    return;
  }

  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  gallery.classList.remove('hidden');
  gallery.classList.add('flex', 'items-center', 'justify-center', 'py-5');

  gallery.style.top = `${scrollPosition}px`;

  gallery.append(target);

  gallery.addEventListener('click', (event) => {
    if (event.target === gallery || event.target === modal) {
      closeGallery(gallery);
    }
  });
  gallery.addEventListener('touchstart', (event) => {
    if (event.target === gallery || event.target === modal) {
      closeGallery(gallery);
    }
  });
}
