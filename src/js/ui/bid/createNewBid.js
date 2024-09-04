import { formatDateTime } from '../../data/formatDateTime';
import { createDiv } from '../../elements/createDiv';
import { createSpan } from '../../elements/createSpan';
import { createTime } from '../../elements/createTime';
import { DEFAULT_TIME_FORMAT } from '../../template/listingModal';

export function createNewBid(bidData, bidAmount) {
  const bidsList = createDiv('flex', 'flex-col', 'text-center', 'gap-0.5', 'py-2', 'bg-correct', 'bg-opacity-50');

  const bidId = createSpan(bidData.id);
  const bidFormatted = formatDateTime(bidData.created);
  const bidPlaced = createTime(bidData.created || '0000-00-00T00:00:00Z', bidFormatted || DEFAULT_TIME_FORMAT);
  const bidSize = createSpan(`${bidAmount} Cr.`);

  bidsList.append(bidId, bidPlaced, bidSize);
  return bidsList;
}
