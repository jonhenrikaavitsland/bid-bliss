import { createDiv } from '../elements/createDiv';

/**
 * Creates a loading overlay element.
 *
 * This function generates a loading overlay with animation and styling, which can be used to indicate
 * that content is loading. The overlay is initially hidden and will cover the entire width and height
 * of the bottom portion of its parent element.
 *
 * @returns {HTMLDivElement} The created loading overlay element.
 * @example
 * const overlay = createLoadingOverlay();
 * document.body.appendChild(overlay);
 */
export function createLoadingOverlay() {
  const overlay = createDiv('absolute', 'bottom-0', 'lef-0', 'w-full', 'h-24', 'md:h-40', 'bg-white', 'bg-opacity-60', 'animate-pulse', 'transition-all', 'duration-500', 'hidden');
  overlay.setAttribute('id', 'overlay');
  return overlay;
}
