export function createLi(...classes) {
  const element = document.createElement('li');

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    element.classList.add(...validClasses);
  }

  return element;
}
