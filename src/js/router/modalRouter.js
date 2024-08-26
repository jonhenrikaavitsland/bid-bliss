import { loginModal } from '../template/loginModal.js';
import { registerModal } from '../template/registerModal.js';

export function modalRouter(modalValue) {
  const modalLogin = loginModal();
  const modalRegister = registerModal();

  switch (modalValue) {
    case 'login':
      return modalLogin;
    case 'register':
      return modalRegister;
    default:
      throw console.error('No modal were matched in the router!');
  }
}
