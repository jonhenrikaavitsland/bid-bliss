export function getTimeAhead(days) {
  if (typeof days !== 'number' || Number.isNaN(days)) {
    console.error('Invalid input: "days" must be a valid number.');
    return 'Invalid input';
  }

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + days);

  return currentDate.toISOString().slice(0, 16);
}
