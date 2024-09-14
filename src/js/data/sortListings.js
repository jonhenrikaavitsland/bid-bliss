/**
 * Sorts a list of listings based on their end dates, prioritizing active listings over ended ones.
 *
 * The function sorts listings that are still active (not ended) by their end date in ascending order (earliest first),
 * and places listings that have ended in descending order of their end dates (most recent ended first).
 *
 * @param {Object} listings The listings object containing the data to be sorted.
 * @param {Array} listings.data The array of listings to sort, each containing an `endsAt` date property.
 * @returns {Array} The sorted array of listings. Returns an empty array if the input is invalid.
 * @example
 * ```js
 * // Sort an array of listings by end date
 * const listings = {
 *   data: [
 *     { endsAt: '2023-09-20T10:00:00Z' },
 *     { endsAt: '2023-09-10T12:00:00Z' },
 *     { endsAt: '2023-09-15T08:00:00Z' }
 *   ]
 * };
 * const sortedListings = sortListings(listings);
 * console.log(sortedListings);
 * ```
 */
export function sortListings(listings) {
  if (!listings || !Array.isArray(listings)) {
    console.error('Invalid listings data provided.');
    return [];
  }

  const now = new Date();

  return listings.sort((a, b) => {
    const dateA = new Date(a.endsAt);
    const dateB = new Date(b.endsAt);

    const hasEndedA = dateA < now;
    const hasEndedB = dateB < now;

    if (!hasEndedA && !hasEndedB) {
      return dateA - dateB;
    } else if (!hasEndedA) {
      return -1;
    } else if (!hasEndedB) {
      return 1;
    } else {
      return dateB - dateA;
    }
  });
}
