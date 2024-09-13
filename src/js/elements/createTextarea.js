/**
 * Creates a `<textarea>` element with specified attributes and CSS classes.
 *
 * Generates a textarea element with the provided ID, placeholder text, number of rows, and optional CSS classes.
 * Ensures that the ID is a non-empty string, the placeholder is a string, and the rows value is a positive integer.
 *
 * @param {string} [id=''] The ID attribute for the textarea. Defaults to an empty string if not valid.
 * @param {string} [placeholder=''] The placeholder text for the textarea. Defaults to an empty string.
 * @param {number} [rows=4] The number of rows for the textarea. Defaults to 4 if not a valid positive integer.
 * @param {...string} classes Optional CSS classes to add to the textarea element.
 * @returns {HTMLTextAreaElement} The created textarea element with the specified attributes and classes.
 * @example
 * ```js
 * // Create a textarea with an ID, placeholder, specific rows, and classes
 * const textarea = createTextarea('commentBox', 'Enter your comment...', 6, 'textarea', 'form-control');
 * document.body.appendChild(textarea);
 *
 * // Create a textarea without an ID but with placeholder and classes
 * const simpleTextarea = createTextarea('', 'Type here...', 3, 'simple-textarea');
 * document.body.appendChild(simpleTextarea);
 * ```
 */
export function createTextarea(id = '', placeholder = '', rows = 4, ...classes) {
  const element = document.createElement('textarea');

  element.id = typeof id === 'string' && id.trim() !== '' ? id : '';

  element.placeholder = typeof placeholder === 'string' ? placeholder : '';

  element.rows = Number.isInteger(rows) && rows > 0 ? rows : 4;

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    element.classList.add(...validClasses);
  }

  return element;
}
