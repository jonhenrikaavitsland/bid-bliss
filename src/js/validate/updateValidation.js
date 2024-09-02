export function updateValidation(input, isValid, messageElement, message) {
  if (isValid) {
    input.classList.remove('border-error');
    input.classList.add('border-2', 'border-correct');
    messageElement.textContent = '';
  } else {
    input.classList.remove('border-correct');
    input.classList.add('border-2', 'border-error');
    messageElement.textContent = message;
  }
}
