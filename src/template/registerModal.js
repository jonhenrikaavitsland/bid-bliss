import { createAnchor } from '../js/elements/createAnchor.js';
import { createBtn } from '../js/elements/createBtn.js';
import { createDiv } from '../js/elements/createDiv.js';
import { createForm } from '../js/elements/createForm.js';
import { createHeading } from '../js/elements/createHeading.js';
import { createImg } from '../js/elements/createImg.js';
import { createInput } from '../js/elements/createInput.js';
import { createLabel } from '../js/elements/createLabel.js';
import { createSection } from '../js/elements/createSection.js';
import { createSpan } from '../js/elements/createSpan.js';
import { createTextNode } from '../js/elements/createTextNode.js';

export function registerModal() {
  const element = createSection('flex', 'flex-col', 'bg-neutralBg', 'p-8', 'rounded-xl', 'lg:pt-10', 'lg:px-10', 'pb-16', 'shadow-customShadow');

  const imageWrap = createDiv('max-w-96', 'mx-auto');
  const image = createImg('/src/images/auctioneer-signup.png', 'auctioneer presenting a signup form');
  const heading = createHeading(2, `"1000 credits signup bonus!"`, 'font-serif', 'text-primary', 'text-center', 'mt-0.5', 'lg:mt-1', 'text-primary', 'font-semibold', 'uppercase', 'md:text-xxl');
  const formElement = createForm('api', 'register', 'flex', 'flex-col', 'gap-5', 'mt-9', 'mb-16', 'text-primary', 'md:gap-7');
  const emailGroup = createDiv('flex', 'flex-col', 'gap-1.5');
  const labelEmail = createLabel('email', 'Email:', 'md:text-xl');
  const emailInput = createInput('email', 'your-email@stud.noroff.no', 'email', 'h-8', 'md:h-10', 'pl-2', 'rounded-xl', 'shadow-customShadow');
  const passwordGroup = createDiv('flex', 'flex-col', 'gap-1.5');
  const labelPassword = createLabel('password', 'Password:', 'md:text-xl');
  const passwordInput = createInput('password', '*****', 'password', 'h-8', 'md:h-10', 'pl-2', 'rounded-xl', 'shadow-customShadow');
  const ctaGroup = createDiv('flex', 'flex-col', 'mx-auto', 'gap-5');
  const wrap = createDiv('mx-auto');
  const cta = createBtn('register', 'uppercase', 'bg-primary', 'hover:bg-hoverPrimary', 'rounded-xl', 'py-2', 'px-4', 'md:py-3', 'md:px-6', 'font-serif', 'text-neutralBg', 'shadow-customShadow', 'font-medium', 'md:text-lg');
  const regText1 = createTextNode('Already a member? ');
  const regText2 = createSpan('Login', 'text-secondary', 'hover:text-hoverSecondary');
  const regText3 = createTextNode(' here!');
  const regCta = createAnchor('#', '', '', 'text-center', 'py-2');

  regCta.append(regText1, regText2, regText3);
  wrap.append(cta);
  ctaGroup.append(wrap, regCta);
  passwordGroup.append(labelPassword, passwordInput);
  emailGroup.append(labelEmail, emailInput);
  formElement.append(emailGroup, passwordGroup);
  imageWrap.append(image);
  element.append(imageWrap, heading, formElement, ctaGroup);

  return element;
}
