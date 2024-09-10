import { placeholderImg } from '../data/images';
import { createBtn } from '../elements/createBtn';
import { createImg } from '../elements/createImg';
import { load } from '../localStorage/load';
import { save } from '../localStorage/save';
import { runModal } from '../ui/modal/runModal';

export function loggedInButton2() {
  const profile = load('profile');

  if (!profile || typeof profile !== 'object' || !profile.avatar) {
    console.error('Profile data is not available or is invalid.');
    return createBtn('Profile Error', 'fixed', 'z-10', 'bottom-5', 'right-5', 'w-20', 'lg:hidden', 'border-2', 'border-white', 'rounded-full', 'md:bottom-8', 'md:right-8');
  }

  const { url: avatarUrl = placeholderImg, alt: avatarAlt = 'User avatar' } = profile.avatar;

  const element = createBtn('', 'fixed', 'z-10', 'bottom-5', 'right-5', 'w-20', 'lg:hidden', 'border-2', 'border-white', 'rounded-full', 'md:bottom-8', 'md:right-8', 'aspect-square', 'object-cover', 'overflow-hidden', 'object-center');

  if (!load('pulse')) {
    element.classList.add('animate-pulse');
  }

  element.addEventListener('click', () => {
    runModal(true, 'profile');
    element.classList.remove('animate-pulse');
    save('pulse', true);
  });

  const img = createImg(avatarUrl, avatarAlt, 'rounded-full', 'shadow-customShadow');
  img.setAttribute('data-avatar', 'btn');

  element.append(img);
  return element;
}
