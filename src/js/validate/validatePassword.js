import { MSG_Password, REG_Password } from '../data/constants';

export function validatePassword(target) {
  const validateContainer = document.querySelector(`[data-validate="${target}"]`);
  const password = document.querySelector(`input[type="password"]`);
  const passwordInput = password.value.trim();
  let validationMessage = '';

  if (password.length < 8 || REG_Password.test(passwordInput)) {
    validationMessage = MSG_Password;
    passwordInput.setCustomValidity(validationMessage);
  } else {
    passwordInput.setCustomValidity('');
  }

  validateContainer.textContent = validationMessage;
  validateContainer.style.display ? 'block' : 'none';
}
