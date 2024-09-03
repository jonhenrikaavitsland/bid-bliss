import { createBtn } from '../elements/createBtn';
import { createImg } from '../elements/createImg';
import { load } from '../localStorage/load';
import { save } from '../localStorage/save';
import { runModal } from '../ui/modal/runModal';

export function loggedInButton2() {
  const profile = load('profile');
  const element = createBtn('', 'fixed', 'z-10', 'bottom-5', 'right-5', 'w-20', 'lg:hidden', 'border-2', 'border-white', 'rounded-full', 'md:bottom-8', 'md:right-8');
  if (!load('pulse')) element.classList.add('animate-pulse');
  element.addEventListener('click', () => {
    runModal(true, 'profile');
    element.classList.remove('animate-pulse');
    save('pulse', true);
  });

  const img = createImg(profile.avatar.url, profile.avatar.alt, 'rounded-full', 'shadow-customShadow');
  img.setAttribute('data-avatar', 'btn');

  element.append(img);
  return element;
}
