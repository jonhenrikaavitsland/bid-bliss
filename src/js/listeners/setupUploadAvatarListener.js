import { updateProfile } from '../API/updateProfile';
import { isValidUrl } from '../data/isValidUrl';

export function setupUploadAvatarListener() {
  const uploadBtn = document.querySelector(`[data-upload-btn]`);
  const uploadInput = document.querySelector(`[data-upload-input]`);

  uploadBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const url = uploadInput.value.trim();

    if (!isValidUrl(url)) {
      uploadInput.classList.add('border-2', 'border-error');
      uploadInput.classList.remove('border-correct');
      return;
    }

    const success = await updateProfile(url);
    if (success) {
      uploadInput.classList.remove('border-error');
      uploadInput.classList.add('border-2', 'border-correct');
    }
  });

  uploadInput.addEventListener('input', () => {
    const url = uploadInput.value.trim();

    if (isValidUrl(url)) {
      uploadInput.classList.remove('border-error');
      uploadInput.classList.add('border-2', 'border-correct');
    } else {
      uploadInput.classList.add('border-2', 'border-error');
      uploadInput.classList.remove('border-correct');
    }
  });
}
