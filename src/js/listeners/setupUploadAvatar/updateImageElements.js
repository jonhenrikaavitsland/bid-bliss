export function updateImageElements(url, altText) {
  const avatarImage = document.querySelector('[data-avatar="img"]');
  const avatarBtn = document.querySelector('[data-avatar="btn"]');
  const desktopAvatarImage = document.querySelector('[data-avatar="desktop"]');

  avatarImage.src = url;
  avatarImage.alt = altText;
  avatarBtn.src = url;
  avatarBtn.alt = altText;
  desktopAvatarImage.src = url;
  desktopAvatarImage.alt = altText;
}
