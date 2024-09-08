export function sortListings(listings) {
  console.log('Sort:', listings);

  const sortedListings = listings.data.sort((a, b) => {
    const now = new Date();

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
  return sortedListings;
}
