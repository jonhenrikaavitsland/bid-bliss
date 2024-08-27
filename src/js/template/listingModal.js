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

const DEFAULT_TIME_FORMAT = 'invalid date';
const DEFAULT_IMAGE_URL = '/src/images/placeholderItem.png';
const DEFAULT_IMAGE_ALT = 'listing item';
const DEFAULT_TITLE = 'Unknown item';

export function listingModal(listings) {
  const isActive = load('profile');
  const currentListingID = load('listingID');
  console.log(listings);
  const currentListing = listings.find((listing) => listing.id === currentListingID);
  console.log(currentListing);
  save('media', currentListing.media);

  const element = createArticle('rounded-xl', 'grow', 'bg-neutralBg', 'overflow-y-auto', 'h-[90%]', 'max-h-screen');

  const titleTop = createSection('bg-secondary', 'rounded-t-xl');

  const headingTop = createHeading(2, currentListing.title, 'font-serif', 'font-semibold', 'capitalize', 'md:text-lg', 'text-neutralBg', 'px-2.5', 'py-2', 'md:px-5', 'md:py-4');

  const subTopContainer = createDiv('bg-primary', 'text-neutralBg', 'px-2.5', 'py-2', 'md:px-5', 'md:py-4', 'flex', 'justify-between');

  const timeWrap = createSpan();
  timeWrap.textContent = 'Ends: ';

  const timeFormatted = formatDate(currentListing.endsAt);
  const listEnding = createTime(currentListing.endsAt || '0000-00-00T00:00:00Z', timeFormatted || DEFAULT_TIME_FORMAT);

  const bidInfo = createSpan(`Bids: ${currentListing._count.bids || 0}`);

  const imageWrap = createDiv('w-full', 'aspect-square', 'overflow-hidden', 'flex', 'items-center', 'justify-center');
  imageWrap.addEventListener('click', () => {
    runModal(true, 'gallery');
  });

  const image = createImg(currentListing.media[0]?.url || DEFAULT_IMAGE_URL, currentListing.media[0]?.alt || DEFAULT_IMAGE_ALT, 'cursor-pointer', 'object-cover', 'w-full', 'h-full');

  const InfoWrap = createSection('p-2.5', 'md:p-5', 'flex', 'flex-col');

  const headingMiddle = createHeading(3, `Auction# ${currentListing.id}`, 'font-serif');

  const timeWrap2 = createSpan();
  let timeFormattedCreatedOrUpdated;

  if (currentListing.updated === currentListing.created) {
    timeWrap2.textContent = 'Created: ';
    timeFormattedCreatedOrUpdated = formatDate(currentListing.created);
  } else {
    timeWrap2.textContent = 'Updated: ';
    timeFormattedCreatedOrUpdated = formatDate(currentListing.updated);
  }

  const timeCreatedOrUpdated = createTime(currentListing.endsAt || '0000-00-00T00:00:00Z', timeFormattedCreatedOrUpdated || DEFAULT_TIME_FORMAT);

  const auctionDetailsWrap = createSection('p-2.5', 'md:p-5', 'flex', 'flex-col', 'gap-2');

  const auctionTitle = createHeading(2, currentListing.title || DEFAULT_TITLE, 'font-serif', 'font-semibold', 'text-lg', 'capitalize');

  const auctionDescription = createParagraph(currentListing.description);

  const interactionWrap = createSection('flex', 'flex-col', 'p-2.5', 'md:p-5', 'mt-2.5');

  const auctionEndingWrap = createSpan('font-serif', 'font-semibold', 'text-lg', 'flex', 'flex-col', 'text-center');
  auctionEndingWrap.textContent = 'Auction ends at ';

  const timeFormattedFull = formatDateTime(currentListing.endsAt);
  const auctionEndingTime = createTime(currentListing.endsAt || '0000-00-00T00:00:00Z', timeFormattedFull || DEFAULT_TIME_FORMAT);

  const callToAction = createHeading(3, 'Login to interact with this auction!', 'font-semibold', 'text-lg', 'mt-9', 'pb-10');

  interactionWrap.append(auctionEndingWrap);
  if (!isActive) {
    interactionWrap.append(callToAction);
  }

  // IF logged in, bid function.
  // If logged in, view bids on listing.

  auctionEndingWrap.append(auctionEndingTime);

  auctionDetailsWrap.append(auctionTitle, auctionDescription);
  timeWrap2.append(timeCreatedOrUpdated);
  InfoWrap.append(headingMiddle, timeWrap2);
  timeWrap.append(listEnding);
  imageWrap.append(image);
  subTopContainer.append(timeWrap, bidInfo);
  titleTop.append(headingTop);
  element.append(titleTop, subTopContainer, imageWrap, InfoWrap, auctionDetailsWrap, interactionWrap);

  return element;
}
