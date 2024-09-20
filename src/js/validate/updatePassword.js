/**
 * Updates the character counter for a password input field.
 *
 * This function dynamically updates the character count displayed in a counter element based on the
 * current length of the password entered. It also changes the color of the counter text to provide
 * feedback: black when no characters are entered, red if the password is shorter than 8 characters,
 * and green if it's 8 characters or longer.
 *
 * @param {HTMLInputElement} passwordInput - The password input field to monitor.
 * @param {HTMLElement} counterElement - The element where the character count will be displayed.
 * @example
 * updatePasswordCounter(document.getElementById('password'), document.getElementById('passwordCounter'));
 */
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
