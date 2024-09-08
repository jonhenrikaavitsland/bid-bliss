export function createParagraph(textContent = '', ...classes) {
  const paragraph = document.createElement('p');

  paragraph.textContent = typeof textContent === 'string' ? textContent : '';

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    paragraph.classList.add(...validClasses);
  }

  return paragraph;
}
