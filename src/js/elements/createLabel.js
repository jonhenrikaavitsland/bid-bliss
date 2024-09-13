/**
 * Creates a `<label>` element with a specified `for` attribute, text content, and CSS classes.
 *
 * Generates a label element and sets the `for` attribute, which links the label to a corresponding input element.
 * It also allows adding text content and optional CSS classes.
 *
 * @param {string} [forAttribute=''] The `for` attribute of the label, linking it to an input element by ID. Defaults to an empty string.
 * @param {string} [textContent=''] The text content of the label. Defaults to an empty string.
 * @param {...string} classes Optional CSS classes to add to the label element.
 * @returns {HTMLLabelElement} The created label element with the specified attributes and classes.
 * @example
 * ```js
 * // Create a label with a `for` attribute, text content, and classes
 * const label = createLabel('nameInput', 'Name:', 'form-label', 'bold');
 * document.body.appendChild(label);
 *
 * // Create a label without a `for` attribute but with text content
 * const plainLabel = createLabel('', 'Description');
 * document.body.appendChild(plainLabel);
 * ```
 */
export function createLabel(forAttribute = '', textContent = '', ...classes) {
  const label = document.createElement('label');

  label.setAttribute('for', typeof forAttribute === 'string' ? forAttribute : '');

  label.textContent = typeof textContent === 'string' ? textContent : '';

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    label.classList.add(...validClasses);
  }

  return label;
}
