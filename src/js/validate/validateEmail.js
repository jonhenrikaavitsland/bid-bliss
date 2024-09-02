import { MSG_email, REG_email } from '../data/constants';

export function validateEmail(target) {
  const validateContainer = document.querySelector(`[data-validate="${target}"]`);
  const email = document.querySelector(`input[type="email"]`);
  const emailInput = email.value.trim();
  let validationMessage = '';

  const emailPattern = REG_email;
  if (!emailPattern.test(emailInput)) {
    validationMessage = MSG_email;
    emailInput.setCustomValidity(validationMessage);
  } else {
    emailInput.setCustomValidity('');
  }

  validateContainer.textContent = validationMessage;
  validateContainer.style.display ? 'block' : 'none';
}
