export function createSection(...classes) {
  const element = document.createElement('section');
  element.classList.add(...classes);
  return element;
}
