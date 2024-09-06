import { load } from '../localStorage/load';

export function validateBid(bid, currentHigh) {
  const profile = load('profile');
  const { credits } = profile;
  const bidAmount = parseFloat(bid.value);

  if (isNaN(bidAmount) || bidAmount <= 0 || bidAmount > credits || bidAmount <= currentHigh) {
    bid.classList.add('border-2', 'border-error');
    bid.classList.remove('border-correct');
  } else {
    bid.classList.add('border-correct');
    bid.classList.remove('border-error');
  }
}
