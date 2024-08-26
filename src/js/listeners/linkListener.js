import { modal } from '../data/constants.js';
import { runModal } from '../ui/modal/runModal.js';

export function linkListener(target) {
  const currentModalLink = modal.querySelector('a');

  if (!currentModalLink) return;

  currentModalLink.addEventListener('click', () => {
    if (target === 'login') {
      modal.innerHTML = '';
      runModal(true, 'register');
    } else if (target === 'register') {
      modal.innerHTML = '';
      runModal(true, 'login');
    }
  });
}
