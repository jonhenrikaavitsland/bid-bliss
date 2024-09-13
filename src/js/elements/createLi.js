/**
 * Creates an `<li>` (list item) element with specified CSS classes.
 *
 * Generates a list item element and adds any valid CSS classes passed as arguments.
 * Filters out any non-string or empty classes before adding them to the element.
 *
 * @param {...string} classes Optional CSS classes to add to the `<li>` element.
 * @returns {HTMLLIElement} The created list item element with the specified classes.
 * @example
 * ```js
 * // Create a list item with multiple classes
 * const listItem = createLi('item', 'highlight', 'active');
 * document.body.appendChild(listItem);
 *
 * // Create a list item without any classes
 * const plainListItem = createLi();
 * document.body.appendChild(plainListItem);
 * ```
 */
export function createLi(...classes) {
  const element = document.createElement('li');

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    element.classList.add(...validClasses);
  }

  return element;
}
