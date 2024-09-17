import { DEFAULT_IMAGE_ALT, DEFAULT_IMAGE_URL, gallery } from '../data/constants';
import { closeSvg } from '../data/images';
import { createBtn } from '../elements/createBtn';
import { createDiv } from '../elements/createDiv';
import { createImg } from '../elements/createImg';
import { initializeSwipeEvents } from '../ui/gallery/initializeSwipeEvents';
import { updateActiveImage } from '../ui/gallery/updateActiveImage';
import { closeGallery } from '../ui/modal/closeGallery';

/**
 * Creates and returns a modal element for displaying a gallery of images.
 *
 * This function constructs a gallery modal that displays media items, allowing users to swipe through images.
 * It initializes swipe events for navigation and includes a close button to exit the gallery. If no media is available,
 * it defaults to a placeholder image.
 *
 * @returns {HTMLElement} The constructed gallery modal element.
 * @example
 * ```js
 * // Create a gallery modal and append it to the document body
 * const modal = galleryModal();
 * document.body.append(modal);
 * ```
 */
export function galleryModal(media) {
  if (!Array.isArray(media) || media.length === 0) {
    console.warn('No media available, using default image.');
  }

  const galleryContainer = createDiv('flex', 'flex-col', 'gap-10', 'max-w-screen', 'overflow-y-auto', 'max-h-full', 'md:max-w-[500px]', 'lg:max-w-[700px]', 'bg-neutralTxt', 'pt-8', 'pb-5', 'relative');

  const activeImage = createImg(media?.[0]?.url || DEFAULT_IMAGE_URL, media?.[0]?.alt || DEFAULT_IMAGE_ALT, 'aspect-square', 'object-contain', 'object-bottom', 'max-w-full', 'max-h-[60vh]');

  const allImages = createDiv('flex', 'justify-center', 'flex-wrap', 'gap-8', 'md:gap-10', 'lg:gap-12', 'p-2');

  const fragment = document.createDocumentFragment();

  let activeIndex = 0; //Tracking the active index for swiping11
  const getActiveIndex = () => activeIndex;
  const setActiveIndex = (newIndex) => {
    activeIndex = newIndex;
    updateActiveImage(activeImage, allImages, media, newIndex);
  };

  (media || []).forEach((image, index) => {
    const isActive = index === 0;
    const imageObject = createImg(image.url || DEFAULT_IMAGE_URL, image.alt || DEFAULT_IMAGE_ALT, 'rounded-xl', 'cursor-pointer', 'max-w-10', 'md:max-w-16', 'lg:max-w-24', 'aspect-square', 'object-cover', 'border-2', 'border-white', 'blur-sm');

    if (isActive) {
      imageObject.classList.remove('blur-sm');
    }

    imageObject.addEventListener('click', () => {
      setActiveIndex(index); // Update activeIndex via the setter
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

  initializeSwipeEvents(activeImage, media, getActiveIndex, setActiveIndex);

  return galleryContainer;
}
