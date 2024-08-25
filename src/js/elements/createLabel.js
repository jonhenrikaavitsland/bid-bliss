export function createLabel(forAttribute, textContent, ...classes) {
  const label = document.createElement('label');
  label.setAttribute('for', forAttribute);
  label.textContent = textContent;
  label.classList.add(...classes);
  return label;
}
