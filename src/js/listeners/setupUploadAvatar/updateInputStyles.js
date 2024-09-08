export function updateInputStyles(isValid) {
  const uploadInput = document.querySelector('[data-upload="input"]');
  if (isValid) {
    uploadInput.classList.remove('border-error');
    uploadInput.classList.add('border-2', 'border-correct');
  } else {
    uploadInput.classList.add('border-2', 'border-error');
    uploadInput.classList.remove('border-correct');
  }
}
