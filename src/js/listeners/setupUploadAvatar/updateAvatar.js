import { updateProfile } from '../../API/updateProfile';
import { updateImageElements } from './updateImageElements';
import { updateInputStyles } from './updateInputStyles';

export async function updateAvatar(url) {
  try {
    const updatedProfile = await updateProfile(url);

    if (!updatedProfile) {
      console.error('Failed to update profile');
      return;
    }

    updateImageElements(url, updatedProfile.name);

    const uploadInput = document.querySelector('[data-upload="input"]');
    if (uploadInput) {
      uploadInput.value = '';
    } else {
      console.error('Upload input element not found');
    }

    updateInputStyles(true);
  } catch (error) {
    console.error('Error updating avatar:', error);
  }
}
