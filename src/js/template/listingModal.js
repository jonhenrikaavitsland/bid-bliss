import { fetchData } from '../API/fetchData';
import { getProfile } from '../API/getProfile';
import { API_Base, API_Listings, DEFAULT_IMAGE_ALT, DEFAULT_TIME_FORMAT, DEFAULT_TITLE, modal } from '../data/constants';
import { formatDateTime } from '../data/formatDateTime';
import { formatDate } from '../data/formateDate';
import { closeSvg } from '../data/images';
import { createBtn } from '../elements/createBtn';
import { createDiv } from '../elements/createDiv';
import { createForm } from '../elements/createForm';
import { createHeading } from '../elements/createHeading';
import { createImg } from '../elements/createImg';
import { createInput } from '../elements/createInput';
import { createLabel } from '../elements/createLabel';
import { createParagraph } from '../elements/createParagraph';
import { createSection } from '../elements/createSection';
import { createSpan } from '../elements/createSpan';
import { createTime } from '../elements/createTime';
import { load } from '../localStorage/load';
import { getHighestBid } from '../ui/bid/getHighestBid';
import { handleBid } from '../ui/bid/handleBid';
import { closeModal } from '../ui/modal/closeModal';
import { runModal } from '../ui/modal/runModal';
import { loggedInButton } from './loggedInButton';
import { navLinks } from './navLinks';

/**
 * Creates a detailed modal for displaying information about a specific listing.
 *
 * This function constructs and returns a modal element containing detailed information about the specified listing,
 * including its title, description, images, bids, and interaction options. If the auction is still active, users can
 * place bids. The modal also includes navigation and close options. If the listing is not found, it displays an error message.
 *
 * @async
 * @function listingModal
 * @param {string} id - The unique identifier of the listing to display.
 * @returns {HTMLElement} - The constructed modal element displaying the listing details.
 * @example
 * // Display a modal for a listing with a specific ID
 * const modal = await listingModal('1234-5678-9101');
 * document.body.append(modal);
 */
