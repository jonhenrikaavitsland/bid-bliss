import { gatherUserData } from '../ui/login Form/gatherUserData';
import { validateEmail } from './validateEmail';
import { validatePassword } from './validatePassword';

const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

export function validateCredentials(target) {
  const form = document.querySelector(`[data-api="${target}"]`);
  emailInput.addEventListener('input', validateEmail);
  emailInput.addEventListener('blur', validateEmail);
  passwordInput.addEventListener('input', validatePassword);
  passwordInput.addEventListener('blur', validatePassword);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isFormValid = form.checkValidity();
    const isEmailValid = !emailInput.validationMessage;
    const isPasswordValid = !passwordInput.validationMessage;

    if (isFormValid && isEmailValid && isPasswordValid) {
      gatherUserData();
    }
  });
}
