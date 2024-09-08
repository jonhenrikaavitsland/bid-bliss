import { isValidUrl } from '../../data/isValidUrl';
import { isImageAccessible } from '../../API/isImageAccessible';
import { handleInvalidUrl } from './handleInvalidUrl';
import { updateAvatar } from './updateAvatar';

export async function handleUploadClick(event) {
  event.preventDefault();
  const uploadInput = document.querySelector('[data-upload="input"]');
  const url = uploadInput.value.trim();

  if (!isValidUrl(url) || !(await isImageAccessible(url))) {
    handleInvalidUrl();
    return;
  }

  await updateAvatar(url);
}
