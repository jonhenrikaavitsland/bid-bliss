/**
 * Creates a text node with the specified text content.
 *
 * Generates a text node using the provided text content. If the content is not a string,
 * it converts the content to a string to ensure a safe and consistent text node creation.
 *
 * @param {string} [textContent=''] The text content for the text node. Defaults to an empty string if not provided.
 * @returns {Text} The created text node with the specified content.
 * @example
 * ```js
 * // Create a text node with specified text
 * const textNode = createTextNode('Hello, World!');
 * document.body.appendChild(textNode);
 *
 * // Create a text node with a non-string input, which is converted to a string
 * const numberNode = createTextNode(12345);
 * document.body.appendChild(numberNode); // Outputs: 12345
 *
 * // Create an empty text node
 * const emptyNode = createTextNode();
 * document.body.appendChild(emptyNode);
 * ```
 */
export function createTextNode(textContent = '') {
  const safeTextContent = typeof textContent === 'string' ? textContent : String(textContent);

  return document.createTextNode(safeTextContent);
}
