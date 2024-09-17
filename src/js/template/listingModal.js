import { createArticle } from '../elements/createArticle';
import { createDiv } from '../elements/createDiv';
import { createHeading } from '../elements/createHeading';
import { createSection } from '../elements/createSection';
import { createSpan } from '../elements/createSpan';
import { load } from '../localStorage/load';
import { createTime } from '../elements/createTime';
import { formatDate } from '../data/formateDate';
import { createImg } from '../elements/createImg';
import { createParagraph } from '../elements/createParagraph';
import { formatDateTime } from '../data/formatDateTime';
import { runModal } from '../ui/modal/runModal';
import { save } from '../localStorage/save';
import { createForm } from '../elements/createForm';
import { createBtn } from '../elements/createBtn';
import { createInput } from '../elements/createInput';
import { handleBid } from '../ui/bid/handleBid';
import { getHighestBid } from '../ui/bid/getHighestBid';
import { getProfile } from '../API/getProfile';
import { loggedInButton } from './loggedInButton';
import { navLinks } from './navLinks';
import { closeModal } from '../ui/modal/closeModal';
import { API_Base, API_Listings, modal } from '../data/constants';
import { closeSvg, placeholderItemImg } from '../data/images';
import { fetchData } from '../API/fetchData';

/**
 * Creates and returns a detailed modal element for displaying information about a specific listing.
 *
 * This function fetches the details of a listing using its ID and constructs a detailed modal that includes
 * information such as the listing's title, description, images, bid history, and interaction options like
 * bidding if the auction is still active. The modal also handles different states such as showing a call to action
 * for login if the user is not active.
 *
 * @async
 * @param {string} id - The ID of the listing to fetch and display.
 * @returns {Promise<HTMLElement>} The constructed modal element displaying the listing details.
 *
 * @example
 * // Create and display a listing modal for a specific listing ID
 * const listingModalElement = await listingModal('12345');
 * document.body.append(listingModalElement);
 */
export const DEFAULT_TIME_FORMAT = 'invalid date';
const DEFAULT_IMAGE_URL = placeholderItemImg;
const DEFAULT_IMAGE_ALT = 'listing item';
const DEFAULT_TITLE = 'Unknown item';

