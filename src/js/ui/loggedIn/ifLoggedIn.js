import { getProfile } from '../../API/getProfile';
import { load } from '../../localStorage/load';
import { loggedInButton } from '../../template/loggedInButton';
import { navLinks } from '../../template/navLinks';
import { addBtn } from './addBtn';

const nav = document.querySelector('nav');

export async function ifLoggedIn() {
  if (load('token') && load('profile')) {
    await getProfile();
    addBtn();
    const loggedInNavMobile = loggedInButton();
    nav.innerHTML = '';
    nav.append(loggedInNavMobile);
    const links = navLinks();
    nav.append(links);
  }
}
