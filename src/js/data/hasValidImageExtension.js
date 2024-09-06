export function hasValidImageExtension(url) {
  const validExtensions = /\.(jpg|jpeg|png|gif|webp|bmp|tiff|svg|ico|heic|heif|apng)$/i;
  return validExtensions.test(url);
}
