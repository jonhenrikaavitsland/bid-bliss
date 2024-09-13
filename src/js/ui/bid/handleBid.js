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

/**
 * Handles the bidding process by validating and submitting a bid for a specified listing.
 *
 * This function validates the bid amount, cleans the listing ID, and submits the bid to the server.
 * If the listing ID is invalid or the bid fails validation, it displays an error message. Upon successful bid submission,
 * the function updates the bid list and re-renders the updated listings.
 *
 * @async
 * @param {Event} event The event object from the bid form submission.
 * @param {string} rawListingID The raw listing ID which may need cleaning and validation.
 * @param {HTMLElement} bidsContainer The container element where the new bid will be displayed.
 * @param {Object} currentHigh The current highest bid object containing the amount.
 * @returns {Promise<void>} No return value; handles bid placement and updates the DOM.
 * @example
 * ```js
 * // Handle bid placement when the user submits a bid
 * const formElement = document.querySelector('#bidForm');
 * formElement.addEventListener('submit', (event) => handleBid(event, 'listing-id-123', bidsContainer, { amount: 100 }));
 * ```
 */
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
    const url = `${API_Base}${API_Listings}/${listingID}/bids?_bids=true`;
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
    console.log('response:', response);

    if (response && response.data && Array.isArray(response.data.bids)) {
      response.data.bids.reverse();
    }

    const newBid = createNewBid(response.data.bids[0], sanitizedBidAmount);
    bidsContainer.prepend(newBid);
    console.log('newbid:', newBid);

    const newListings = await initializeListings();
    renderListings(newListings);

    bid.value = '';
    bid.classList.remove('border-correct');
  } catch (error) {
    console.error('Error placing bid:', error);
  }
}
