import { fetchData } from '../API/fetchData';
import { isImageAccessible } from '../API/isImageAccessible';
import { applyScrollShadow } from '../data/applyScrollShadow';
import { API_Base, API_Key, API_Listings, modal } from '../data/constants';
import { getTimeAhead } from '../data/getTimeAhead';
import { closeSvg } from '../data/images';
import { initializeListings } from '../data/initializeListings';
import { isValidUrl } from '../data/isValidUrl';
import { createBtn } from '../elements/createBtn';
import { createDiv } from '../elements/createDiv';
import { createForm } from '../elements/createForm';
import { createHeading } from '../elements/createHeading';
import { createImg } from '../elements/createImg';
import { createInput } from '../elements/createInput';
import { createLabel } from '../elements/createLabel';
import { createTextarea } from '../elements/createTextarea';
import { load } from '../localStorage/load';
import { renderListings } from '../render/renderListings';
import { closeModal } from '../ui/modal/closeModal';
import { clearError } from '../validate/clearError';
import { sanitizeInput } from '../validate/sanitize/sanitizeInput';
import { setError } from '../validate/setError';

/**
 * Creates and returns a modal for creating a new auction listing.
 *
 * This function constructs a new listing modal that includes form fields for the auction title, description, tags, and end time.
 * It allows users to add images with validation and preview functionality. The form submission handles input sanitization,
 * error messages, and dynamic updates to the displayed listings upon successful creation of the new auction.
 *
 * @returns {HTMLElement} The constructed new listing modal element.
 * @example
 * ```js
 * // Create a new listing modal and append it to the document body
 * const modal = newListingModal();
 * document.body.append(modal);
 * ```
 */
