import { isOVerflowing } from './isOverflowing';

export function applyScrollShadow(element) {
  if (isOVerflowing(element)) {
    element.classList.add('shadow-scrollIndicator');
  } else {
    element.classList.remove('shadow-scrollIndicator');
  }
}
