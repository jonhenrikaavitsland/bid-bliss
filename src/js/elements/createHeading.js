export function createHeadingElement(level, textContent, ...classes) {
  if (level < 1 || level > 6) {
    throw new Error('Heading level must be between 1 and 6');
  }

  const heading = document.createElement(`h${level}`);
  heading.classList.add(...classes);
  heading.textContent = textContent;
  return heading;
}
