export function isValidDateTime(datetime) {
  const date = new Date(datetime);
  return !Number.isNaN(date.getTime());
}
