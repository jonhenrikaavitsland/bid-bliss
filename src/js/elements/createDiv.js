export function createDiv(...classes) {
  const div = document.createElement('div');
  div.classList.add(...classes);
  return div;
}
