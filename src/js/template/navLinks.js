import { createBtn } from '../elements/createBtn';
import { createLi } from '../elements/createLi';
import { createUl } from '../elements/createUl';
import { logout } from '../ui/logoutBtn/logout';
import { runModal } from '../ui/modal/runModal';

export function navLinks() {
  const element = createUl('hidden', 'lg:flex', 'order-first', 'font-serif', 'gap-5', 'text-white', 'text-xl');

  const links = ['new auction', 'profile', 'logout'];

  links.forEach((btn, index) => {
    const buttonWrap = createLi();
    const button = createBtn(btn, 'uppercase', 'py-3', 'px-6', 'hover:bg-hoverPrimary', 'rounded-xl');

    button.setAttribute('data-nav', index);

    switch (btn) {
      case 'profile':
        button.addEventListener('click', () => runModal(true, 'profile'));
        break;
      case 'new auction':
        button.addEventListener('click', () => runModal(true, 'newListing'));
        break;
      case 'logout':
        button.addEventListener('click', logout);
        break;
    }

    buttonWrap.append(button);
    element.append(buttonWrap);
  });

  return element;
}
