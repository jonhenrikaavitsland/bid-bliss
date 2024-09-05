import { getTimeAhead } from '../data/getTimeAhead';
import { createBtn } from '../elements/createBtn';
import { createDiv } from '../elements/createDiv';
import { createForm } from '../elements/createForm';
import { createHeading } from '../elements/createHeading';
import { createInput } from '../elements/createInput';
import { createLabel } from '../elements/createLabel';
import { createSection } from '../elements/createSection';
import { createTextarea } from '../elements/createTextarea';

export function newListingModal() {
  const element = createDiv('rounded-xl', 'shadow-customShadow', 'flex', 'flex-col', 'grow', 'overflow-y-auto', 'max-h-[90%]', 'max-w-lg', 'md:max-w-2xl');

  const headingTopWrap = createSection('bg-secondary', 'text-white', 'uppercase', 'font-serif', 'font-medium', 'px-2.5', 'py-2', 'md:px-5', 'md:py-4');
  const headingTop = createHeading(2, 'create auction');

  const listingContents = createForm('new-listing', 'create', 'flex', 'flex-col', 'gap-5', 'pt-5', 'px-2.5', 'pb-8', 'bg-neutralBg');

  const titleWrap = createDiv('flex', 'flex-col', 'gap-1');
  const titleLabel = createLabel('newListingTitle', 'title:', 'capitalize');
  const titleInput = createInput('text', '', 'newListingTitle', 'bg-white', 'rounded-xl', 'shadow-customShadow', 'py-2.5', 'px-2');
  const titleValidate = createDiv('relative');

  const descriptionWrap = createDiv('flex', 'flex-col', 'gap-1');
  const descriptionLabel = createLabel('newListingDescription', 'description:', 'capitalize');
  const descriptionInput = createTextarea('Describe your item...', 4, 'bg-white', 'rounded-xl', 'shadow-customShadow', 'py-2.5', 'px-2');
  const descriptionValidate = createDiv('relative');

  const tagsWrap = createDiv('flex', 'flex-col', 'gap-1');
  const tagsLabel = createLabel('newListingTags', 'tags:', 'capitalize');
  const tagsInput = createInput('text', '', 'newListingTags', 'bg-white', 'rounded-xl', 'shadow-customShadow', 'py-2.5', 'px-2');
  const tagsValidate = createDiv('relative');

  const timeWrap = createDiv('flex', 'flex-col', 'gap-1');
  const timeLabel = createLabel('newListingTime', 'Auction ends:');
  const timeInput = createInput('datetime-local', '', 'newListingTime', 'bg-white', 'rounded-xl', 'shadow-customShadow', 'py-2.5', 'px-2', 'cursor-pointer');
  timeInput.value = getTimeAhead(60);
  timeInput.min = getTimeAhead(60);
  timeInput.addEventListener('click', (event) => {
    event.preventDefault();
    timeInput.showPicker();
  });

  const imageWrap = createDiv('flex', 'flex-col', 'gap-1');
  const imageLabel = createLabel('newListingImages', 'images:', 'capitalize');
  const imgWrap = createDiv('flex', 'xsm:flex-col');
  const imageInput = createInput('text', 'https://www.img.com/image.jpg', 'newListingImages', 'grow', 'xsm:rounded-t-xl', 'xsm:py-2.5', 'xsm:px-2', 'sm:rounded-s-xl', 'sm:ps-2', 'sm:shadow-customShadow');
  const imageBtn = createBtn('save', 'uppercase', 'font-serif', 'font-semibold', 'bg-secondary', 'hover:bg-hoverSecondary', 'py-2', 'px-4', 'text-white', 'shadow-customShadow', 'xsm:rounded-b-xl', 'sm:rounded-e-xl');
  const images = createDiv('mt-2');
  images.setAttribute('id', 'imagePreviewContainer');
  const imageValidate = createDiv('relative');

  const cta = createBtn('create listing', 'uppercase', 'bg-secondary', 'hover:bg-hoverSecondary', 'py-2', 'px-4', 'rounded-xl', 'text-white', 'shadow-customShadow', 'mx-auto', 'font-serif', 'font-medium', 'mt-5');

  imgWrap.append(imageInput, imageBtn);
  imageWrap.append(imageLabel, imgWrap, images, imageValidate);
  timeWrap.append(timeLabel, timeInput);
  tagsWrap.append(tagsLabel, tagsInput, tagsValidate);
  descriptionWrap.append(descriptionLabel, descriptionInput, descriptionValidate);
  titleWrap.append(titleLabel, titleInput, titleValidate);
  listingContents.append(titleWrap, descriptionWrap, tagsWrap, timeWrap, imageWrap, cta);
  headingTopWrap.append(headingTop);
  element.append(headingTopWrap, listingContents);
  return element;
}
