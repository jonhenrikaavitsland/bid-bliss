export function createForm(dataAttributeName = '', dataAttributeValue, ...classes) {
  const form = document.createElement('form');

  if (dataAttributeName && dataAttributeValue) {
    form.setAttribute(`data-${dataAttributeName}`, dataAttributeValue);
  }

  form.classList.add(...classes);
  return form;
}
