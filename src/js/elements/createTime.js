/**
 * Creates a `<time>` element with a specified datetime attribute, text content, and CSS classes.
 *
 * Generates a time element, sets the datetime attribute if valid, and adds optional text content and CSS classes.
 * Ensures that the datetime attribute is correctly formatted using the `isValidDateTime` validation function.
 *
 * @param {string} [datetime=''] The datetime attribute value for the `<time>` element. Defaults to an empty string if invalid.
 * @param {string} [textContent=''] The text content for the time element. Defaults to an empty string if not provided.
 * @param {...string} classes Optional CSS classes to add to the time element.
 * @returns {HTMLTimeElement} The created time element with the specified attributes and classes.
 * @example
 * ```js
 * // Create a time element with a valid datetime and text content
 * const timeElement = createTime('2023-09-13T15:30', 'September 13, 2023, 3:30 PM', 'timestamp', 'highlight');
 * document.body.appendChild(timeElement);
 *
 * // Create a time element with an invalid datetime, triggering a blank datetime attribute
 * const invalidTimeElement = createTime('invalid-datetime', 'Invalid Date');
 * document.body.appendChild(invalidTimeElement);
 *
 * // Create a time element with classes but no text content
 * const classOnlyTimeElement = createTime('2023-09-13T15:30', '', 'date-only');
 * document.body.appendChild(classOnlyTimeElement);
 * ```
 */
import { isValidDateTime } from '../validate/isValidDateTime';

export function createTime(datetime = '', textContent = '', ...classes) {
  const timeElement = document.createElement('time');

  timeElement.setAttribute('datetime', isValidDateTime(datetime) ? datetime : '');

  timeElement.textContent = typeof textContent === 'string' ? textContent : String(textContent);

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    timeElement.classList.add(...validClasses);
  }

  return timeElement;
}
