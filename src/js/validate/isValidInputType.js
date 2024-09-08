export function isValidInputType(type) {
  const validTypes = ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'color', 'date', 'datetime-local', 'file', 'month', 'range', 'time', 'week', 'checkbox', 'radio', 'hidden', 'button', 'submit', 'reset'];
  return validTypes.includes(type);
}
