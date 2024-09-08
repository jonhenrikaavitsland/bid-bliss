import { isValidInputType } from '../validate/isValidInputType';

export function createInput(type = 'text', placeholder = '', id = '', ...classes) {
  const input = document.createElement('input');

  input.type = isValidInputType(type) ? type : 'text';

  input.placeholder = typeof placeholder === 'string' ? placeholder : '';
  input.id = typeof id === 'string' ? id : '';

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    input.classList.add(...validClasses);
  }

  return input;
}
