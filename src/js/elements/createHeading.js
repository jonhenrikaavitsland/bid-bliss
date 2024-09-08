export function createHeading(level, textContent = '', ...classes) {
  if (typeof level !== 'number' || level < 1 || level > 6) {
    throw new Error('Invalid heading level: must be a number between 1 and 6.');
  }

  const heading = document.createElement(`h${level}`);

  heading.textContent = typeof textContent === 'string' ? textContent : '';

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    heading.classList.add(...validClasses);
  }

  return heading;
}
