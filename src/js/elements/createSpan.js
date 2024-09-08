export function createSpan(textContent = '', ...classes) {
  const span = document.createElement('span');

  span.textContent = typeof textContent === 'string' ? textContent : '';

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    span.classList.add(...validClasses);
  }

  return span;
}
