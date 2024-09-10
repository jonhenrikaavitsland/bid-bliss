import { placeholderImg } from '../data/images';
import { createDiv } from '../elements/createDiv';
import { createHeading } from '../elements/createHeading';
import { createImg } from '../elements/createImg';
import { createSection } from '../elements/createSection';
import { createSpan } from '../elements/createSpan';
import { load } from '../localStorage/load';
import { runModal } from '../ui/modal/runModal';

export function loggedInButton() {
  const profile = load('profile');

  if (!profile || typeof profile !== 'object') {
    console.error('Profile data is not available or is invalid.');
    return createDiv('Profile not found');
  }

  const { name = 'Unknown User', avatar: { url: avatarUrl = placeholderImg, alt: avatarAlt = name } = {}, credits = 0, bio = 'No biography available.' } = profile;

  const element = createDiv('hidden', 'rounded-full', 'border-2', 'border-neutralBg', 'lg:flex', 'h-10', 'lg:h-20', 'w-36', 'lg:w-72', 'justify-between', 'cursor-pointer', 'hover:bg-hoverPrimary');

  element.addEventListener('click', () => {
    runModal(true, 'profile');
  });

  const infoWrap = createSection('flex', 'flex-col', 'justify-center', 'text-center', 'ps-5', 'gap-0.5', 'grow');

  const username = createHeading(2, name, 'uppercase', 'font-serif', 'text-neutralBg', 'text-sm', 'lg:text-xl');

  const biography = createSpan(bio, 'hidden', 'md:block', 'italic');

  const creditsContainer = createSpan(`Cr. ${credits}`, 'text-neutralBg', 'text-sm', 'lg:text-xl');

  const image = createImg(avatarUrl, avatarAlt, 'rounded-full');
  image.setAttribute('data-avatar', 'desktop');

  infoWrap.append(username, biography, creditsContainer);
  element.append(infoWrap, image);

  return element;
}
