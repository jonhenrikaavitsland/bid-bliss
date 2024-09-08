export function createTextNode(textContent = '') {
  const safeTextContent = typeof textContent === 'string' ? textContent : String(textContent);

  return document.createTextNode(safeTextContent);
}
