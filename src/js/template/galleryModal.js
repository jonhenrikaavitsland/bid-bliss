import { gallery } from '../data/constants';
import { closeSvg, placeholderItemImg } from '../data/images';
import { createBtn } from '../elements/createBtn';
import { createDiv } from '../elements/createDiv';
import { createImg } from '../elements/createImg';
import { load } from '../localStorage/load';
import { initializeSwipeEvents } from '../ui/gallery/initializeSwipeEvents';
import { updateActiveImage } from '../ui/gallery/updateActiveImage';
import { closeGallery } from '../ui/modal/closeGallery';

export const DEFAULT_IMAGE_URL = placeholderItemImg;
export const DEFAULT_IMAGE_ALT = 'listing item';

export function galleryModal() {
  const media = load('media');

  if (!Array.isArray(media) || media.length === 0) {
    console.warn('No media available, using default image.');
  }

  const galleryContainer = createDiv('flex', 'flex-col', 'gap-10', 'max-w-screen', 'overflow-y-auto', 'max-h-full', 'md:max-w-[500px]', 'lg:max-w-[700px]', 'bg-neutralTxt', 'pt-8', 'pb-5', 'relative');

  const activeImage = createImg(media?.[0]?.url || DEFAULT_IMAGE_URL, media?.[0]?.alt || DEFAULT_IMAGE_ALT, 'aspect-square', 'object-contain', 'object-bottom', 'max-w-full', 'max-h-[60vh]');

  const allImages = createDiv('flex', 'justify-center', 'flex-wrap', 'gap-8', 'md:gap-10', 'lg:gap-12', 'p-2');

  const fragment = document.createDocumentFragment();
  let activeIndex = 0; //Tracking the active index for swiping

  (media || []).forEach((image, index) => {
    const isActive = index === 0;
    const imageObject = createImg(image.url || DEFAULT_IMAGE_URL, image.alt || DEFAULT_IMAGE_ALT, 'rounded-xl', 'cursor-pointer', 'max-w-10', 'md:max-w-16', 'lg:max-w-24', 'aspect-square', 'object-cover', 'border-2', 'border-white', 'blur-sm');

    if (isActive) {
      imageObject.classList.remove('blur-sm');
    }

    imageObject.addEventListener('click', () => {
      updateActiveImage(activeImage, allImages, media, index);
      activeIndex = index;
    });

    fragment.append(imageObject);
  });

  const closeBtn = createBtn('', 'absolute', 'top-2.5', 'right-2.5', 'rounded-full', 'shadow-customShadow', 'hover:animate-pulse');
  const closeImg = createImg(closeSvg, 'close', 'size-5');
  closeBtn.append(closeImg);
  closeBtn.addEventListener('click', () => {
    closeGallery(gallery);
  });

  closeBtn.append(closeImg);
  allImages.appendChild(fragment);
  galleryContainer.append(activeImage, allImages, closeBtn);

  initializeSwipeEvents(activeImage, media, activeIndex, (newIndex) => {
    updateActiveImage(activeImage, allImages, media, newIndex);
    activeIndex = newIndex;
  });

  return galleryContainer;
}
