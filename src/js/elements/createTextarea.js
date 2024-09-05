export function createTextarea(id, placeholder = '', rows = 4, ...classes) {
  const element = document.createElement('textarea');
  element.setAttribute('id', id);
  element.placeholder = placeholder;
  element.rows = rows;
  element.classList.add(...classes);
  return element;
}
