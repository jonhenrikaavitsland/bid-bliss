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
import { placeholderItemImg } from '../data/images';

const DEFAULT_TITLE = 'Unknown item';
const DEFAULT_IMAGE_URL = placeholderItemImg;
const DEFAULT_IMAGE_ALT = 'listing item';
const DEFAULT_TIME_FORMAT = 'invalid date';

/**
 * Creates a listing card element based on the provided listing data.
 *
 * This function generates an article element representing a listing, including its title, image, end time, and bid count.
 * It applies special styles if the listing has ended and sets up click event handling to save the listing ID and trigger the listing modal.
 * If invalid data is provided, it returns a div with an error message.
 *
 * @param {Object} data The listing data object containing information such as title, end time, media, and bid count.
 * @param {string} [data.id=''] The unique identifier of the listing.
 * @param {string} [data.endsAt=''] The end date and time of the listing.
 * @param {string} [data.title='Unknown item'] The title of the listing.
 * @param {Array} [data.media=[]] An array of media objects for the listing.
 * @param {Object} [data._count={}] An object containing count information, including bid count.
 * @param {number} [data._count.bids=0] The number of bids on the listing.
 * @returns {HTMLElement} The constructed listing card element.
 * @example
 * ```js
 * // Create a listing card with sample data
 * const sampleData = {
 *   id: '123',
 *   endsAt: '2023-09-13T15:30:00Z',
 *   title: 'Sample Item',
 *   media: [{ url: 'https://example.com/image.jpg', alt: 'Sample image' }],
 *   _count: { bids: 5 },
 * };
 * const card = listingCard(sampleData);
 * document.body.append(card);
 * ```
 */

export function listingCard(data) {
  if (!data || typeof data !== 'object') {
    console.error('Invalid data provided for listing card');
    return createDiv('Error: Invalid data');
  }

  const { id = '', endsAt = '', title = DEFAULT_TITLE, media = [], _count: { bids = 0 } = {} } = data;

  const element = createArticle('flex', 'flex-col', 'gap-2.5', 'shadow-customShadow', 'p-5', 'bg-white', 'cursor-pointer', 'max-w-[367px]');

  const currentTime = new Date();
  const endTime = new Date(endsAt);

  if (endTime < currentTime) {
    element.classList.add('grayscale');
  }

  let isProcessing = false;

  element.addEventListener('click', () => {
    if (isProcessing) return;
    isProcessing = true;

    save('listingID', id);
    runModal(true, 'listing');

    setTimeout(() => {
      isProcessing = false;
    }, 1000);
  });

  const image = createImg(media?.[0]?.url || DEFAULT_IMAGE_URL, media?.[0]?.alt || DEFAULT_IMAGE_ALT, 'rounded-xl', 'aspect-square', 'object-cover');
  image.setAttribute('loading', 'lazy');

  const section = createSection('flex', 'flex-col', 'gap-1');

  const listingTitle = createHeading(2, title, 'font-serif', 'font-semibold', 'capitalize');

  const infoWrap = createDiv('flex', 'justify-between', 'text-sm');

  const timeSpan = createSpan();
  timeSpan.textContent = 'Ends: ';
  const timeFormatted = formatDateTime(endsAt) || DEFAULT_TIME_FORMAT;
  const listEnding = createTime(endsAt || '0000-00-00T00:00:00Z', timeFormatted);

  const bidInfo = createSpan(`Bids: ${bids}`);

  timeSpan.append(listEnding);
  infoWrap.append(timeSpan, bidInfo);
  section.append(listingTitle, infoWrap);

  element.append(image, section);

  return element;
}
