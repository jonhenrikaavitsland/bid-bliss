import { isValidUrl } from '../../data/isValidUrl';
import { resetInputStyles } from './resetInputStyles';
import { updateInputStyles } from './updateInputStyles';

export function handleInputChange() {
  const uploadInput = document.querySelector('[data-upload="input"]');

  if (!uploadInput) {
    console.error('Upload input element not found');
    return;
  }

  const url = uploadInput.value.trim();

  if (!url) {
    resetInputStyles();
    return;
  }

  updateInputStyles(isValidUrl(url));
}
