export function createBtn(textContent = '', ...classes) {
  const button = document.createElement('button');

  button.textContent = typeof textContent === 'string' ? textContent : 'Button';

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    button.classList.add(...validClasses);
  }

  return button;
}
