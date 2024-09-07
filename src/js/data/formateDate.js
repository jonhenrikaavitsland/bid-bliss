export function formatDate(datetimeString) {
  const date = new Date(datetimeString);

  if (isNaN(date)) return 'invalid date';

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Europe/Oslo',
  };

  return date.toLocaleString('en-GB', options);
}
