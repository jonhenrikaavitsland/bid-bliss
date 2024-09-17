import { modal } from '../data/constants';
import { closeSvg, placeholderImg } from '../data/images';
import { createBtn } from '../elements/createBtn';
import { createDiv } from '../elements/createDiv';
import { createForm } from '../elements/createForm';
import { createHeading } from '../elements/createHeading';
import { createImg } from '../elements/createImg';
import { createInput } from '../elements/createInput';
import { createLabel } from '../elements/createLabel';
import { createParagraph } from '../elements/createParagraph';
import { createSection } from '../elements/createSection';
import { createSpan } from '../elements/createSpan';
import { load } from '../localStorage/load';
import { logout } from '../ui/logoutBtn/logout';
import { closeModal } from '../ui/modal/closeModal';

const DEFAULT_IMAGE_URL = placeholderImg;
const DEFAULT_IMAGE_ALT = 'my avatar';
const DEFAULT_BIO = 'Aspiring auctioneer';

/**
 * Creates and returns a modal element for displaying the user's profile, including avatar, bio, credits, and listing stats.
 *
 * This function constructs a profile modal that displays the user's avatar, name, bio, credits, active listings, and listings won.
 * It includes functionality for changing the avatar and logging out. If profile data is missing, it uses default values.
 *
 * @returns {HTMLElement} The constructed profile modal element.
 * @example
 * ```js
 * // Create a profile modal and append it to the document body
 * const modal = profileModal();
 * document.body.append(modal);
 * ```
 */
export function profileModal() {
  const {
    name,
    bio,
    avatar: { url, alt },
    credits,
    _count: { listings, wins },
  } = load('profile');

  const element = createDiv(
    'flex',
    'flex-col',
    'px-2.5',
    'md:px-3',
    'pt-2.5',
    'pb-5',
    'md:pb-6',
    'bg-neutralBg',
    'rounded-xl',
    'shadow-customShadow',
    'min-w-40',
    'max-w-96',
    'my-auto',
    'flex-grow',
    'flex-shrink',
    'xmd:landscape:max-w-[804px]',
    'md:landscape:max-w-[1112px]',
    'md:max-w-[672px]',
  );
  element.setAttribute('id', 'profileModal');

  const closeBtn = createBtn('', 'backdrop-invert', 'rounded-full', 'shadow-customShadow', 'hover:animate-pulse');
  const closeImg = createImg(closeSvg, 'close', 'size-5');
  closeBtn.append(closeImg);
  const btnWrap = createDiv('size-9', 'flex', 'justify-center', 'items-center', 'cursor-pointer');
  btnWrap.addEventListener('click', () => {
    closeModal(modal);
  });
  btnWrap.append(closeBtn);
  const btnContainer = createDiv('flex', 'justify-end');
  btnContainer.append(btnWrap);

  const topContainer = createDiv('flex', 'flex-col', 'gap-5', 'px-2.5', 'pb-5', 'landscape:w-1/2');

  const imageWrap = createDiv();
  const image = createImg(url || DEFAULT_IMAGE_URL, alt || DEFAULT_IMAGE_ALT, 'w-28', 'md:w-40', 'rounded-full', 'mx-auto', 'border', 'border-secondary', 'aspect-square', 'object-cover', 'object-center');
  image.setAttribute('data-avatar', 'img');
  imageWrap.append(image);

  const bioContainer = createDiv('flex', 'flex-col', 'gap-2.5', 'md:gap-5', 'capitalize', 'text-center');

  const bioWrap = createSection('flex', 'flex-col', 'gap-1');
  const title = createHeading(2, name, 'font-serif', 'font-semibold', 'md:text-lg');
  const bioInfo = createParagraph(bio || DEFAULT_BIO, 'text-sm', 'italic', 'md:text-base');
  bioWrap.append(title, bioInfo);

  const creditCount = createHeading(3, `Cr. ${credits}`, 'text-lg', 'font-semibold', 'md:text-xl');

  const countWrap = createDiv('flex', 'flex-col', 'gap-1', 'text-sm');
  const activeListings = createSpan(`active listings: ${listings}`);
  const winnings = createSpan(`listings won: ${wins}`);
  countWrap.append(activeListings, winnings);
  bioContainer.append(bioWrap, creditCount, countWrap);

  topContainer.append(imageWrap, bioContainer);

  const bottomContainer = createDiv('flex', 'flex-col', 'px-2.5', 'md:px-5', 'py-5', 'gap-9', 'landscape:w-1/2', 'landscape:justify-center');

  const uploadForm = createForm('upload', 'avatar', 'flex', 'flex-col', 'gap-1.5');
  const uploadInfo = createLabel('uploadAvatar', 'Change avatar:', 'text-sm', 'md:text-base');
  const uploadWrap = createDiv('flex', 'flex-col', 'md:flex-row', 'xmd:landscape:flex-col', 'min-w-[120px]');
  const uploadInput = createInput(
    'text',
    'image URL',
    'uploadAvatar',
    'bg-white',
    'rounded-t-xl',
    'px-3',
    'py-2',
    'text-center',
    'md:rounded-s-xl',
    'md:rounded-r-none',
    'grow',
    'md:ps-3',
    'md:landscape:ps-0',
    'shadow-customShadow',
    'min-w-[120px]',
    'flex-grow',
    'flex-shrink',
  );
  uploadInput.setAttribute('data-upload', 'input');
  const uploadBtn = createBtn(
    'upload',
    'uppercase',
    'rounded-b-xl',
    'md:rounded-e-xl',
    'md:rounded-s-none',
    'bg-primary',
    'py-3',
    'px-4',
    'md:px-6',
    'font-serif',
    'md:text-lg',
    'md:text-base',
    'hover:bg-hoverPrimary',
    'text-white',
    'shadow-customShadow',
    'min-w-[120px]',
    'flex-grow',
    'flex-shrink',
    'md:flex-grow-0',
  );
  uploadBtn.setAttribute('data-upload', 'btn');
  uploadWrap.append(uploadInput, uploadBtn);
  uploadForm.append(uploadInfo, uploadWrap);

  const logOutBtn = createBtn('log out', 'bg-primary', 'hover:bg-hoverPrimary', 'font-serif', 'rounded-xl', 'py-3', 'px-4', 'md:px-6', 'md:text-lg', 'uppercase', 'text-white', 'mx-auto', 'shadow-customShadow', 'lg:hidden');
  logOutBtn.addEventListener('click', () => logout());

  bottomContainer.append(uploadForm, logOutBtn);

  const containers = createDiv('flex', 'flex-col', 'landscape:flex-row');
  containers.append(topContainer, bottomContainer);

  element.append(btnContainer, containers);

  return element;
}
