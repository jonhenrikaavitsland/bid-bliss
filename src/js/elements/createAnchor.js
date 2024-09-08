import { isValidUrl } from '../data/isValidUrl';

export function createAnchor(href, textContent, target = '_self', ...classes) {
  const anchor = document.createElement('a');
  anchor.href = isValidUrl(href) ? href : '#';
  anchor.textContent = textContent || 'link';
  anchor.target = target;

  if (target === '_blank') {
    anchor.rel = 'noopener noreferrer';
  }

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trimEnd() !== '');
  if (validClasses.length) {
    anchor.classList.add(...validClasses);
  }

  return anchor;
}
