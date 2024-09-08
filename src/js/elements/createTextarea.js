export function createTextarea(id = '', placeholder = '', rows = 4, ...classes) {
  const element = document.createElement('textarea');

  element.id = typeof id === 'string' && id.trim() !== '' ? id : '';

  element.placeholder = typeof placeholder === 'string' ? placeholder : '';

  element.rows = Number.isInteger(rows) && rows > 0 ? rows : 4;

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    element.classList.add(...validClasses);
  }

  return element;
}
