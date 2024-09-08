import { handleLoginBtnClick } from './handleLoginBtnClick';

export function loginBtnListener() {
  const loginButton = document.querySelector(`[data-modal="loginModalOpen"]`);

  if (!loginButton) {
    console.warn('Login button not found');
    return;
  }

  loginButton.addEventListener('click', handleLoginBtnClick);
}