export function newListingModal() {
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
  const btnContainer = createDiv('flex', 'justify-between', 'items-center', 'py-0.5', 'pe-0.5', 'ps-2.5', 'rounded-t-xl', 'bg-secondary', 'text-white', 'font-serif', 'text-lg', 'font-medium', 'md:ps-5', 'md:py-1', 'md:pe-3');

  const heading = createHeading(2, 'Create auction', 'uppercase');
  btnContainer.append(heading, btnWrap);

  let imageContainer = [];

  const listingContents = createForm('flex', 'flex-col', 'new-listing', 'create', 'bg-neutralBg', 'rounded-b-xl');

  listingContents.addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = sanitizeInput(document.getElementById('newListingTitle')?.value.trim());
    const description = sanitizeInput(document.getElementById('newListingDescription')?.value.trim());
    const tagsInputValue = sanitizeInput(document.getElementById('newListingTags')?.value.trim());
    const tags = tagsInputValue ? tagsInputValue.split(/,|\s+/).filter((tag) => tag) : [];
    const endsAt = document.getElementById('newListingTime')?.value;

    const titleValidate = document.getElementById('titleValidate');
    const descriptionValidate = document.getElementById('descriptionValidate');
    const tagsValidate = document.getElementById('tagsValidate');
    const timeValidate = document.getElementById('timeValidate');

    if (titleValidate) clearError(titleValidate);
    if (descriptionValidate) clearError(descriptionValidate);
    if (tagsValidate) clearError(tagsValidate);
    if (timeValidate) clearError(timeValidate);

    let generalFeedback = document.getElementById('generalFeedback');
    if (!generalFeedback) {
      generalFeedback = createDiv('text-error', 'mt-2');
      generalFeedback.setAttribute('id', 'generalFeedback');
    }
    generalFeedback.innerText = '';

    let formIsValid = true;
    if (!title) {
      setError(titleValidate, 'Title is required');
      formIsValid = false;
    }
    if (!endsAt) {
      setError(timeValidate, 'Auction end date is required.');
      formIsValid = false;
    }
    if (!formIsValid) {
      generalFeedback.innerText = '* Please fill out all required fields to submit the auction.';
      listingContents.appendChild(generalFeedback);
      return;
    }

    const token = load('token');
    const payload = { title, description: description || '', tags, media: imageContainer, endsAt };

    try {
      const response = await fetchData(`${API_Base}${API_Listings}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Noroff-API-Key': API_Key,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      listingContents.reset();
      imageContainer = [];
      const images = document.getElementById('imagePreviewContainer');
      if (images) images.innerHTML = '';

      const newListings = await initializeListings();
      renderListings(newListings);
    } catch (error) {
      console.error('Error during form submission:', error);
      generalFeedback.innerText = 'An error occurred during submission. Please try again.';
      listingContents.appendChild(generalFeedback);
    }
  });

  const topContainer = createDiv('flex', 'flex-col', 'landscape:w-1/2', 'pt-5', 'px-2.5', 'gap-5', 'md:px-5', 'landscape:pb-13', 'landscape:max-h-100%', 'landscape:overflow-hidden', 'landscape:flex-1', 'landscape:h-min');

  const titleWrap = createDiv('flex', 'flex-col', 'gap-1');
  const titleLabel = createLabel('newListingTitle', 'title: *', 'capitalize');
  const titleInput = createInput('text', '', 'newListingTitle', 'bg-white', 'rounded-xl', 'shadow-customShadow', 'py-2.5', 'px-2');
  const titleValidate = createDiv('relative');
  titleValidate.setAttribute('id', 'titleValidate');
  titleWrap.append(titleLabel, titleInput, titleValidate);

  const descriptionWrap = createDiv('flex', 'flex-col', 'gap-1');
  const descriptionLabel = createLabel('newListingDescription', 'description:', 'capitalize');
  const descriptionInput = createTextarea('newListingDescription', 'Describe your item...', 4, 'bg-white', 'rounded-xl', 'shadow-customShadow', 'py-2.5', 'px-2');
  const descriptionValidate = createDiv('relative');
  descriptionValidate.setAttribute('id', 'descriptionValidate');
  descriptionWrap.append(descriptionLabel, descriptionInput, descriptionValidate);

  const tagsWrap = createDiv('flex', 'flex-col', 'gap-1');
  const tagsLabel = createLabel('newListingTags', 'tags:', 'capitalize');
  const tagsInput = createInput('text', '', 'newListingTags', 'bg-white', 'rounded-xl', 'shadow-customShadow', 'py-2.5', 'px-2');
  const tagsValidate = createDiv('relative');
  tagsValidate.setAttribute('id', 'tagsValidate');
  tagsWrap.append(tagsLabel, tagsInput, tagsValidate);

  const timeWrap = createDiv('flex', 'flex-col', 'gap-1');
  const timeLabel = createLabel('newListingTime', 'Auction ends: *');
  const timeInput = createInput('datetime-local', '', 'newListingTime', 'bg-white', 'rounded-xl', 'shadow-customShadow', 'py-2.5', 'px-2', 'cursor-pointer');
  timeInput.value = getTimeAhead(60);
  timeInput.min = getTimeAhead(60);
  timeInput.max = getTimeAhead(364);
  timeInput.addEventListener('click', (event) => {
    event.preventDefault();
    timeInput.showPicker();
  });
  timeWrap.append(timeLabel, timeInput);

  topContainer.append(titleWrap, descriptionWrap, tagsWrap, timeWrap);

  const bottomContainer = createDiv('flex', 'flex-col', 'landscape:w-1/2', 'px-2.5', 'pt-5', 'gap-11', 'rounded-b-xl', 'md:px-5', 'landscape:overflow-hidden', 'landscape:flex-1', 'landscape:max-h-[425px]');

  const imageWrap = createDiv('flex', 'flex-col', 'gap-1');
  const imageLabel = createLabel('newListingImages', 'images:', 'capitalize');
  const imgWrap = createDiv('flex', 'xsm:flex-col');
  const imageInput = createInput('text', 'https://www.img.com/image.jpg', 'newListingImages', 'grow', 'xsm:rounded-t-xl', 'xsm:py-2.5', 'xsm:px-2', 'sm:rounded-s-xl', 'sm:ps-2', 'sm:shadow-customShadow');
  const imageBtn = createBtn('save', 'uppercase', 'font-serif', 'font-semibold', 'bg-secondary', 'hover:bg-hoverSecondary', 'py-3', 'px-4', 'md:px-6', 'md:text-lg', 'text-white', 'shadow-customShadow', 'xsm:rounded-b-xl', 'sm:rounded-e-xl');
  imageBtn.setAttribute('type', 'button');
  const images = createDiv('mt-2', 'overflow-y-scroll', 'flex-grow', 'landscape:max-h-[264px]');
  images.setAttribute('id', 'imagePreviewContainer');

  const imageValidate = createDiv('relative');
  imgWrap.append(imageInput, imageBtn);
  imageWrap.append(imageLabel, imgWrap, images, imageValidate);

  imageBtn.addEventListener('click', async () => {
    try {
      const imageUrl = sanitizeInput(imageInput.value.trim());
      if (!imageUrl) {
        setError(imageValidate, 'Please enter a valid and accessible image URL.');
        return;
      }
      if (!isValidUrl(imageUrl) || !(await isImageAccessible(imageUrl))) {
        setError(imageValidate, 'Please enter a valid and accessible image URL');
        return;
      }

      clearError(imageValidate);

      const imageElement = createDiv('flex', 'flex-wrap', 'gap-4', 'items-center', 'mb-2');
      const imgPreview = createImg(imageUrl, 'image preview', 'w-20', 'h-20', 'object-cover', 'rounded-xl');
      const altInput = createInput('text', 'Alt text', '', 'bg-white', 'rounded-xl', 'shadow-customShadow', 'py-3', 'px-4');
      const removeBtn = createBtn('Remove', 'uppercase', 'font-serif', 'font-semibold', 'bg-error', 'hover:bg-opacity-90', 'py-3', 'px-4', 'text-white', 'rounded-xl');

      imageElement.appendChild(imgPreview);
      imageElement.appendChild(altInput);
      imageElement.appendChild(removeBtn);
      images.appendChild(imageElement);

      const imageObject = { url: imageUrl, alt: '' };
      imageContainer.push(imageObject);
      imageInput.value = '';

      altInput.addEventListener('input', (event) => {
        const index = Array.from(images.children).indexOf(imageElement);
        imageContainer[index].alt = event.target.value;
      });

      removeBtn.addEventListener('click', () => {
        const index = Array.from(images.children).indexOf(imageElement);
        if (index > -1) {
          imageContainer.splice(index, 1);
          images.removeChild(imageElement);
        }
        applyScrollShadow(images, 264);
      });
    } catch (error) {
      console.error('Error while adding image:', error);
      setError(imageValidate, 'Error while adding image');
    }

    applyScrollShadow(images, 264);
  });

  const container = createDiv('flex', 'flex-col', 'landscape:flex-row', 'h-full');

  const cta = createBtn('create listing', 'uppercase', 'bg-secondary', 'hover:bg-hoverSecondary', 'py-3', 'px-4', 'md:px-6', 'md:text-lg', 'rounded-xl', 'text-white', 'shadow-customShadow', 'mx-auto', 'font-serif', 'font-medium');

  const ctaWrap = createDiv('flex', 'pt-13', 'pb-8');
  ctaWrap.append(cta);

  bottomContainer.append(imageWrap);

  container.append(topContainer, bottomContainer);

  listingContents.append(container, ctaWrap);
  element.append(btnContainer, listingContents);
  return element;
}
