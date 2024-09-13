/**
 * Creates a `<form>` element with an optional data attribute and specified CSS classes.
 *
 * Generates a form element and, if valid, adds a data attribute with the specified name and value.
 * Also adds any valid CSS classes passed as arguments to the form element.
 *
 * @param {string} [dataAttributeName=''] The name of the data attribute (without the `data-` prefix). Defaults to an empty string.
 * @param {string} [dataAttributeValue=''] The value of the data attribute. Defaults to an empty string.
 * @param {...string} classes Optional CSS classes to add to the form element.
 * @returns {HTMLFormElement} The created form element with the specified data attribute and classes.
 * @example
 * ```js
 * // Create a form with a data attribute and multiple classes
 * const form = createForm('user', '123', 'form', 'responsive');
 * document.body.appendChild(form);
 *
 * // Create a form without a data attribute but with classes
 * const plainForm = createForm('', '', 'simple-form');
 * document.body.appendChild(plainForm);
 * ```
 */
export function createForm(dataAttributeName = '', dataAttributeValue = '', ...classes) {
  const form = document.createElement('form');

  if (typeof dataAttributeName === 'string' && dataAttributeName.trim() && typeof dataAttributeValue === 'string' && dataAttributeValue.trim()) {
    form.setAttribute(`data-${dataAttributeName}`, dataAttributeValue);
  }

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    form.classList.add(...validClasses);
  }

  return form;
}
