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

export function profileModal() {
  const {
    name,
    bio,
    avatar: { url, alt },
    credits,
    _count: { listings, wins },
  } = load('profile');

  const element = createDiv('relative', 'bg-neutralBg', 'rounded-xl', 'pt-5', 'px-5', 'pb-10', 'md:pt-8', 'md:px-8', 'md:pb-16', 'shadow-customShadow', 'flex', 'flex-col', 'grow', 'gap-5', 'max-w-xl');

  const image = createImg(url || DEFAULT_IMAGE_URL, alt || DEFAULT_IMAGE_ALT, 'w-28', 'md:w-40', 'rounded-full', 'mx-auto', 'border', 'border-secondary', 'aspect-square', 'object-cover', 'object-center');
  image.setAttribute('data-avatar', 'img');

  const infoWrap = createDiv('flex', 'flex-col', 'gap-2.5', 'text-center');

  const nameWrap = createSection('flex', 'flex-col', 'gap-1', 'capitalize');
  const title = createHeading(2, name, 'font-serif', 'font-medium', 'md:text-lg', 'md:font-semibold');
  const bioInfo = createParagraph(bio || DEFAULT_BIO, 'text-sm', 'italic', 'md:text-base');

  const creditCount = createHeading(3, `Cr. ${credits}`, 'text-lg', 'font-semibold', 'md:text-xl');

  const countWrap = createDiv('flex', 'flex-col', 'gap-1', 'capitalize', 'text-sm');
  const activeListings = createSpan(`active listings: ${listings}`);
  const winnings = createSpan(`listings won: ${wins}`);
  countWrap.append(activeListings, winnings);

  const uploadForm = createForm('upload', 'avatar', 'flex', 'flex-col', 'gap-1.5');
  const uploadInfo = createLabel('uploadAvatar', 'Change avatar:', 'text-sm', 'md:text-base');
  const uploadWrap = createDiv('flex', 'xsm:flex-col');
  const uploadInput = createInput('text', 'image URL', 'uploadAvatar', 'bg-white', 'xsm:rounded-t-xl', 'xsm:px-3', 'xsm:py-2', 'xsm:text-center', 'sm:rounded-s-xl', 'grow', 'sm:ps-3', 'shadow-customShadow');
  uploadInput.setAttribute('data-upload', 'input');
  const uploadBtn = createBtn('upload', 'uppercase', 'xsm:rounded-b-xl', 'sm:rounded-e-xl', 'bg-primary', 'py-3', 'px-4', 'md:px-6', 'font-serif', 'md:text-lg', 'hover:bg-hoverPrimary', 'text-white', 'shadow-customShadow');
  uploadBtn.setAttribute('data-upload', 'btn');
  uploadWrap.append(uploadInput, uploadBtn);
  uploadForm.append(uploadInfo, uploadWrap);

  const logOutBtn = createBtn('log out', 'bg-primary', 'hover:bg-hoverPrimary', 'font-serif', 'rounded-xl', 'py-3', 'px-4', 'md:px-6', 'md:text-lg', 'uppercase', 'text-white', 'mx-auto', 'mt-4', 'shadow-customShadow', 'lg:hidden');
  logOutBtn.addEventListener('click', () => logout());

  const closeBtn = createBtn('', 'absolute', 'top-2.5', 'right-2.5', 'backdrop-invert', 'rounded-full', 'shadow-customShadow', 'hover:animate-pulse');
  const closeImg = createImg(closeSvg, 'close', 'size-5');
  closeBtn.append(closeImg);
  closeBtn.addEventListener('click', () => {
    closeModal(modal);
  });

  nameWrap.append(title, bioInfo);
  infoWrap.append(nameWrap, creditCount, countWrap);
  element.append(image, infoWrap, uploadForm, logOutBtn, closeBtn);

  return element;
}
