import { formatDateTime } from '../data/formatDateTime';
import { createDiv } from '../elements/createDiv';
import { createHeading } from '../elements/createHeading';
import { createImg } from '../elements/createImg';
import { createSection } from '../elements/createSection';
import { createSpan } from '../elements/createSpan';
import { createTime } from '../elements/createTime';
import { save } from '../localStorage/save';
import { runModal } from '../ui/modal/runModal';
import { createArticle } from '../elements/createArticle';

const DEFAULT_TITLE = 'Unknown item';
const DEFAULT_IMAGE_ALT = 'listing item';
const DEFAULT_TIME_FORMAT = 'invalid date';

/**
 * Creates a card element to display a listing's details, including its title, image, end time, and bid count.
 *
 * This function constructs a listing card based on the provided data. The card includes an image, title, and bid information.
 * If the listing has ended, the image is displayed in grayscale and the end time is marked as past.
 * Clicking on the card saves the listing ID and triggers a modal with further details about the listing.
 *
 * @param {Object} data - The data object containing listing details.
 * @param {string} [data.id=''] - The unique identifier for the listing.
 * @param {string} [data.endsAt=''] - The end date and time of the listing in ISO format.
 * @param {string} [data.title='Unknown item'] - The title of the listing.
 * @param {Array} [data.media=[]] - An array containing media objects, typically images related to the listing.
 * @param {Object} [data._count={}] - An object containing bid count data.
 * @param {number} [data._count.bids=0] - The number of bids placed on the listing.
 * @returns {HTMLElement} - The constructed card element representing the listing.
 *
 * @example
 * // Create a listing card with example data
 * const card = listingCard({
 *   id: '123',
 *   endsAt: '2023-09-13T15:30:00Z',
 *   title: 'Sample Item',
 *   media: [{ url: 'https://example.com/image.jpg', alt: 'Sample image' }],
 *   _count: { bids: 5 }
 * });
 * document.body.append(card);
 */
export function listingCard(data) {
  if (!data || typeof data !== 'object') {
    console.error('Invalid data provided for listing card');
    return createDiv('Error: Invalid data');
  }

  const { id = '', endsAt = '', title = DEFAULT_TITLE, media = [], _count: { bids = 0 } = {} } = data;

  const element = createArticle('flex', 'flex-col', 'gap-2.5', 'shadow-customShadow', 'p-5', 'bg-white', 'cursor-pointer', 'max-w-[367px]');
  element.setAttribute('data-id', id);

  let isProcessing = false;

  element.addEventListener('click', async () => {
    if (isProcessing) return;
    isProcessing = true;

    // save('listingID', id);
    runModal(true, 'listing', element.dataset.id);

    setTimeout(() => {
      isProcessing = false;
    }, 1000);
  });

  const image = createImg(media?.[0]?.url, media?.[0]?.alt || DEFAULT_IMAGE_ALT, 'rounded-xl', 'aspect-square', 'object-cover');

  const section = createSection('flex', 'flex-col', 'gap-1');

  const listingTitle = createHeading(2, title, 'font-serif', 'font-semibold', 'capitalize');

  const infoWrap = createDiv('flex', 'justify-between', 'text-sm');

  const timeSpan = createSpan();
  timeSpan.textContent = 'Ends: ';
  const timeFormatted = formatDateTime(endsAt) || DEFAULT_TIME_FORMAT;
  const listEnding = createTime(endsAt || '0000-00-00T00:00:00Z', timeFormatted);

  const currentTime = new Date();
  const endTime = new Date(endsAt);

  if (endTime < currentTime) {
    image.classList.add('grayscale');
    listEnding.classList.add('text-error');
    timeSpan.textContent = 'Ended at: ';
  }

  const bidInfo = createSpan(`Bids: ${bids}`);

  timeSpan.append(listEnding);
  infoWrap.append(timeSpan, bidInfo);
  section.append(listingTitle, infoWrap);

  element.append(image, section);

  return element;
}
