import { showAlert } from '../../errorHandling/showAlert';

export function handleInvalidUrl() {
  const uploadInput = document.querySelector('[data-upload="input"]');
  uploadInput.classList.add('border-2', 'border-error');
  uploadInput.classList.remove('border-correct');
  showAlert('Image URL must be a valid and accessible URL.');
}
