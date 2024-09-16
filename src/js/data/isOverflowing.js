/**
 * Checks if an element's content is overflowing its visible area, specifically in landscape orientation.
 *
 * This function determines whether the content within a given element is overflowing beyond the specified height (264 pixels),
 * and checks if the device is currently in landscape orientation. This can be useful for adjusting scroll behaviors or UI elements
 * dynamically based on the content size and screen orientation.
 *
 * @param {HTMLElement} element - The DOM element to check for content overflow.
 * @returns {boolean} - Returns `true` if the content is overflowing and the orientation is landscape; otherwise, `false`.
 * @example
 * ```js
 * // Check if an element's content is overflowing in landscape mode
 * const contentOverflowing = isOVerflowing(document.querySelector('.content'));
 * if (contentOverflowing) {
 *   console.log('Content is overflowing in landscape orientation.');
 * }
 * ```
 */
export function isOVerflowing(element) {
  const isContentOverflowing = element.scrollHeight > 264;
  const isLandscape = window.matchMedia('(orientation: landscape)').matches;
  return isContentOverflowing && isLandscape;
}
