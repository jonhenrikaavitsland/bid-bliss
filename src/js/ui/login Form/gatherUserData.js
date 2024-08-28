import { loginUser } from '../../API/loginUser';
import { registerUser } from '../../API/registerUser';
import { modal } from '../../data/constants';
import { runModal } from '../modal/runModal';

export async function gatherUserData() {
  const loginForm = document.querySelector(`[data-api="login"]`);
  const registerForm = document.querySelector(`[data-api="register"]`);
  if (registerForm) {
    console.log(registerForm);
    registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = event.target.email.value.replace(/@.*$/, '');
      const email = event.target.email.value;
      const password = event.target.password.value;

      await registerUser(name, email, password);
      modal.innerHTML = '';
      runModal(true, 'login');
    });
  }
  if (loginForm) {
    console.log(loginForm);
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = event.target.email.value;
      const password = event.target.password.value;

      await loginUser(email, password);

      window.location.href = '/';
    });
  }
}
