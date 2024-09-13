/**
 * Cleans a listing ID by removing any leading and trailing double quotes.
 *
 * This function trims double quotes from the beginning and end of a string,
 * which is useful for ensuring a clean, standardized listing ID.
 *
 * @param {string} listingID The listing ID to clean.
 * @returns {string} The cleaned listing ID without leading or trailing double quotes.
 * @example
 * ```js
 * // Clean a listing ID
 * const rawID = '"12345"';
 * const cleanedID = cleanListingID(rawID);
 * console.log(cleanedID); // Outputs: 12345
 * ```
 */
export function cleanListingID(listingID) {
  return listingID.replace(/^"+|"+$/g, '');
}
