import { runModal } from '../ui/modal/runModal';

export function loginBtnListener() {
  const btn = document.querySelector(`[data-modal="loginModalOpen"]`);

  if (btn) {
    btn.addEventListener('click', () => {
      runModal(true, 'login');
    });
  }
}
