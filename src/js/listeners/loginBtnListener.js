import { runModal } from '../ui/modal/runModal';

export function loginBtnListener() {
  const btn = document.querySelector(`[data-modal="loginModalOpen"]`);
  console.log(btn);

  btn.addEventListener('click', () => {
    runModal(true, 'login');
  });
}
