/**
 * Creates a `<span>` element with specified text content and CSS classes.
 *
 * Generates a span element with the provided text content and optional CSS classes.
 * Filters out invalid or empty classes before adding them to the span element.
 *
 * @param {string} [textContent=''] The text content for the span. Defaults to an empty string if not a string.
 * @param {...string} classes Optional CSS classes to add to the span element.
 * @returns {HTMLSpanElement} The created span element with the specified text content and classes.
 * @example
 * ```js
 * // Create a span with text content and multiple classes
 * const span = createSpan('Hello, Span!', 'highlight', 'text-small');
 * document.body.appendChild(span);
 *
 * // Create a span without text content but with classes
 * const emptySpan = createSpan('', 'empty', 'placeholder');
 * document.body.appendChild(emptySpan);
 * ```
 */
export function createSpan(textContent = '', ...classes) {
  const span = document.createElement('span');

  span.textContent = typeof textContent === 'string' ? textContent : '';

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    span.classList.add(...validClasses);
  }

  return span;
}
