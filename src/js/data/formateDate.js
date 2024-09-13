/**
 * Formats a date-time string into a human-readable date format based on the specified time zone.
 *
 * Converts the provided date-time string into a formatted string that includes the year, month,
 * and day components, with an option to specify the time zone. If the date string is invalid, it returns 'Invalid date'.
 *
 * @param {string} datetimeString The date-time string to format.
 * @param {string} [timeZone='Europe/Oslo'] The time zone to use for formatting (defaults to 'Europe/Oslo').
 * @returns {string} The formatted date string, or 'Invalid date' if the input is not a valid date.
 * @example
 * ```js
 * // Format a date-time string
 * const datetime = '2023-09-13T15:30:00Z';
 * const formattedDate = formatDate(datetime);
 * console.log(formattedDate); // Outputs: 13 September 2023 (depending on time zone)
 *
 * // Format a date-time string with a specific time zone
 * const formattedDateWithZone = formatDate(datetime, 'America/New_York');
 * console.log(formattedDateWithZone); // Outputs: 13 September 2023 (depending on time zone)
 * ```
 */
export function formatDate(datetimeString, timeZone = 'Europe/Oslo') {
  const date = new Date(datetimeString);

  if (Number.isNaN(date.getTime())) {
    console.error(`Invalid date string provided: ${datetimeString}`);
    return 'Invalid date';
  }

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone,
  };

  return date.toLocaleString('en-GB', options);
}
