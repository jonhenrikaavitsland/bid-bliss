import { modal } from '../data/constants';
import { auctioneerWelcomeImg, closeSvg } from '../data/images';
import { createAnchor } from '../elements/createAnchor';
import { createBtn } from '../elements/createBtn';
import { createDiv } from '../elements/createDiv';
import { createForm } from '../elements/createForm';
import { createHeading } from '../elements/createHeading';
import { createImg } from '../elements/createImg';
import { createInput } from '../elements/createInput';
import { createLabel } from '../elements/createLabel';
import { createSpan } from '../elements/createSpan';
import { createTextNode } from '../elements/createTextNode';
import { closeModal } from '../ui/modal/closeModal';

/**
 * Creates and returns a login modal element with form fields for email and password.
 *
 * This function constructs a login modal with a form for user authentication, including fields for email and password,
 * validation messages, and a call-to-action button. It also provides a link for users to navigate to the registration page.
 *
 * @returns {HTMLElement} The constructed login modal element.
 * @example
 * ```js
 * // Create a login modal and append it to the document body
 * const modal = loginModal();
 * document.body.append(modal);
 * ```
 */
export function loginModal() {
  const element = createDiv(
    'flex',
    'flex-col',
    'px-2.5',
    'md:px-3',
    'pt-2.5',
    'pb-9',
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
  const closeImg = createImg(closeSvg, 'close', 'size-5', 'rounded-full');
  closeBtn.append(closeImg);
  const btnWrap = createDiv('size-9', 'flex', 'justify-center', 'items-center', 'cursor-pointer');
  btnWrap.addEventListener('click', () => {
    closeModal(modal);
  });
  btnWrap.append(closeBtn);
  const btnContainer = createDiv('flex', 'justify-end');
  btnContainer.append(btnWrap);

  const topContainer = createDiv('flex', 'flex-col', 'landscape:w-1/2', 'px-5.5', 'landscape:ps-2.5', 'landscape:pe-5', 'landscape:my-auto');

  const imageWrap = createDiv('max-w-full', 'mx-auto');
  const image = createImg(auctioneerWelcomeImg, 'auctioneer greeting');
  imageWrap.append(image);

  const heading = createHeading(2, `"Your Next Great Deal Awaits!"`, 'font-serif', 'text-center', 'mt-0.5', 'md:mt-1', 'font-semibold', 'uppercase', 'md:text-xl');

  topContainer.append(imageWrap, heading);

  const bottomContainer = createDiv('flex', 'flex-col', 'landscape:w-1/2', 'landscape:justify-center', 'px-5.5', 'landscape:pe-2.5', 'landscape:ps-5');

  const formElement = createForm('api', 'login', 'flex', 'flex-col', 'gap-5', 'mt-9', 'mb-16', 'md:gap-7');

  const emailGroup = createDiv('flex', 'flex-col', 'gap-1.5');
  const labelEmail = createLabel('email', 'Email:', 'md:text-xl');
  const emailInput = createInput('text', 'your-email@stud.noroff.no', 'email', 'h-8', 'md:h-10', 'pl-2', 'rounded-xl', 'shadow-customShadow');
  const emailValidate = createDiv('text-sm', 'min-h-3.5', 'text-error');
  emailValidate.setAttribute('data-validate', 'email');
  emailGroup.append(labelEmail, emailInput, emailValidate);

  const passwordGroup = createDiv('flex', 'flex-col', 'gap-1.5');
  const labelPassword = createLabel('password', 'Password:', 'md:text-xl');
  const passwordInput = createInput('password', '*****', 'password', 'h-8', 'md:h-10', 'pl-2', 'rounded-xl', 'shadow-customShadow');
  const passwordValidate = createDiv('text-sm', 'min-h-3.5', 'text-error');
  passwordValidate.setAttribute('data-validate', 'password');
  passwordGroup.append(labelPassword, passwordInput, passwordValidate);

  const ctaGroup = createDiv('flex', 'flex-col', 'mx-auto', 'gap-5');
  const wrap = createDiv('mx-auto');
  const cta = createInput('submit', '', '', 'uppercase', 'cursor-pointer', 'bg-primary', 'hover:bg-hoverPrimary', 'rounded-xl', 'py-3', 'px-4', 'md:px-6', 'font-serif', 'text-neutralBg', 'shadow-customShadow', 'font-medium', 'md:text-lg');
  cta.value = 'login';
  wrap.append(cta);

  const regCta = createAnchor('#', '', '', 'text-center', 'py-2');
  const regText1 = createTextNode('Not yet a member? ');
  const regText2 = createSpan('Register', 'text-secondary', 'hover:text-hoverSecondary');
  const regText3 = createTextNode(' now!');
  regCta.append(regText1, regText2, regText3);

  ctaGroup.append(regCta);

  formElement.append(emailGroup, passwordGroup, wrap);
  bottomContainer.append(formElement, ctaGroup);

  const containers = createDiv('flex', 'flex-col', 'landscape:flex-row');
  containers.append(topContainer, bottomContainer);

  element.append(btnContainer, containers);
  return element;
}
