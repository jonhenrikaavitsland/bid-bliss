/**
 * Checks if the content within an element is overflowing beyond a specified pixel height in landscape orientation.
 *
 * This function determines whether the content of the specified element exceeds a given pixel height threshold
 * and checks if the screen orientation is landscape. The function returns true if both conditions are met,
 * indicating that the element's content is overflowing in landscape orientation.
 *
 * @param {HTMLElement} element - The element to check for content overflow.
 * @param {number} px - The pixel threshold to determine if the content is overflowing.
 * @returns {boolean} - Returns `true` if the content is overflowing beyond the specified height in landscape orientation; otherwise, returns `false`.
 * @example
 * // Checks if the content overflows 300px in landscape mode
 * const isOverflow = isOVerflowing(document.getElementById('contentBox'), 300);
 * console.log(isOverflow); // Output: true or false
 */
export function isOVerflowing(element, px) {
  const isContentOverflowing = element.scrollHeight > +px;
  const isLandscape = window.matchMedia('(orientation: landscape)').matches;
  return isContentOverflowing && isLandscape;
}
