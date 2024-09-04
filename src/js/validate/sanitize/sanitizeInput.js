import { createDiv } from '../../elements/createDiv';

export function sanitizeInput(input) {
  const div = createDiv();
  div.innerText = input;
  return div.innerHTML;
}
