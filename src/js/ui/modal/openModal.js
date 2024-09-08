import { closeModal } from './closeModal.js';
import { modal } from '../../data/constants.js';

export function openModal(target) {
  if (!target) {
    closeModal(modal);
    return;
  }

  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  modal.classList.remove('hidden');
  modal.classList.add('flex', 'items-center', 'justify-center', 'px-5');

  modal.style.top = `${scrollPosition}px`;
  document.body.classList.add('overflow-hidden');

  modal.append(target);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
}
