export function getHighestBid(item) {
  if (!item.bids || item.bids.length === 0) {
    return null;
  }

  const highestBid = item.bids.reduce((max, bid) => (bid.amount > max.amount ? bid : max));

  return highestBid;
}
