/**
 * Creates a `<div>` element with specified CSS classes.
 *
 * Generates a `div` element and optionally adds valid CSS classes passed as arguments.
 * Filters out any non-string or empty classes before adding them to the `div`.
 *
 * @param {...string} classes Optional CSS classes to add to the `div` element.
 * @returns {HTMLDivElement} The created `div` element with the specified classes.
 * @example
 * ```js
 * // Create a div with multiple classes
 * const div = createDiv('container', 'flex', 'responsive');
 * document.body.appendChild(div);
 *
 * // Create a div without any classes
 * const plainDiv = createDiv();
 * document.body.appendChild(plainDiv);
 * ```
 */
export function createDiv(...classes) {
  const div = document.createElement('div');

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    div.classList.add(...validClasses);
  }

  return div;
}
