/**
 * Retrieves the highest bid from a list of bids on an item.
 *
 * This function checks if the item has any bids and returns the highest bid based on the bid amount.
 * If there are no bids, it returns `null`.
 *
 * @param {Object} item The item object containing a list of bids.
 * @param {Array} item.bids An array of bid objects associated with the item.
 * @returns {Object|null} The highest bid object if available, or `null` if no bids are present.
 * @example
 * ```js
 * // Get the highest bid from an item
 * const item = { bids: [{ amount: 100 }, { amount: 200 }, { amount: 150 }] };
 * const highestBid = getHighestBid(item);
 * console.log(highestBid); // Outputs: { amount: 200 }
 * ```
 */
export function getHighestBid(item) {
  if (!item.bids || item.bids.length === 0) {
    return null;
  }

  const highestBid = item.bids.reduce((max, bid) => (bid.amount > max.amount ? bid : max));

  return highestBid;
}
