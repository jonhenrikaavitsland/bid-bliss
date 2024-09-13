/**
 * Creates a `<p>` (paragraph) element with specified text content and CSS classes.
 *
 * Generates a paragraph element with the provided text content and optional CSS classes.
 * Filters out invalid or empty classes before adding them to the paragraph.
 *
 * @param {string} [textContent=''] The text content for the paragraph. Defaults to an empty string if not a string.
 * @param {...string} classes Optional CSS classes to add to the paragraph element.
 * @returns {HTMLParagraphElement} The created paragraph element with the specified text content and classes.
 * @example
 * ```js
 * // Create a paragraph with text content and multiple classes
 * const paragraph = createParagraph('Hello, World!', 'intro', 'text-bold');
 * document.body.appendChild(paragraph);
 *
 * // Create a paragraph without text content but with classes
 * const emptyParagraph = createParagraph('', 'empty', 'placeholder');
 * document.body.appendChild(emptyParagraph);
 * ```
 */
export function createParagraph(textContent = '', ...classes) {
  const paragraph = document.createElement('p');

  paragraph.textContent = typeof textContent === 'string' ? textContent : '';

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    paragraph.classList.add(...validClasses);
  }

  return paragraph;
}
