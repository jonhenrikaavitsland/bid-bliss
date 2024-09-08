import { modal } from '../data/constants.js';
import { runModal } from '../ui/modal/runModal.js';

export function linkListener(target) {
  const currentModalLink = modal.querySelector('a');

  if (!currentModalLink) return;

  const handleClick = () => {
    currentModalLink.classList.add('pointer-events-none');

    modal.innerHTML = '';

    if (target === 'login') {
      runModal(true, 'register');
    } else if (target === 'register') {
      runModal(true, 'login');
    }

    currentModalLink.removeEventListener('click', handleClick);

    setTimeout(() => {
      currentModalLink.classList.remove('pointer-events-none');
    }, 1000);
  };

  currentModalLink.addEventListener('click', handleClick);
}
