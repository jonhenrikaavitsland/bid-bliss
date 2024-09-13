import { isValidInputType } from '../validate/isValidInputType';

/**
 * Creates an `<input>` element with specified type, placeholder, ID, and CSS classes.
 *
 * Validates the provided input type and sets it, defaulting to 'text' if invalid.
 * Allows setting the placeholder text, ID, and optional CSS classes for the input element.
 *
 * @param {string} [type='text'] The type of the input (e.g., 'text', 'password', 'email'). Defaults to 'text' if invalid.
 * @param {string} [placeholder=''] The placeholder text for the input. Defaults to an empty string.
 * @param {string} [id=''] The ID attribute for the input. Defaults to an empty string.
 * @param {...string} classes Optional CSS classes to add to the input element.
 * @returns {HTMLInputElement} The created input element with the specified attributes and classes.
 * @example
 * ```js
 * // Create a text input with a placeholder, ID, and classes
 * const input = createInput('text', 'Enter your name', 'nameInput', 'input', 'form-control');
 * document.body.appendChild(input);
 *
 * // Create an email input with invalid type fallback and classes
 * const emailInput = createInput('invalid-type', 'Enter your email', 'emailInput', 'input-email');
 * document.body.appendChild(emailInput); // Type defaults to 'text'
 * ```
 */
export function createInput(type = 'text', placeholder = '', id = '', ...classes) {
  const input = document.createElement('input');

  input.type = isValidInputType(type) ? type : 'text';

  input.placeholder = typeof placeholder === 'string' ? placeholder : '';
  input.id = typeof id === 'string' ? id : '';

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    input.classList.add(...validClasses);
  }

  return input;
}
