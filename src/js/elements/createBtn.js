/**
 * Creates a `<button>` element with specified text content and CSS classes.
 *
 * Generates a button element with the provided text content and optional CSS classes.
 * Filters out invalid or empty classes before adding them to the button.
 *
 * @param {string} [textContent=''] The text content for the button. Defaults to an empty string. If not a string, defaults to 'Button'.
 * @param {...string} classes Optional CSS classes to add to the button element.
 * @returns {HTMLButtonElement} The created button element with specified text content and classes.
 * @example
 * ```js
 * // Create a button with text and multiple classes
 * const button = createBtn('Click Me', 'btn', 'btn-primary');
 * document.body.appendChild(button);
 *
 * // Create a button with default text and no classes
 * const defaultButton = createBtn();
 * document.body.appendChild(defaultButton);
 * ```
 */
export function createBtn(textContent = '', ...classes) {
  const button = document.createElement('button');

  button.textContent = typeof textContent === 'string' ? textContent : 'Button';

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    button.classList.add(...validClasses);
  }

  return button;
}
