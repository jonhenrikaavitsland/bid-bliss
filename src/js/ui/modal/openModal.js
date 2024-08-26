import { closeModal } from './closeModal';

export function openModal(target) {
  const modal = document.querySelector(`[data-modal="modalObject"]`);

  if (!target) closeModal();

  modal.classList.remove('hidden');
  modal.classList.add('flex', 'items-center', 'justify-center', 'px-5');
  modal.append(target);
}
