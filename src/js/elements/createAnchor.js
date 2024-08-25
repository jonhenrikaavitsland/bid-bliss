export function createAnchor(href, textContent, target = '_self', ...classes) {
  const anchor = document.createElement('a');
  anchor.href = href;
  anchor.textContent = textContent;
  anchor.target = target;
  anchor.classList.add(...classes);
  return anchor;
}
