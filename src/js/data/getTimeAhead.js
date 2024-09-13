/**
 * Calculates the date and time a specified number of days ahead from the current date.
 *
 * Adds the specified number of days to the current date and returns the resulting date-time
 * in ISO string format, truncated to display up to the minute.
 *
 * @param {number} days The number of days to add to the current date.
 * @returns {string} The ISO string of the future date truncated to 'YYYY-MM-DDTHH:MM', or 'Invalid input' if the input is not a valid number.
 * @example
 * ```js
 * // Get the date and time 5 days ahead
 * const futureDate = getTimeAhead(5);
 * console.log(futureDate); // Outputs a string like '2023-09-18T12:00' depending on current date and time
 *
 * // Handle invalid input
 * const invalidInput = getTimeAhead('five');
 * console.log(invalidInput); // Outputs: 'Invalid input'
 * ```
 */
export function getTimeAhead(days) {
  if (typeof days !== 'number' || Number.isNaN(days)) {
    console.error('Invalid input: "days" must be a valid number.');
    return 'Invalid input';
  }

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);

  return currentDate.toISOString().slice(0, 16);
}
