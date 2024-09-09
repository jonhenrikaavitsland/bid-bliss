import { createDiv } from '../elements/createDiv';
import { createImg } from '../elements/createImg';
import { load } from '../localStorage/load';

const DEFAULT_IMAGE_URL = '/src/images/placeholderItem.png';
const DEFAULT_IMAGE_ALT = 'listing item';

export function galleryModal() {
  const media = load('media');

  if (!Array.isArray(media) || media.length === 0) {
    console.warn('No media available, using default image.');
  }

  const galleryContainer = createDiv('flex', 'flex-col', 'gap-10', 'max-w-screen', 'overflow-y-auto', 'max-h-[90vh]', 'md:max-w-[500px]', 'lg:max-w-[700px]', 'shadow-customShadow');

  const activeImage = createImg(media?.[0]?.url || DEFAULT_IMAGE_URL, media?.[0]?.alt || DEFAULT_IMAGE_ALT, 'aspect-square', 'object-contain', 'object-bottom', 'max-w-full', 'max-h-[60vh]');

  const allImages = createDiv('flex', 'justify-center', 'flex-wrap', 'gap-8', 'md:gap-10', 'lg:gap-12');

  const fragment = document.createDocumentFragment();

  (media || []).forEach((image, index) => {
    const isActive = index === 0;
    const imageObject = createImg(image.url || DEFAULT_IMAGE_URL, image.alt || DEFAULT_IMAGE_ALT, 'rounded-xl', 'cursor-pointer', 'max-w-10', 'md:max-w-16', 'lg:max-w-24', 'aspect-square', 'object-cover', 'border-2', 'border-white', 'blur-sm');

    if (isActive) {
      imageObject.classList.remove('blur-sm');
    }

    imageObject.addEventListener('click', () => {
      activeImage.src = image.url || DEFAULT_IMAGE_URL;
      activeImage.alt = image.alt || DEFAULT_IMAGE_ALT;

      allImages.childNodes.forEach((img) => img.classList.add('blur-sm'));
      imageObject.classList.remove('blur-sm');
    });

    fragment.append(imageObject);
  });

  allImages.appendChild(fragment);
  galleryContainer.append(activeImage, allImages);

  return galleryContainer;
}
