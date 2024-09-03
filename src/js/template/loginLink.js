import { createBtn } from '../elements/createBtn';
import { createDiv } from '../elements/createDiv';

export function loginLink() {
  const element = createDiv('flex', 'flex-col', 'lg:justify-center');

  const btn = createBtn('Login', 'font-serif', 'text-neutralBg', 'font-medium', 'uppercase', 'py-2', 'px-4', 'hover:hoverPrimary', 'rounded-xl', 'md:text-lg', 'md:py-3', 'md:px-6', 'lg:text-xl');
  btn.setAttribute('data-modal', 'loginModalOpen');

  element.append(btn);

  return element;
}
