import { MSG_Email, REG_Email } from '../data/constants';

export function validateEmail() {
  const validateContainer = document.querySelector(`[data-validate="email"]`);
  const email = document.querySelector(`input[type="email"]`);
  const emailInput = email.value.trim();
  let validationMessage = '';

  if (!REG_Email.test(emailInput)) {
    validationMessage = MSG_Email;
    emailInput.setCustomValidity(validationMessage);
  } else {
    emailInput.setCustomValidity('');
  }

  validateContainer.textContent = validationMessage;
  validateContainer.style.display ? 'block' : 'none';
}
