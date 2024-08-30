export function createLi(...classes) {
  const element = document.createElement('li');
  element.classList.add(...classes);
  return element;
}
