export function createUl(...classes) {
  const element = document.createElement('ul');
  element.classList.add(...classes);
  return element;
}
