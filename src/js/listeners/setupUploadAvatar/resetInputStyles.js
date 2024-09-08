export function resetInputStyles() {
  const uploadInput = document.querySelector('[data-upload="input"]');

  if (!uploadInput) {
    console.error('Upload input element not found');
    return;
  }

  uploadInput.classList.remove('border-2', 'border-error', 'border-correct');
}
