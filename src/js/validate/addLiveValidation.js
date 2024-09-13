import { MSG_Email, MSG_Password } from '../data/constants';
import { updateValidation } from './updateValidation';
import { validateEmail } from './validateEmail';
import { validatePassword } from './validatePassword';

/**
 * Adds live validation to form fields for email and password, updating messages based on input.
 *
 * This function sets up event listeners on the email and password fields within a form, validating the inputs in real-time
 * as the user types or when the input loses focus. It updates the validation messages according to the input validity.
 *
 * @param {HTMLFormElement} form The form element containing email and password fields to validate.
 * @returns {void} No return value; attaches event listeners and updates the DOM with validation feedback.
 * @example
 * ```js
 * // Add live validation to a login or registration form
 * const formElement = document.querySelector('#myForm');
 * addLiveValidation(formElement);
 * ```
 */
export function addLiveValidation(form) {
  const emailInput = form.querySelector('#email');
  const passwordInput = form.querySelector('#password');
  const emailMessage = form.querySelector('[data-validate="email"]');
  const passwordMessage = form.querySelector('[data-validate="password"]');

  emailInput.addEventListener('input', () => {
    updateValidation(emailInput, validateEmail(emailInput.value), emailMessage, MSG_Email);
  });

  emailInput.addEventListener('blur', () => {
    updateValidation(emailInput, validateEmail(emailInput.value), emailMessage, MSG_Email);
  });

  passwordInput.addEventListener('input', () => {
    updateValidation(passwordInput, validatePassword(passwordInput.value), passwordMessage, MSG_Password);
  });

  passwordInput.addEventListener('blur', () => {
    updateValidation(passwordInput, validatePassword(passwordInput.value), passwordMessage, MSG_Password);
  });
}
