import { createBtn } from '../../elements/createBtn';
import { runModal } from '../modal/runModal';

export function addBtn() {
  const btnParent = document.querySelector(`[data-buttons="newAuction"]`);

  const btn = createBtn('new auction', 'py-3', 'px-4', 'md:py-3', 'md:px-6', 'md:text-lg', 'text-white', 'bg-primary', 'hover:bg-hoverPrimary', 'rounded-xl', 'uppercase', 'font-serif', 'font-medium', 'lg:hidden');
  btn.addEventListener('click', () => {
    runModal(true, 'newListing');
  });

  btnParent.append(btn);
  btnParent.classList.add('justify-between', 'flex-wrap', 'gap-5');
}
