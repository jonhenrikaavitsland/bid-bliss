import { pointer } from '../data/images';
import { createBtn } from '../elements/createBtn';
import { createImg } from '../elements/createImg';
import { load } from '../localStorage/load';
import { save } from '../localStorage/save';
/**
 * Creates a pointer button with an animated pulse effect.
 *
 * This function generates a button that pulses until clicked. Once clicked, the pulse animation is removed,
 * and the button is hidden. The button image is customizable and defaults to a rounded avatar style.
 * The pulse effect is saved in local storage to persist across sessions.
 *
 * @function pointerButton
 * @param {string} media - The URL or source of the image to display in the button.
 * @returns {HTMLElement} - A button element with an image and animated pulse effect.
 * @example
 * // Create and append a pointer button
 * const button = pointerButton('https://example.com/avatar.png');
 * document.body.appendChild(button);
 */
export function pointerButton() {
  const element = createBtn('', 'absolute', 'z-30', 'w-14', 'md:w-20', 'border-2', 'border-secondary', 'rounded-full', 'md:bottom-8', 'md:right-8', 'aspect-square', 'object-cover', 'overflow-hidden', 'object-center', 'right-5', 'bottom-5');

  if (!load('pointerPulse')) {
    element.classList.add('animate-pulse');
  } else {
    element.classList.add('hidden');
  }

  element.addEventListener('click', () => {
    element.classList.remove('animate-pulse');
    element.classList.add('hidden');
    save('pointerPulse', true);
  });

  const img = createImg(pointer, 'rounded-full', 'shadow-customShadow');
  img.setAttribute('data-avatar', 'btn');

  element.append(img);
  return element;
}
