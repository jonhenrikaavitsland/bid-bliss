export function createParagraph(textContent, ...classes) {
  const paragraph = document.createElement('p');
  paragraph.classList.add(...classes);
  paragraph.textContent = textContent;
  return paragraph;
}
