// sortUtils.js
export function sortListings(listings) {
  if (!listings || !Array.isArray(listings.data)) {
    console.error('Invalid listings data provided.');
    return [];
  }

  const now = new Date();

  return listings.data.sort((a, b) => {
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
