import { isValidUrl } from '../../data/isValidUrl';
import { isImageAccessible } from '../../API/isImageAccessible';
import { handleInvalidUrl } from './handleInvalidUrl';
import { updateAvatar } from './updateAvatar';

export async function handleUploadClick(event) {
  event.preventDefault();

  const uploadInput = document.querySelector('[data-upload="input"]');

  if (!uploadInput) {
    console.error('Upload input element not found');
    return;
  }

  const url = uploadInput.value.trim();

  try {
    if (!isValidUrl(url) || !(await isImageAccessible(url))) {
      handleInvalidUrl();
      return;
    }

    await updateAvatar(url);
  } catch (error) {
    console.error('Error handling upload click:', error);
    handleInvalidUrl();
  }
}
