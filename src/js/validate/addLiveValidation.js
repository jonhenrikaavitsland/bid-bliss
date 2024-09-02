import { MSG_Email, MSG_Password } from '../data/constants';
import { updateValidation } from './updateValidation';
import { validateEmail } from './validateEmail';
import { validatePassword } from './validatePassword';

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
