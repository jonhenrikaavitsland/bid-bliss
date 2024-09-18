import { pointer } from '../data/images';
import { createBtn } from '../elements/createBtn';
import { createImg } from '../elements/createImg';
import { load } from '../localStorage/load';
import { save } from '../localStorage/save';

export function pointerButton(media) {
  const element = createBtn('', 'absolute', 'z-30', 'w-14', 'md:w-20', 'border-2', 'border-secondary', 'rounded-full', 'md:bottom-8', 'md:right-8', 'aspect-square', 'object-cover', 'overflow-hidden', 'object-center', 'right-5', 'bottom-5');

  if (!load('pointerPulse')) {
    element.classList.add('animate-pulse');
  }

  element.addEventListener('click', () => {
    element.classList.remove('animate-pulse');
    element.classList.add('hidden');
    save('pointerPulse', true);
  });

  const img = createImg(pointer, 'rounded-full', 'shadow-customShadow');
  img.setAttribute('data-avatar', 'btn');

  element.append(img);
  return element;
}
