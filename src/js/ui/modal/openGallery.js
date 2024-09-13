import { gallery } from '../../data/constants';
import { modal } from '../../data/constants';
import { closeGallery } from './closeGallery';

export function openGallery(target) {
  if (!target) {
    closeGallery(gallery);
    return;
  }

  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  gallery.classList.remove('hidden');
  gallery.classList.add('flex', 'items-center', 'justify-center', 'py-5');

  gallery.style.top = `${scrollPosition}px`;

  gallery.append(target);

  gallery.addEventListener('click', (event) => {
    if (event.target === gallery || event.target === modal) {
      closeGallery(gallery);
    }
  });
  gallery.addEventListener('touchstart', (event) => {
    if (event.target === gallery || event.target === modal) {
      closeGallery(gallery);
    }
  });
}
