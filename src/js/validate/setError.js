export function setError(element, message) {
  element.innerHTML = message;
  element.classList.add('text-error');
}