export async function listingModal(id) {
  const isActive = load('profile');

  const currentListing = await fetchData(`${API_Base}${API_Listings}/${id}?_seller=true&_bids=true`);

  if (!currentListing) {
    console.error('Current listing not found');
    return createDiv('Error: Listing not found');
  }

  const { created, description, endsAt, media, title, updated, _count, bids, seller } = currentListing.data;

  const element = createDiv('flex', 'flex-col', 'rounded-xl', 'shadow-customShadow', 'min-w-40', 'max-w-96', 'my-auto', 'flex-grow', 'flex-shrink', 'xmd:landscape:max-w-[804px]', 'md:landscape:max-w-[1112px]', 'md:max-w-[672px]');
  element.setAttribute('id', 'profileModal');

  const closeBtn = createBtn('', 'backdrop-invert', 'rounded-full', 'shadow-customShadow', 'hover:animate-pulse');
  const closeImg = createImg(closeSvg, 'close', 'size-5');
  closeBtn.append(closeImg);
  const btnWrap = createDiv('size-9', 'flex', 'justify-center', 'items-center', 'cursor-pointer');
  btnWrap.addEventListener('click', () => {
    closeModal(modal);
  });
  btnWrap.append(closeBtn);
  const btnContainer = createDiv('flex', 'justify-between', 'items-center', 'bg-secondary', 'text-white', 'text-lg', 'rounded-t-xl', 'font-semibold', 'ps-2.5', 'md:ps-5', 'pe-0.5', 'md:pe-3', 'py-0.5', 'md:py-2', 'font-serif', 'capitalize');
  const heading = createHeading(2, title);
  btnContainer.append(heading, btnWrap);

  const subContainer = createDiv('flex', 'justify-between', 'bg-primary', 'text-neutralBg', 'px-2.5', 'py-3', 'md:p-5');

  const timeWrap = createSpan();
  timeWrap.textContent = 'Ends: ';

  const timeFormatted = formatDate(endsAt);
  const listEnding = createTime(endsAt || '0000-00-00T00:00:00Z', timeFormatted || DEFAULT_TIME_FORMAT);
  timeWrap.append(listEnding);

  const bidInfo = createSpan(`Bids: ${_count.bids || 0}`);

  subContainer.append(timeWrap, bidInfo);

  const topWrap = createDiv('flex', 'flex-col');

  const topContainer = createDiv('flex', 'flex-col', 'landscape:w-1/2', 'flex-1');

  const imageWrap = createDiv('w-full', 'aspect-square', 'overflow-hidden', 'flex', 'items-center', 'justify-center', 'h-full');
  imageWrap.addEventListener('click', () => {
    runModal(true, 'gallery', '', media);
  });

  const image = createImg(media[0]?.url, media[0]?.alt || DEFAULT_IMAGE_ALT, 'cursor-pointer', 'object-cover', 'w-full', 'h-full', 'landscape:rounded-bl-xl');
  imageWrap.append(image);
  topContainer.append(imageWrap);

  const bottomContainer = createDiv('flex', 'flex-col', 'landscape:w-1/2', 'bg-neutralBg', 'rounded-b-xl', 'landscape:rounded-s-none', 'flex-1');

  const InfoWrap = createSection('p-2.5', 'md:p-5', 'flex', 'flex-col', 'md:landscape:flex-row', 'md:landscape:justify-between', 'md:landscape:items-center', 'md:landscape:gap-x-10', 'md:landscape:flex-wrap');

  const headingMiddle = createHeading(3, `Auction# ${id.slice(0, 8)}`, 'font-serif');

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

  const auctionDetailsWrap = createSection('p-2.5', 'md:p-5', 'flex', 'flex-col', 'gap-2', 'pb-4');
  const auctionTitle = createHeading(2, title || DEFAULT_TITLE, 'font-serif', 'font-semibold', 'text-lg', 'capitalize');
  const auctionDescription = createParagraph(description);

  auctionDetailsWrap.append(auctionTitle, auctionDescription);
  timeWrap2.append(timeCreatedOrUpdated);
  InfoWrap.append(headingMiddle, timeWrap2);

  const interactionWrap = createSection('flex', 'flex-col', 'p-2.5', 'md:p-5', 'w-full', 'h-full');

  const auctionEndingWrap = createSpan('font-serif', 'font-semibold', 'text-lg', 'flex', 'flex-col', 'text-center');
  auctionEndingWrap.textContent = 'Auction ends at ';

  const timeFormattedFull = formatDateTime(endsAt);
  const auctionEndingTime = createTime(endsAt || '0000-00-00T00:00:00Z', timeFormattedFull || DEFAULT_TIME_FORMAT);
  auctionEndingWrap.append(auctionEndingTime);

  const callToAction = createHeading(3, 'Login to interact with this auction!', 'font-semibold', 'text-lg', 'mt-9', 'pb-10', 'text-center');

  const bidWrap = createForm('bid', 'place-bid', 'w-1/2', 'landscape:w-3/4', 'flex', 'mx-auto', 'mt-4', 'flex-col', 'md:flex-row', 'xsm:items-center', 'md:landscape:px-5', 'xsm:w-2/3');
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

  const bidLabel = createLabel('bid', 'place bid', 'sr-only');
  const bidContainer = createInput('number ', '0 cr.', 'bid', 'bg-white', 'capitalize', 'w-1/2', 'xmd:px-4', 'xmd:py-2', 'xmd:rounded-t-xl', 'xmd:w-full', 'text-center', 'md:rounded-s-xl', 'sm:shadow-customShadow');
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
    'xmd:rounded-b-xl',
    'xmd:w-full',
    'md:rounded-e-xl',
    'shadow-customShadow',
  );

  const bidsContainer = createDiv('mt-8', 'flex', 'flex-col', 'landscape:max-h-56', 'overflow-y-scroll');

  if (bids) {
    const reversedBids = [...bids].reverse();
    reversedBids.forEach((bid, index) => {
      const bidsList = createDiv('flex', 'flex-col', 'text-center', 'gap-0.5', 'py-2');
      if (index % 2 !== 1) {
        bidsList.classList.add('bg-white');
      }

      const slicedBidId = bid.id.slice(0, 8);
      const bidId = createSpan(`Bid#: ${slicedBidId}`);

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
    bidWrap.append(bidLabel, bidContainer, submitBtn);
  }

  interactionWrap.append(auctionEndingWrap);

  if (!isActive) {
    interactionWrap.append(callToAction);
  }

  if (isActive) {
    if (!hasEnded) {
      interactionWrap.innerHTML = '';
      interactionWrap.append(bidWrap);
    }
    interactionWrap.append(bidsContainer);
  }

  const bottomWrap = createDiv('h-full', 'w-full', 'flex', 'pb-5', 'md:pb-8');
  bottomWrap.append(interactionWrap);

  bottomContainer.append(InfoWrap, auctionDetailsWrap, bottomWrap);

  const containers = createDiv('flex', 'flex-col', 'landscape:flex-row');
  containers.append(topContainer, bottomContainer);
  topWrap.append(btnContainer, subContainer);
  element.append(topWrap, containers);
  return element;
}
