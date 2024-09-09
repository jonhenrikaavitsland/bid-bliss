import { API_Base, API_Listings, API_Key } from '../../data/constants';
import { sanitizeInput } from '../../validate/sanitize/sanitizeInput';
import { validateBid } from '../../validate/validateBid';
import { load } from '../../localStorage/load';
import { fetchData } from '../../API/fetchData';
import { createDiv } from '../../elements/createDiv';
import { createNewBid } from './createNewBid';
import { cleanListingID } from '../../data/cleanListingID';
import { renderListings } from '../../render/renderListings';
import { initializeListings } from '../../data/initializeListings';

export async function handleBid(event, rawListingID, bidsContainer, currentHigh) {
  event.preventDefault();

  const highestBid = currentHigh && currentHigh.amount ? currentHigh.amount : 0;

  const bid = document.querySelector('#bid');
  validateBid(bid, highestBid);

  if (!bid.classList.contains('border-correct')) return;

  const listingID = cleanListingID(rawListingID);
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (!uuidPattern.test(listingID)) {
    console.error('Invalid listing ID:', listingID);
    const errorMessage = createDiv('text-error', 'text-center');
    errorMessage.textContent = 'Error: Listing ID is not a valid UUID.';
    bidsContainer.prepend(errorMessage);
    return;
  }

  const sanitizedBidAmount = sanitizeInput(bid.value);

  try {
    const url = `${API_Base}${API_Listings}/${listingID}/bids`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${load('token')}`,
        'X-Noroff-API-Key': API_Key,
      },
      body: JSON.stringify({ amount: parseFloat(sanitizedBidAmount) }),
    };

    const response = await fetchData(url, options, 'bid');

    const newBid = createNewBid(response.data, sanitizedBidAmount);
    bidsContainer.prepend(newBid);

    const newListings = await initializeListings();
    renderListings(newListings);

    bid.value = '';
    bid.classList.remove('border-correct');
  } catch (error) {
    console.error('Error placing bid:', error);
  }
}
