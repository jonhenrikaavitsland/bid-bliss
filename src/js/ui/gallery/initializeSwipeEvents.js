import { handleSwipe } from './handleSwipe';

/**
 * Initializes swipe events for an element.
 * @param {HTMLElement} element - The element to add swipe events to.
 * @param {Array} media - The media array containing image data.
 * @param {number} activeIndex - The current index of the active image.
 * @param {Function} onSwipe - Callback function to handle swipe updates.
 */
export function initializeSwipeEvents(element, media, activeIndex, onSwipe) {
  let startX = 0;
  let endX = 0;

  element.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    endX = startX; // should now avoid undefined value!
  });

  element.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX;
  });

  element.addEventListener('touchend', () => {
    handleSwipe(startX, endX, media, activeIndex, onSwipe);
  });
}
