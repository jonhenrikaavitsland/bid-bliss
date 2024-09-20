import { modal } from '../data/constants';
import { auctioneerSignupImg, closingIcon } from '../data/images';
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
 * Creates and returns a registration modal element with form fields for user sign-up, including email and password inputs.
 *
 * This function constructs a registration modal that provides a signup form with fields for email and password, validation messages,
 * and a call-to-action button. It also includes a link for existing users to navigate to the login page. The modal highlights
 * a signup bonus message for new users.
 *
 * @returns {HTMLElement} The constructed registration modal element.
 * @example
 * ```js
 * // Create a registration modal and append it to the document body
 * const modal = registerModal();
 * document.body.append(modal);
 * ```
 */
export function registerModal() {
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
  const closeImg = createImg(closingIcon, 'close', 'size-5', 'rounded-full');
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
  const image = createImg(auctioneerSignupImg, 'auctioneer presenting a signup form');
  imageWrap.append(image);

  const heading = createHeading(2, `"1000 credits signup bonus!"`, 'font-serif', 'text-center', 'mt-0.5', 'md:mt-1', 'font-semibold', 'uppercase', 'md:text-xl');

  topContainer.append(imageWrap, heading);

  const bottomContainer = createDiv('flex', 'flex-col', 'landscape:w-1/2', 'landscape:justify-center', 'px-5.5', 'landscape:pe-2.5', 'landscape:ps-5');

  const formElement = createForm('api', 'register', 'flex', 'flex-col', 'gap-5', 'mt-9', 'mb-16', 'md:gap-7');

  const emailGroup = createDiv('flex', 'flex-col', 'gap-1.5');
  const labelEmail = createLabel('email', 'Email:', 'md:text-xl');
  const emailInput = createInput('text', 'your-email@stud.noroff.no', 'email', 'h-8', 'md:h-10', 'pl-2', 'rounded-xl', 'shadow-customShadow');
  const emailValidate = createDiv('text-sm', 'min-h-3.5', 'text-error');
  emailValidate.setAttribute('data-validate', 'email');
  emailGroup.append(labelEmail, emailInput, emailValidate);

  const passwordGroup = createDiv('flex', 'flex-col', 'gap-1.5');
  const labelPassword = createLabel('password', 'Password:', 'md:text-xl');
  const passwordInput = createInput('password', '*****', 'password', 'h-8', 'md:h-10', 'pl-2', 'rounded-xl', 'shadow-customShadow');
  const passwordValidate = createDiv('text-sm', 'min-h-3.5');
  passwordValidate.setAttribute('data-counter', 'password');
  passwordGroup.append(labelPassword, passwordInput, passwordValidate);

  const ctaGroup = createDiv('flex', 'flex-col', 'mx-auto', 'gap-5');
  const wrap = createDiv('mx-auto');
  const cta = createInput('submit', '', 'registerBtn', 'uppercase', 'cursor-pointer', 'bg-primary', 'hover:bg-hoverPrimary', 'rounded-xl', 'py-3', 'px-4', 'md:px-6', 'font-serif', 'text-neutralBg', 'shadow-customShadow', 'font-medium', 'md:text-lg');
  cta.value = 'register';
  wrap.append(cta);

  const regCta = createAnchor('#', '', '', 'text-center', 'py-2');
  const regText1 = createTextNode('Already a member? ');
  const regText2 = createSpan('Login', 'text-secondary', 'hover:text-hoverSecondary', 'font-semibold', 'text-xl');
  const regText3 = createTextNode(' here!');
  regCta.append(regText1, regText2, regText3);

  ctaGroup.append(regCta);

  formElement.append(emailGroup, passwordGroup, wrap);
  bottomContainer.append(formElement, ctaGroup);

  const containers = createDiv('flex', 'flex-col', 'landscape:flex-row');
  containers.append(topContainer, bottomContainer);

  element.append(btnContainer, containers);
  return element;
}
