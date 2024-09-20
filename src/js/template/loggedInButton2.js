import { placeholderImg } from '../data/images';
import { createBtn } from '../elements/createBtn';
import { createImg } from '../elements/createImg';
import { load } from '../localStorage/load';
import { save } from '../localStorage/save';
import { runModal } from '../ui/modal/runModal';

/**
 * Creates and returns a button element for mobile view displaying the logged-in user's avatar.
 *
 * This function constructs a fixed button with the user's avatar image, which triggers the profile modal when clicked.
 * If the profile data is invalid or missing, it returns a button indicating an error. The button has an initial pulse animation
 * that stops once clicked, indicating user interaction.
 *
 * @returns {HTMLElement} The constructed button element displaying the user's avatar or an error button if the profile data is invalid.
 * @example
 * ```js
 * // Create a logged-in button for mobile and append it to the document
 * const button = loggedInButton2();
 * document.body.append(button);
 * ```
 */
export function loggedInButton2() {
  const profile = load('profile');

  if (!profile || typeof profile !== 'object' || !profile.avatar) {
    console.error('Profile data is not available or is invalid.');
    return createBtn('Profile Error', 'fixed', 'z-10', 'bottom-5', 'right-5', 'w-20', 'lg:hidden', 'border-2', 'border-white', 'rounded-full', 'md:bottom-8', 'md:right-8');
  }

  const { url: avatarUrl = placeholderImg, alt: avatarAlt = 'User avatar' } = profile.avatar;

  const element = createBtn('', 'fixed', 'z-10', 'bottom-5', 'right-5', 'w-20', 'lg:hidden', 'border-2', 'border-primary', 'rounded-full', 'md:bottom-8', 'md:right-8', 'aspect-square', 'object-cover', 'overflow-hidden', 'object-center');

  if (!load('pulse')) {
    element.classList.add('animate-pulse');
  }

  element.addEventListener('click', () => {
    runModal(true, 'profile');
    element.classList.remove('animate-pulse', 'border-primary');
    element.classList.add('border-white');
    save('pulse', true);
  });

  const img = createImg(avatarUrl, avatarAlt, 'rounded-full', 'shadow-customShadow');
  img.setAttribute('data-avatar', 'btn');

  element.append(img);
  return element;
}
