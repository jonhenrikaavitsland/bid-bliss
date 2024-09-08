import { handleInputChange } from './setupUploadAvatar/handleInputChange';
import { handleUploadClick } from './setupUploadAvatar/handleUploadClick';

export function setupUploadAvatarListener() {
  const uploadButton = document.querySelector('[data-upload="btn"]');
  const uploadInput = document.querySelector('[data-upload="input"]');

  if (uploadButton) {
    uploadButton.removeEventListener('click', handleUploadClick); // Remove existing listener
    uploadButton.addEventListener('click', handleUploadClick); // Add new listener
  } else {
    console.error('Upload button not found');
  }

  if (uploadInput) {
    uploadInput.removeEventListener('input', handleInputChange); // Remove existing listener
    uploadInput.addEventListener('input', handleInputChange); // Add new listener
  } else {
    console.error('Upload input not found');
  }
}
