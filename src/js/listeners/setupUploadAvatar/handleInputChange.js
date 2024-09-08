import { isValidUrl } from '../../data/isValidUrl';
import { resetInputStyles } from './resetInputStyles';
import { updateInputStyles } from './updateInputStyles';

export function handleInputChange() {
  const uploadInput = document.querySelector('[data-upload="input"]');
  const url = uploadInput.value.trim();

  if (!url) {
    resetInputStyles();
    return;
  }

  updateInputStyles(isValidUrl(url));
}
