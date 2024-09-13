import { isValidUrl } from '../data/isValidUrl';

/**
 * Creates an anchor (`<a>`) element with specified attributes and classes.
 *
 * Validates the provided URL and assigns it to the anchor. If the URL is invalid, it defaults to `#`.
 * Allows setting the anchor's text content, target, and additional CSS classes.
 * When the target is set to `_blank`, it automatically adds `rel="noopener noreferrer"` for security.
 *
 * @param {string} href The URL for the anchor's `href` attribute. If invalid, defaults to `#`.
 * @param {string} [textContent=''] The text content to display inside the anchor. Defaults to an empty string.
 * @param {string} [target='_self'] The target attribute specifying where to open the link (`_self`, `_blank`, etc.). Defaults to `_self`.
 * @param {...string} classes Optional CSS classes to add to the anchor element.
 * @returns {HTMLAnchorElement} The created anchor element with specified attributes and classes.
 * @example
 * ```js
 * // Create a basic anchor element
 * const anchor = createAnchor('https://example.com', 'Visit Example', '_blank', 'link', 'external');
 * document.body.appendChild(anchor);
 *
 * // Create an anchor with invalid URL fallback
 * const invalidAnchor = createAnchor('invalid-url', 'Invalid Link');
 * document.body.appendChild(invalidAnchor);
 * ```
 */
export function createAnchor(href, textContent = '', target = '_self', ...classes) {
  const anchor = document.createElement('a');
  anchor.href = isValidUrl(href) ? href : '#';
  anchor.textContent = textContent;
  anchor.target = target;

  if (target === '_blank') {
    anchor.rel = 'noopener noreferrer';
  }

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trimEnd() !== '');
  if (validClasses.length) {
    anchor.classList.add(...validClasses);
  }

  return anchor;
}
