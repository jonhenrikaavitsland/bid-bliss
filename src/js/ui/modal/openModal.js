import { closeModal } from './closeModal.js';
import { modal } from '../../data/constants.js';

export function openModal(target) {
  if (!target) closeModal(modal);

  modal.classList.remove('hidden');
  modal.classList.add('flex', 'items-center', 'justify-center', 'px-5');
  modal.append(target);
}
