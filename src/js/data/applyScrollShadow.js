import { isOVerflowing } from './isOverflowing';

/**
 * Adds or removes a shadow effect on an element to indicate scrollability based on the specified overflow threshold.
 *
 * This function checks if the content within the specified element is overflowing beyond a given pixel height.
 * If the element is overflowing, it adds a shadow effect to visually indicate that the element is scrollable.
 * Otherwise, it removes the shadow effect.
 *
 * @param {HTMLElement} element - The element to which the scroll shadow effect is applied or removed.
 * @param {number} px - The pixel threshold to determine if the element's content is overflowing.
 * @example
 * // Applies scroll shadow effect if content overflows the specified height
 * applyScrollShadow(document.getElementById('contentBox'), 200);
 */
export function applyScrollShadow(element, px) {
  if (isOVerflowing(element, px)) {
    element.classList.add('shadow-scrollIndicator');
  } else {
    element.classList.remove('shadow-scrollIndicator');
  }
}
