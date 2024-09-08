export function updateInputStyles(isValid) {
  const uploadInput = document.querySelector('[data-upload="input"]');

  if (!uploadInput) {
    console.error('Upload input element not found');
    return;
  }

  if (isValid) {
    if (uploadInput.classList.contains('border-error')) {
      uploadInput.classList.remove('border-error');
    }
    if (!uploadInput.classList.contains('border-2')) {
      uploadInput.classList.add('border-2');
    }
    if (!uploadInput.classList.contains('border-correct')) {
      uploadInput.classList.add('border-correct');
    }
  } else {
    if (!uploadInput.classList.contains('border-2')) {
      uploadInput.classList.add('border-2');
    }
    if (!uploadInput.classList.contains('border-error')) {
      uploadInput.classList.add('border-error');
    }
    if (uploadInput.classList.contains('border-correct')) {
      uploadInput.classList.remove('border-correct');
    }
  }
}
