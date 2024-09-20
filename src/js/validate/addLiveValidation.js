import { MSG_Email, MSG_Password } from '../data/constants';
import { updatePasswordCounter } from './updatePassword';
import { updateValidation } from './updateValidation';
import { validateEmail } from './validateEmail';

/**
 * Adds live validation and character count updates to the email and password fields in a form.
 *
 * This function sets up event listeners for real-time validation of an email input and a password
 * input. It updates the validation message for the email field based on whether the entered email is valid.
 * Additionally, it updates a character count display for the password input, changing its color based on
 * the length of the password.
 *
 * @param {HTMLFormElement} form - The form element containing the email and password fields.
 * @example
 * const formElement = document.querySelector('form');
 * addLiveValidation(formElement);
 */
export function addLiveValidation(form) {
  const emailInput = form.querySelector('#email');
  const passwordInput = form.querySelector('#password');
  const emailMessage = form.querySelector('[data-validate="email"]');
  const passwordCounter = form.querySelector(`[data-counter="password"]`);

  emailInput.addEventListener('input', () => {
    updateValidation(emailInput, validateEmail(emailInput.value), emailMessage, MSG_Email);
  });

  emailInput.addEventListener('blur', () => {
    updateValidation(emailInput, validateEmail(emailInput.value), emailMessage, MSG_Email);
  });

  passwordInput.addEventListener('input', () => {
    updatePasswordCounter(passwordInput, passwordCounter);
  });

  passwordInput.addEventListener('blur', () => {
    updatePasswordCounter(passwordInput, passwordCounter);
  });
}
