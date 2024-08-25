export function createImg(src, alt, ...classes) {
  const image = document.createElement('img');
  image.classList.add(...classes);
  image.src = src;
  image.alt = alt;
  return image;
}
