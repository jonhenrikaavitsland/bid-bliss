export function createTextarea(placeholder = '', rows = 4, ...classes) {
  const element = document.createElement('textarea');
  element.placeholder = placeholder;
  element.rows = rows;
  element.classList.add(...classes);
  return element;
}
