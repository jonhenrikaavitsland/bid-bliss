/**
 * Creates a heading (`<h1>` to `<h6>`) element with specified text content and CSS classes.
 *
 * Generates a heading element of the specified level (between 1 and 6). Throws an error if the level is invalid.
 * Adds optional text content and valid CSS classes to the heading.
 *
 * @param {number} level The heading level, which must be a number between 1 and 6.
 * @param {string} [textContent=''] The text content for the heading. Defaults to an empty string.
 * @param {...string} classes Optional CSS classes to add to the heading element.
 * @returns {HTMLElement} The created heading element with the specified level, text, and classes.
 * @throws {Error} Throws an error if the heading level is not a number between 1 and 6.
 * @example
 * ```js
 * // Create an h1 heading with text and multiple classes
 * const heading = createHeading(1, 'Welcome to My Site', 'main-title', 'highlight');
 * document.body.appendChild(heading);
 *
 * // Create an h3 heading with no text and no classes
 * const subheading = createHeading(3);
 * document.body.appendChild(subheading);
 *
 * // Handle invalid heading level
 * try {
 *   createHeading(7, 'Invalid Heading'); // This will throw an error
 * } catch (error) {
 *   console.error(error.message); // Outputs: Invalid heading level: must be a number between 1 and 6.
 * }
 * ```
 */
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
