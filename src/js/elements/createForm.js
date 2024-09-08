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
