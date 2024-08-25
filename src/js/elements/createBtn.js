export function createBtn(textContent, ...classes) {
  const button = document.createElement('button');
  button.textContent = textContent;
  button.classList.add(...classes);
  return button;
}
