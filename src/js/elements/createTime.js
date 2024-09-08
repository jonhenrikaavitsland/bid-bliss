import { isValidDateTime } from '../validate/isValidDateTime';

export function createTime(datetime = '', textContent = '', ...classes) {
  const timeElement = document.createElement('time');

  timeElement.setAttribute('datetime', isValidDateTime(datetime) ? datetime : '');

  timeElement.textContent = typeof textContent === 'string' ? textContent : String(textContent);

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    timeElement.classList.add(...validClasses);
  }

  return timeElement;
}
