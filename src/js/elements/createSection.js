/**
 * Creates a `<section>` element with specified CSS classes.
 *
 * Generates a section element and adds any valid CSS classes passed as arguments.
 * Filters out non-string or empty classes before adding them to the section.
 *
 * @param {...string} classes Optional CSS classes to add to the section element.
 * @returns {HTMLElement} The created section element with the specified classes.
 * @example
 * ```js
 * // Create a section with multiple classes
 * const section = createSection('main-section', 'highlight', 'responsive');
 * document.body.appendChild(section);
 *
 * // Create a section without any classes
 * const plainSection = createSection();
 * document.body.appendChild(plainSection);
 * ```
 */
export function createSection(...classes) {
  const element = document.createElement('section');

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    element.classList.add(...validClasses);
  }

  return element;
}
