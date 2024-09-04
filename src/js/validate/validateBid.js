import { load } from '../localStorage/load';

export function validateBid(bid) {
  const profile = load('profile');
  const { credits } = profile;
  const bidAmount = parseFloat(bid.value);

  if (isNaN(bidAmount) || bidAmount <= 0 || bidAmount > credits) {
    bid.classList.add('border-2', 'border-error');
    bid.classList.remove('border-correct');
  } else {
    bid.classList.add('border-correct');
    bid.classList.remove('border-error');
  }
}
