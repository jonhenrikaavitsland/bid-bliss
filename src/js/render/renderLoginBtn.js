import { load } from '../localStorage/load';
import { loginLink } from '../template/loginLink';

export function renderLoginBtn() {
  const profile = load('profile');
  const token = load('token');

  if (profile || token) {
    return;
  }

  const nav = document.querySelector('nav');

  if (!nav) {
    console.error('Navigation element not found');
    return;
  }

  if (nav.querySelector('[data-login="link"]')) {
    console.warn('Login link already exists');
    return;
  }

  const link = loginLink();
  nav.append(link);
}
