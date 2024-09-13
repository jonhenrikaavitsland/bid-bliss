/**
 * Creates a `<ul>` (unordered list) element with specified CSS classes.
 *
 * Generates an unordered list element and adds any valid CSS classes passed as arguments.
 * Filters out non-string or empty classes before adding them to the element.
 *
 * @param {...string} classes Optional CSS classes to add to the `<ul>` element.
 * @returns {HTMLUListElement} The created unordered list element with the specified classes.
 * @example
 * ```js
 * // Create a ul with multiple classes
 * const ul = createUl('list', 'styled-list', 'responsive');
 * document.body.appendChild(ul);
 *
 * // Create a ul without any classes
 * const plainUl = createUl();
 * document.body.appendChild(plainUl);
 * ```
 */
export function createUl(...classes) {
  const element = document.createElement('ul');

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    element.classList.add(...validClasses);
  }

  return element;
}
