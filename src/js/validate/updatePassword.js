export function updatePasswordCounter(passwordInput, counterElement) {
  const passwordLength = passwordInput.value.length;

  counterElement.textContent = `Characters: ${passwordLength}`;

  if (passwordLength === 0) {
    counterElement.style.color = 'black';
  } else if (passwordLength < 8) {
    counterElement.style.color = 'red';
  } else {
    counterElement.style.color = 'green';
  }
}
