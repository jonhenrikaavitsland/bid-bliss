import { load } from '../localStorage/load';
import { handleLoginBtnClick } from './handleLoginBtnClick';

export function loginBtnListener() {
  const profile = load('profile');
  const token = load('token');

  if (profile && token) {
    return;
  }

  const loginButton = document.querySelector(`[data-modal="loginModalOpen"]`);

  if (!loginButton) {
    console.warn('Login button not found');
    return;
  }

  loginButton.addEventListener('click', handleLoginBtnClick);
}
