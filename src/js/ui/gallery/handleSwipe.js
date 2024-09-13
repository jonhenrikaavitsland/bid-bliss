/**
 * Handles swipe detection and triggers the appropriate action.
 * @param {number} startX - The starting X coordinate of the swipe.
 * @param {number} endX - The ending X coordinate of the swipe.
 * @param {Array} media - The media array containing image data.
 * @param {number} activeIndex - The current index of the active image.
 * @param {Function} onSwipe - Callback function to update the active image.
 */
export function handleSwipe(startX, endX, media, activeIndex, onSwipe) {
  const swipeThreshold = 50;

  if (startX - endX > swipeThreshold && activeIndex < media.length - 1) {
    // Swiped left
    onSwipe(activeIndex + 1);
  } else if (endX - startX > swipeThreshold && activeIndex > 0) {
    // Swiped right
    onSwipe(activeIndex - 1);
  }
}
