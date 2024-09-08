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
