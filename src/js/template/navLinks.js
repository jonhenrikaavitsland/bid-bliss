import { createBtn } from '../elements/createBtn';
import { createLi } from '../elements/createLi';
import { createUl } from '../elements/createUl';
import { logout } from '../ui/logoutBtn/logout';
import { runModal } from '../ui/modal/runModal';

export function navLinks() {
  const element = createUl('hidden', 'lg:flex', 'order-first', 'font-serif', 'gap-5', 'text-white', 'text-xl');

  const links = ['new auction', 'profile', 'logout'];

  links.forEach((btn, index) => {
    const ButtonWrap = createLi();
    const button = createBtn(btn, 'uppercase', 'py-3', 'px-6', 'hover:bg-hoverPrimary', 'rounded-xl');
    button.setAttribute('data-nav', index);
    if (btn === 'profile') {
      button.addEventListener('click', () => runModal(true, 'profile'));
    } else if (btn === 'new auction') {
      button.addEventListener('click', () => runModal(true, 'newListing'));
    } else if (btn === 'logout') {
      button.addEventListener('click', () => logout());
    }
    ButtonWrap.append(button);
    element.append(ButtonWrap);
  });

  return element;
}
