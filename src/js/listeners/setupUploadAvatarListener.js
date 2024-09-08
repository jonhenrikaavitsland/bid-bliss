import { handleInputChange } from './setupUploadAvatar/handleInputChange';
import { handleUploadClick } from './setupUploadAvatar/handleUploadClick';

export function setupUploadAvatarListener() {
  const uploadBtn = document.querySelector('[data-upload="btn"]');
  const uploadInput = document.querySelector('[data-upload="input"]');

  uploadBtn.addEventListener('click', handleUploadClick);
  uploadInput.addEventListener('input', handleInputChange);
}
