/**
 * Sorts an array of listings based on their end date, prioritizing active listings over ended ones.
 *
 * This function sorts listings by their `endsAt` date. Active listings are sorted in ascending order by end date,
 * while ended listings are sorted in descending order, appearing after active listings.
 *
 * @param {Array} listings An array of listing objects to be sorted.
 * @returns {Array} The sorted array of listings.
 * @example
 * ```js
 * // Sort a list of auction listings
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
