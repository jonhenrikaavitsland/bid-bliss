import { createDiv } from '../elements/createDiv';
import { createImg } from '../elements/createImg';
import { load } from '../localStorage/load';

const DEFAULT_IMAGE_URL = '/src/images/placeholderItem.png';
const DEFAULT_IMAGE_ALT = 'listing item';

export function galleryModal() {
  const media = load('media');

  const galleryContainer = createDiv('flex', 'flex-col', 'gap-10', 'max-w-screen', 'overflow-y-auto', 'max-h-screen', 'md:max-w-[500px]', 'lg:max-w-[700px]', 'shadow-customShadow');

  const activeImage = createImg(media[0].url || DEFAULT_IMAGE_URL, media[0].alt || DEFAULT_IMAGE_ALT, 'rounded-xl', 'aspect-square', 'object-contain', 'object-bottom');

  const allImages = createDiv('flex', 'justify-center', 'flex-wrap', 'gap-5', 'md:gap-8', 'lg:gap-10');

  media.forEach((image, index) => {
    const isActive = index === 0;
    const imageObject = createImg(image.url || DEFAULT_IMAGE_URL, image.alt || DEFAULT_IMAGE_ALT, 'rounded-xl', 'cursor-pointer', 'max-w-10', 'aspect-square', 'object-cover', 'border-2', 'border-white', 'blur-sm');
    if (isActive) imageObject.classList.remove('blur-sm');
    imageObject.addEventListener('click', () => {
      activeImage.src = image.url || DEFAULT_IMAGE_URL;
      activeImage.alt = image.alt || DEFAULT_IMAGE_ALT;

      allImages.childNodes.forEach((img) => img.classList.add('blur-sm'));
      imageObject.classList.remove('blur-sm');
    });

    allImages.append(imageObject);
  });

  galleryContainer.append(activeImage, allImages);

  return galleryContainer;
}
