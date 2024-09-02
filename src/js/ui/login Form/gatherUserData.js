import { loginUser } from '../../API/loginUser';
import { registerUser } from '../../API/registerUser';
import { modal, MSG_Email, MSG_Password } from '../../data/constants';
import { addLiveValidation } from '../../validate/addLiveValidation';
import { updateValidation } from '../../validate/updateValidation';
import { validateEmail } from '../../validate/validateEmail';
import { validatePassword } from '../../validate/validatePassword';
import { runModal } from '../modal/runModal';

export async function gatherUserData() {
  const loginForm = document.querySelector(`[data-api="login"]`);
  const registerForm = document.querySelector(`[data-api="register"]`);
  const emailMessage = modal.querySelector(`[data-validate="email"]`);
  const passwordMessage = modal.querySelector(`[data-validate="password"]`);
  let isEmailValid;
  let isPasswordValid;

  if (registerForm) {
    addLiveValidation(registerForm);
    registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = event.target.email.value.replace(/@.*$/, '');
      const email = event.target.email.value;
      const password = event.target.password.value;

      isEmailValid = validateEmail(email);
      isPasswordValid = validatePassword(password);

      updateValidation(event.target.email, isEmailValid, emailMessage, MSG_Email);

      updateValidation(event.target.password, isPasswordValid, passwordMessage, MSG_Password);

      if (!isEmailValid || !isPasswordValid) {
        return;
      }

      await registerUser(name, email, password);
      modal.innerHTML = '';
      runModal(true, 'login');
    });
  }
  if (loginForm) {
    addLiveValidation(loginForm);
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = event.target.email.value;
      const password = event.target.password.value;

      isEmailValid = validateEmail(email);
      isPasswordValid = validatePassword(password);

      updateValidation(event.target.email, isEmailValid, emailMessage, MSG_Email);

      updateValidation(event.target.password, isPasswordValid, passwordMessage, MSG_Password);

      if (!isEmailValid || !isPasswordValid) {
        return;
      }

      await loginUser(email, password);

      window.location.href = '/';
    });
  }
}
