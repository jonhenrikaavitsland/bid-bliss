import { createBtn } from '../../elements/createBtn';

export function addBtn() {
  const btnParent = document.querySelector(`[data-buttons="newAuction"]`);

  const btn = createBtn('new auction', 'py-3', 'px-4', 'md:py-3', 'md:px-6', 'text-neutralBg', 'bg-primary', 'hover:bg-hoverPrimary', 'rounded-xl', 'uppercase', 'font-serif', 'font-medium', 'lg:hidden');

  btnParent.append(btn);
  btnParent.classList.add('justify-between', 'flex-wrap', 'gap-5');
}
