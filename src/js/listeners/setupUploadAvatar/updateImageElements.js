/**
 * Updates the source and alt text of avatar-related image elements on the page.
 *
 * This function updates the `src` and `alt` attributes of various avatar elements, including the main avatar image,
 * the avatar button, and the desktop avatar image. Logs an error if any of these elements are not found in the DOM.
 *
 * @param {string} url The URL of the new avatar image.
 * @param {string} altText The alt text to use for the avatar image elements, typically the user's name.
 * @returns {void} No return value; updates the image elements directly.
 * @example
 * ```js
 * // Update avatar images with a new URL and alt text
 * const newAvatarUrl = 'https://example.com/avatar.jpg';
 * const altText = 'User Name';
 * updateImageElements(newAvatarUrl, altText);
 * ```
 */
export function updateImageElements(url, altText) {
  const avatarImage = document.querySelector('[data-avatar="img"]');
  const avatarBtn = document.querySelector('[data-avatar="btn"]');
  const desktopAvatarImage = document.querySelector('[data-avatar="desktop"]');

  if (avatarImage) {
    avatarImage.src = url;
    avatarImage.alt = altText;
  } else {
    console.error('Avatar image element not found');
  }

  if (avatarBtn) {
    avatarBtn.src = url;
    avatarBtn.alt = altText;
  } else {
    console.error('Avatar button element not found');
  }

  if (desktopAvatarImage) {
    desktopAvatarImage.src = url;
    desktopAvatarImage.alt = altText;
  } else {
    console.error('Desktop avatar image element not found');
  }
}
