/**
 * Formats a date-time string into a human-readable format based on the specified time zone.
 *
 * Converts the provided date-time string into a formatted string that includes date and time
 * components, with an option to specify the time zone. If the date string is invalid, it returns 'Invalid date'.
 *
 * @param {string} datetimeString The date-time string to format.
 * @param {string} [timeZone='Europe/Oslo'] The time zone to use for formatting (defaults to 'Europe/Oslo').
 * @returns {string} The formatted date-time string, or 'Invalid date' if the input is not a valid date.
 * @example
 * ```js
 * // Format a date-time string
 * const datetime = '2023-09-13T15:30:00Z';
 * const formattedDate = formatDateTime(datetime);
 * console.log(formattedDate); // Outputs: 13 September 2023 at 17:30 (depending on time zone)
 *
 * // Format a date-time string with a specific time zone
 * const formattedDateWithZone = formatDateTime(datetime, 'America/New_York');
 * console.log(formattedDateWithZone); // Outputs: 13 September 2023 at 11:30 (depending on time zone)
 * ```
 */
export function formatDateTime(datetimeString, timeZone = 'Europe/Oslo') {
  const date = new Date(datetimeString);

  if (Number.isNaN(date.getTime())) {
    console.error(`Invalid date string provided: ${datetimeString}`);
    return 'Invalid date';
  }

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone,
  };

  return date.toLocaleString('en-GB', options);
}
