import { handleSwipe } from './handleSwipe';

/**
 * Initializes swipe events on a specified element to navigate through media items.
 *
 * This function sets up touch event listeners on the element to detect swipe gestures.
 * It updates the active media index based on swipe direction, using the provided getter and setter functions.
 *
 * @param {HTMLElement} element The element on which swipe events will be initialized.
 * @param {Array} media An array of media items to navigate through.
 * @param {Function} getActiveIndex A function that returns the current active index of the media.
 * @param {Function} setActiveIndex A function that sets the new active index based on swipe direction.
 * @returns {void} No return value; sets up event listeners to handle swipe gestures.
 * @example
 * ```js
 * // Initialize swipe events on an image gallery
 * const galleryElement = document.querySelector('.gallery');
 * initializeSwipeEvents(galleryElement, mediaItems, getActiveIndex, setActiveIndex);
 * ```
 */
export function initializeSwipeEvents(element, media, getActiveIndex, setActiveIndex) {
  let startX = 0;
  let endX = 0;

  element.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    endX = startX;
  });

  element.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX;
  });

  element.addEventListener('touchend', () => {
    const activeIndex = getActiveIndex();

    handleSwipe(startX, endX, media, activeIndex, (newIndex) => {
      setActiveIndex(newIndex);
    });
  });
}
