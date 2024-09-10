import { placeholderItemImg } from '../data/images';
import { isValidUrl } from '../data/isValidUrl';

export function createImg(src = '', alt = '', ...classes) {
  const image = document.createElement('img');

  if (isValidUrl(src)) {
    image.src = src;
  } else {
    console.error(`Invalid image source URL: ${src}`);
    image.src = placeholderItemImg;
  }

  image.alt = typeof alt === 'string' ? alt : 'Image description unavailable';

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    image.classList.add(...validClasses);
  }

  return image;
}
