export function formatDateTime(datetimeString) {
  const date = new Date(datetimeString);

  if (isNaN(date)) return 'invalid date';

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Europe/Oslo',
  };

  return date.toLocaleString('nb-NO', options);
}
