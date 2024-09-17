import { formatDateTime } from '../../data/formatDateTime';
import { createDiv } from '../../elements/createDiv';
import { createSpan } from '../../elements/createSpan';
import { createTime } from '../../elements/createTime';
import { DEFAULT_TIME_FORMAT } from '../../data/constants';

/**
 * Creates and returns a new bid element to display bid information.
 *
 * This function constructs a bid element with details such as bid ID, the time the bid was placed, and the bid amount.
 * It formats the bid's creation date and displays the information in a styled container.
 *
 * @param {Object} bidData The data object containing information about the bid.
 * @param {string} bidData.id The unique identifier of the bid.
 * @param {string} [bidData.created] The date and time when the bid was placed.
 * @param {number} bidAmount The amount of the bid in credits.
 * @returns {HTMLElement} The constructed bid element displaying the bid information.
 * @example
 * ```js
 * // Create a new bid element and append it to the bid list
 * const bidData = { id: 'bid123', created: '2023-09-13T12:00:00Z' };
 * const bidAmount = 100;
 * const bidElement = createNewBid(bidData, bidAmount);
 * document.querySelector('.bids-container').append(bidElement);
 * ```
 */
export function createNewBid(bidData, bidAmount) {
  const bidsList = createDiv('flex', 'flex-col', 'text-center', 'gap-0.5', 'py-2', 'bg-correct', 'bg-opacity-50');

  const bidId = createSpan(bidData.id);
  const bidSize = createSpan(`${bidAmount} Cr.`);

  const bidFormatted = formatDateTime(bidData.created);
  const bidPlaced = createTime(bidData.created || '0000-00-00T00:00:00Z', bidFormatted || DEFAULT_TIME_FORMAT);

  bidsList.append(bidId, bidPlaced, bidSize);

  return bidsList;
}
