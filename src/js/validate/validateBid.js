import { load } from '../localStorage/load';

/**
 * Validates a bid amount against the user's available credits and the current highest bid.
 *
 * This function checks if the bid amount is a valid number, greater than zero, within the user's available credits,
 * and higher than the current highest bid. It updates the bid input styling to reflect whether the bid is valid or not.
 *
 * @param {HTMLInputElement} bid The input element containing the bid amount.
 * @param {number} currentHigh The current highest bid amount that the new bid must exceed.
 * @returns {void} No return value; modifies the DOM to update the bid input's validation state.
 * @example
 * ```js
 * // Validate a user's bid against their credits and the current highest bid
 * const bidInput = document.querySelector('#bid');
 * validateBid(bidInput, 100); // Assuming the current highest bid is 100
 * ```
 */
export function validateBid(bid, currentHigh) {
  const profile = load('profile');
  const { credits } = profile;
  const bidAmount = parseFloat(bid.value);

  if (isNaN(bidAmount) || bidAmount <= 0 || bidAmount > credits || bidAmount <= currentHigh) {
    bid.classList.add('border-2', 'border-error');
    bid.classList.remove('border-correct');
  } else {
    bid.classList.add('border-correct');
    bid.classList.remove('border-error');
  }
}
