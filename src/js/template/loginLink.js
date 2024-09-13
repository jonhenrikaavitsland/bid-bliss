import { createBtn } from '../elements/createBtn';
import { createDiv } from '../elements/createDiv';

/**
 * Creates and returns a login link button element wrapped in a container.
 *
 * This function constructs a button with the text "Login" styled for display and interaction.
 * The button triggers the login modal when clicked by setting a `data-modal` attribute used for event handling.
 *
 * @returns {HTMLElement} The constructed container element with a login button.
 * @example
 * ```js
 * // Create a login link element and append it to the navigation
 * const loginButton = loginLink();
 * document.querySelector('nav').append(loginButton);
 * ```
 */
export function loginLink() {
  const element = createDiv('flex', 'flex-col', 'lg:justify-center');

  const btn = createBtn('Login', 'font-serif', 'text-neutralBg', 'font-medium', 'uppercase', 'py-3', 'px-4', 'hover:hoverPrimary', 'rounded-xl', 'md:text-lg', 'md:px-6', 'md:text-xl');

  btn.setAttribute('data-modal', 'loginModalOpen');

  element.append(btn);

  return element;
}
