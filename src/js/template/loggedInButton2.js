import { createBtn } from '../elements/createBtn';
import { createImg } from '../elements/createImg';
import { load } from '../localStorage/load';
import { runModal } from '../ui/modal/runModal';

export function loggedInButton2() {
  const profile = load('profile');
  const element = createBtn('', 'fixed', 'z-10', 'bottom-5', 'right-5', 'w-14', 'lg:hidden', 'border-2', 'border-white', 'rounded-full', 'md:bottom-8', 'md:right-8');
  element.addEventListener('click', () => {
    runModal(true, 'profile');
  });

  const img = createImg(profile.avatar.url, profile.avatar.alt, 'rounded-full', 'shadow-customShadow');

  element.append(img);
  return element;
}
