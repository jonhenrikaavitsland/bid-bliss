import { isOVerflowing } from './isOverflowing';

/**
 * Adds or removes a shadow effect on an element to indicate that it has overflowing content.
 *
 * This function checks if the content within the specified element is overflowing
 * beyond its visible area. If the element's content is overflowing, it adds a shadow
 * effect to visually indicate scrollability. Otherwise, it removes the shadow effect.
 *
 * @param {HTMLElement} element - The element to which the shadow effect is applied or removed.
 *
 * @example
 * // HTML: <div id="contentDiv" style="max-height: 200px; overflow: auto;"> ... </div>
 * const contentDiv = document.getElementById('contentDiv');
 * applyScrollShadow(contentDiv);
 * // Adds a shadow to indicate that the content is overflowing if applicable.
 */
export function applyScrollShadow(element) {
  if (isOVerflowing(element)) {
    element.classList.add('shadow-scrollIndicator');
  } else {
    element.classList.remove('shadow-scrollIndicator');
  }
}
