import { modal } from '../data/constants.js';
import { auctioneerWelcomeImg, closeSvg } from '../data/images.js';
import { createAnchor } from '../elements/createAnchor.js';
import { createBtn } from '../elements/createBtn.js';
import { createDiv } from '../elements/createDiv.js';
import { createForm } from '../elements/createForm.js';
import { createHeading } from '../elements/createHeading.js';
import { createImg } from '../elements/createImg.js';
import { createInput } from '../elements/createInput.js';
import { createLabel } from '../elements/createLabel.js';
import { createSection } from '../elements/createSection.js';
import { createSpan } from '../elements/createSpan.js';
import { createTextNode } from '../elements/createTextNode.js';
import { closeModal } from '../ui/modal/closeModal.js';

export function loginModal() {
  const element = createSection('relative', 'flex', 'flex-col', 'bg-neutralBg', 'p-8', 'rounded-xl', 'lg:pt-10', 'lg:px-10', 'pb-16', 'shadow-customShadow', 'overflow-y-auto', 'max-h-[90%]', 'max-h-screen');

  const imageWrap = createDiv('max-w-96', 'mx-auto');
  const image = createImg(auctioneerWelcomeImg, 'auctioneer greeting');
  imageWrap.append(image);

  const heading = createHeading(2, `"Your Next Great Deal Awaits!"`, 'font-serif', 'text-primary', 'text-center', 'mt-0.5', 'lg:mt-1', 'font-semibold', 'uppercase', 'md:text-xxl');

  const formElement = createForm('api', 'login', 'flex', 'flex-col', 'gap-5', 'mt-9', 'mb-16', 'text-primary', 'md:gap-7');

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

  const closeBtn = createBtn('', 'absolute', 'top-2.5', 'right-2.5', 'backdrop-invert', 'rounded-full', 'shadow-customShadow', 'hover:animate-pulse');
  const closeImg = createImg(closeSvg, 'close', 'size-5');
  closeBtn.append(closeImg);
  closeBtn.addEventListener('click', () => {
    closeModal(modal);
  });

  formElement.append(emailGroup, passwordGroup, wrap);
  element.append(imageWrap, heading, formElement, ctaGroup, closeBtn);

  return element;
}
