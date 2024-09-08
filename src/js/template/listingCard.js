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
const DEFAULT_IMAGE_URL = '/src/images/placeholderItem.png';
const DEFAULT_IMAGE_ALT = 'listing item';
const DEFAULT_TIME_FORMAT = 'invalid date';

export function listingCard(data) {
  if (!data || typeof data !== 'object') {
    console.error('Invalid data provided for listing card');
    return createDiv('Error: Invalid data');
  }

  const { id = '', endsAt = '', title = DEFAULT_TITLE, media = [], _count: { bids = 0 } = {} } = data;

  const element = createArticle('flex', 'flex-col', 'gap-2.5', 'shadow-customShadow', 'p-5', 'bg-white', 'cursor-pointer', 'max-w-lg', 'md:max-w-[367px]');

  const currentTime = new Date();
  const endTime = new Date(endsAt);

  if (endTime < currentTime) {
    element.classList.add('grayscale');
  }

  element.addEventListener('click', () => {
    save('listingID', id);
    runModal(true, 'listing');
  });

  const image = createImg(media?.[0]?.url || DEFAULT_IMAGE_URL, media?.[0]?.alt || DEFAULT_IMAGE_ALT, 'rounded-xl', 'aspect-square', 'object-cover');

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
