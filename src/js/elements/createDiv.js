export function createDiv(...classes) {
  const div = document.createElement('div');

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    div.classList.add(...validClasses);
  }

  return div;
}
