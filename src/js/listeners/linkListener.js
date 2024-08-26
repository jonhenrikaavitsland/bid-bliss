import { modal } from '../data/constants.js';
import { runModal } from '../ui/modal/runModal.js';

export function linkListener(target) {
  const currentModal = modal.querySelector('a');
  currentModal.addEventListener('click', () => {
    if (target === 'login') {
      modal.innerHTML = '';
      runModal(true, 'register');
    } else if (target === 'register') {
      modal.innerHTML = '';
      runModal(true, 'login');
    }
  });
}
