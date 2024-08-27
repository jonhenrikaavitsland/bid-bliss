import { createDiv } from '../elements/createDiv';
import { createImg } from '../elements/createImg';
import { load } from '../localStorage/load';

const DEFAULT_IMAGE_URL = '/src/images/placeholderItem.png';
const DEFAULT_IMAGE_ALT = 'listing item';

export function galleryModal() {
  const media = load('media');

  const galleryContainer = createDiv('flex', 'flex-col', 'gap-10', 'overflow-y-auto', 'h-[90%]', 'max-h-screen');

  const activeImage = createImg(media[0].url || DEFAULT_IMAGE_URL, media[0].alt || DEFAULT_IMAGE_ALT, 'rounded-xl', 'aspect-square', 'object-contain', 'object-bottom');

  const allImages = createDiv('flex', 'justify-between');

  media.forEach((image, index) => {
    const isActive = index === 0;
    const imageObject = createImg(image.url || DEFAULT_IMAGE_URL, image.alt || DEFAULT_IMAGE_ALT, 'rounded-xl', 'cursor-pointer', 'max-w-24', 'aspect-square', 'object-cover');
    if (isActive) imageObject.classList.add('blur-sm');
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
