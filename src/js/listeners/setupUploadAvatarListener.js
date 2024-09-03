import { updateProfile } from '../API/updateProfile';
import { isValidUrl } from '../data/isValidUrl';

export function setupUploadAvatarListener() {
  const uploadBtn = document.querySelector(`[data-upload="btn"]`);
  const uploadInput = document.querySelector(`[data-upload="input"]`);
  const avatarImage = document.querySelector(`[data-avatar="img"]`);
  const avatarBtn = document.querySelector(`[data-avatar="btn"]`);

  uploadBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const url = uploadInput.value.trim();

    if (!isValidUrl(url)) {
      uploadInput.classList.add('border-2', 'border-error');
      uploadInput.classList.remove('border-correct');
      return;
    }

    const updatedProfile = await updateProfile(url);
    if (updateProfile) {
      avatarImage.src = url;
      avatarImage.alt = updateProfile.name;
      avatarBtn.src = url;
      avatarBtn.alt = updateProfile.name;
      uploadInput.value = '';
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
