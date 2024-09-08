import { updateProfile } from '../../API/updateProfile';
import { updateImageElements } from './updateImageElements';
import { updateInputStyles } from './updateInputStyles';

export async function updateAvatar(url) {
  const updatedProfile = await updateProfile(url);
  if (!updatedProfile) return;

  updateImageElements(url, updatedProfile.name);
  document.querySelector('[data-upload="input"]').value = '';
  updateInputStyles(true);
}
