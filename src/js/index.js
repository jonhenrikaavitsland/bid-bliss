import { loginModal } from '../template/loginModal';
import { openModal } from './ui/modal/openModal';

let state = true;

const login = loginModal();

if (state === true) {
  openModal(login);
}
