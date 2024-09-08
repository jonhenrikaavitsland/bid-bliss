export function resetInputStyles() {
  const uploadInput = document.querySelector('[data-upload="input"]');
  uploadInput.classList.remove('border-2', 'border-error', 'border-correct');
}
