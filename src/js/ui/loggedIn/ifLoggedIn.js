import { getProfile } from '../../API/getProfile';
import { load } from '../../localStorage/load';
import { loggedInButton } from '../../template/loggedInButton';
import { loggedInButton2 } from '../../template/loggedInButton2';
import { navLinks } from '../../template/navLinks';
import { addBtn } from './addBtn';

const nav = document.querySelector('nav');

export async function ifLoggedIn() {
  const token = load('token');
  const profile = load('profile');

  if (token && profile) {
    await getProfile();

    addBtn();

    nav.innerHTML = '';

    document.body.append(loggedInButton2());
    nav.append(loggedInButton());

    const links = navLinks();
    nav.append(links);
  }
}
