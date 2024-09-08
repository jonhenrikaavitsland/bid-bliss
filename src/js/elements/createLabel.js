export function createLabel(forAttribute = '', textContent = '', ...classes) {
  const label = document.createElement('label');

  label.setAttribute('for', typeof forAttribute === 'string' ? forAttribute : '');

  label.textContent = typeof textContent === 'string' ? textContent : '';

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    label.classList.add(...validClasses);
  }

  return label;
}