export async function listingModal(id) {
  const isActive = load('profile');

  const currentListing = await fetchData(`${API_Base}${API_Listings}/${id}?_seller=true&_bids=true`);

  if (!currentListing) {
    console.error('Current listing not found');
    return createDiv('Error: Listing not found');
  }

  const { created, description, endsAt, media, title, updated, _count, bids, seller } = currentListing.data;

  const element = createArticle('relative', 'rounded-xl', 'grow', 'overflow-y-auto', 'max-h-[90%]', 'max-w-lg', 'md:max-w-2xl');

  const titleTop = createSection('bg-secondary', 'rounded-t-xl', 'text-lg', 'px-2.5', 'py-2.5', 'md:px-5', 'md:py-4');
  const headingTop = createHeading(2, title, 'font-serif', 'font-semibold', 'capitalize', 'md:text-lg', 'text-neutralBg');

  const subTopContainer = createDiv('bg-primary', 'text-neutralBg', 'px-2.5', 'py-2', 'md:px-5', 'md:py-4', 'flex', 'justify-between');
  const timeWrap = createSpan();
  timeWrap.textContent = 'Ends: ';

  const timeFormatted = formatDate(endsAt);
  const listEnding = createTime(endsAt || '0000-00-00T00:00:00Z', timeFormatted || DEFAULT_TIME_FORMAT);

  const bidInfo = createSpan(`Bids: ${_count.bids || 0}`);

  const imageWrap = createDiv('w-full', 'aspect-square', 'overflow-hidden', 'flex', 'items-center', 'justify-center');
  imageWrap.addEventListener('click', () => {
    runModal(true, 'gallery', '', media);
  });

  const image = createImg(media[0]?.url || DEFAULT_IMAGE_URL, media[0]?.alt || DEFAULT_IMAGE_ALT, 'cursor-pointer', 'object-cover', 'w-full', 'h-full');

  const InfoWrap = createSection('p-2.5', 'md:p-5', 'flex', 'flex-col', 'bg-neutralBg');
  const headingMiddle = createHeading(3, `Auction# ${id}`, 'font-serif');

  const timeWrap2 = createSpan();
  let timeFormattedCreatedOrUpdated;

  if (updated === created) {
    timeWrap2.textContent = 'Created: ';
    timeFormattedCreatedOrUpdated = formatDate(created);
  } else {
    timeWrap2.textContent = 'Updated: ';
    timeFormattedCreatedOrUpdated = formatDate(updated);
  }

  const timeCreatedOrUpdated = createTime(endsAt || '0000-00-00T00:00:00Z', timeFormattedCreatedOrUpdated || DEFAULT_TIME_FORMAT);

  const auctionDetailsWrap = createSection('p-2.5', 'md:p-5', 'flex', 'flex-col', 'gap-2', 'bg-neutralBg', 'pb-4');
  const auctionTitle = createHeading(2, title || DEFAULT_TITLE, 'font-serif', 'font-semibold', 'text-lg', 'capitalize');
  const auctionDescription = createParagraph(description);

  const interactionWrap = createSection('flex', 'flex-col', 'p-2.5', 'md:p-5', 'bg-neutralBg');

  const auctionEndingWrap = createSpan('font-serif', 'font-semibold', 'text-lg', 'flex', 'flex-col', 'text-center');
  auctionEndingWrap.textContent = 'Auction ends at ';

  const timeFormattedFull = formatDateTime(endsAt);
  const auctionEndingTime = createTime(endsAt || '0000-00-00T00:00:00Z', timeFormattedFull || DEFAULT_TIME_FORMAT);

  const callToAction = createHeading(3, 'Login to interact with this auction!', 'font-semibold', 'text-lg', 'mt-9', 'pb-10');
  const bidWrap = createForm('bid', 'place-bid', 'w-1/2', 'flex', 'mx-auto', 'mt-4', 'xsm:flex-col', 'xsm:items-center');
  const highestBid = getHighestBid(currentListing.data) || { amount: 0 };

  const hasEnded = new Date(endsAt) < new Date();

  if (!hasEnded) {
    bidWrap.addEventListener('submit', async (event) => {
      handleBid(event, id, bidsContainer, highestBid.amount);
      setTimeout(getProfile, 500);
      setTimeout(async () => {
        const navElement = document.querySelector('nav');
        navElement.innerHTML = '';
        navElement.append(loggedInButton());
        const links = navLinks();
        navElement.append(links);
      }, 1000);
    });
  }

  const bidContainer = createInput('number ', '0 cr.', 'bid', 'bg-white', 'capitalize', 'w-1/2', 'xsm:px-4', 'xsm:py-2', 'xsm:rounded-t-xl', 'xsm:w-full', 'text-center', 'sm:rounded-s-xl', 'sm:shadow-customShadow');
  const submitBtn = createBtn(
    'place bid',
    'uppercase',
    'bg-secondary',
    'hover:bg-hoverSecondary',
    'text-white',
    'font-serif',
    'text-lg',
    'py-2',
    'px-4',
    'md:py-3',
    'md:px-6',
    'md:text-xl',
    'w-1/2',
    'xsm:rounded-b-xl',
    'xsm:w-full',
    'sm:rounded-e-xl',
    'shadow-customShadow',
  );

  const bidsContainer = createDiv('mt-8', 'flex', 'flex-col', 'pb-10');

  if (bids) {
    const reversedBids = [...bids].reverse();
    reversedBids.forEach((bid, index) => {
      const bidsList = createDiv('flex', 'flex-col', 'text-center', 'gap-0.5', 'py-2');
      if (index % 2 !== 1) {
        bidsList.classList.add('bg-white');
      }

      const bidId = createSpan(bid.id);

      const bidFormatted = formatDateTime(bid.created);
      const bidPlaced = createTime(bid.created || '0000-00-00T00:00:00Z', bidFormatted || DEFAULT_TIME_FORMAT);

      const bidSize = createSpan(`${bid.amount} Cr.`);

      bidsList.append(bidId, bidPlaced, bidSize);
      bidsContainer.append(bidsList);
    });
  }

  if (hasEnded) {
    auctionEndingWrap.classList.add('text-error');
    auctionEndingWrap.textContent = 'Auction has ended!';
  } else {
    bidWrap.append(bidContainer, submitBtn);
  }

  interactionWrap.append(auctionEndingWrap);

  if (!isActive) {
    interactionWrap.append(callToAction);
  }

  if (isActive) {
    if (!hasEnded) {
      interactionWrap.append(bidWrap);
    }
    interactionWrap.append(bidsContainer);
  }

  const closeBtn = createBtn('', 'absolute', 'top-2.5', 'right-2.5', 'backdrop-invert', 'rounded-full', 'shadow-customShadow', 'hover:animate-pulse');
  const closeImg = createImg(closeSvg, 'close', 'size-5');
  closeBtn.addEventListener('click', () => {
    closeModal(modal);
  });

  closeBtn.append(closeImg);

  auctionEndingWrap.append(auctionEndingTime);

  auctionDetailsWrap.append(auctionTitle, auctionDescription);
  timeWrap2.append(timeCreatedOrUpdated);
  InfoWrap.append(headingMiddle, timeWrap2);
  timeWrap.append(listEnding);
  imageWrap.append(image);
  subTopContainer.append(timeWrap, bidInfo);
  titleTop.append(headingTop);
  element.append(titleTop, subTopContainer, imageWrap, InfoWrap, auctionDetailsWrap, interactionWrap, closeBtn);

  return element;
}
