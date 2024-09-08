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
