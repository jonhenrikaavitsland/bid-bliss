import { load } from '../localStorage/load';
import { loginLink } from '../template/loginLink';

export function renderLoginBtn() {
  if (!load('profile') && !load('token')) {
    const link = loginLink();
    document.querySelector('nav').append(link);
  }
}
