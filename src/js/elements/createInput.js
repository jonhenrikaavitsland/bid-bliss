export function createInput(type = 'text', placeholder = '', id = '', ...classes) {
  const input = document.createElement('input');
  input.type = type;
  input.placeholder = placeholder;
  input.id = id;
  input.classList.add(...classes);
  return input;
}
