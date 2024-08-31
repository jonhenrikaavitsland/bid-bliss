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

const DEFAULT_IMAGE_URL = '/src/images/placeholder.jpg';
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

  const element = createDiv('bg-neutralBg', 'rounded-xl', 'pt-5', 'px-5', 'pb-10', 'shadow-customShadow', 'flex', 'flex-col', 'grow', 'gap-5');

  const image = createImg(url || DEFAULT_IMAGE_URL, alt || DEFAULT_IMAGE_ALT, 'w-28', 'rounded-full', 'mx-auto', 'border', 'border-secondary');

  const infoWrap = createDiv('flex', 'flex-col', 'gap-2.5', 'text-center');

  const nameWrap = createSection('flex', 'flex-col', 'gap-1', 'capitalize');
  const title = createHeading(2, name, 'font-serif', 'font-medium');
  const bioInfo = createParagraph(bio || DEFAULT_BIO, 'text-sm', 'italic');

  const creditCount = createHeading(3, `Cr. ${credits}`, 'text-lg', 'font-semibold');

  const countWrap = createDiv('flex', 'flex-col', 'gap-1', 'capitalize', 'text-sm');
  const activeListings = createSpan(`active listings: ${listings}`);
  const winnings = createSpan(`listings won: ${wins}`);

  const uploadForm = createForm('upload', 'avatar', 'flex', 'flex-col', 'gap-1.5');
  const uploadInfo = createLabel('uploadAvatar', 'Change avatar:', 'text-sm');
  const uploadWrap = createDiv('flex');
  const uploadInput = createInput('text', 'image URL', 'uploadAvatar', 'bg-white', 'rounded-s-xl', 'grow', 'ps-3', 'shadow-customShadow');
  const uploadBtn = createBtn('upload', 'uppercase', 'rounded-e-xl', 'bg-primary', 'py-2', 'px-3', 'md:py-4', 'md:px-6', 'hover:bg-hoverPrimary', 'text-white', 'shadow-customShadow');

  const logOutBtn = createBtn('log out', 'bg-primary', 'hover:bg-hoverPrimary', 'rounded-xl', 'py-2', 'px-3', 'md:py-4', 'md:px-6', 'uppercase', 'text-white', 'mx-auto', 'mt-4', 'shadow-customShadow');

  uploadWrap.append(uploadInput, uploadBtn);
  uploadForm.append(uploadInfo, uploadWrap);
  countWrap.append(activeListings, winnings);
  nameWrap.append(title, bioInfo);
  infoWrap.append(nameWrap, creditCount, countWrap);
  element.append(image, infoWrap, uploadForm, logOutBtn);
  return element;
}
