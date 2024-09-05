import { fetchData } from '../API/fetchData';
import { API_Base, API_Key, API_Listings } from '../data/constants';
import { getTimeAhead } from '../data/getTimeAhead';
import { isValidUrl } from '../data/isValidUrl';
import { createBtn } from '../elements/createBtn';
import { createDiv } from '../elements/createDiv';
import { createForm } from '../elements/createForm';
import { createHeading } from '../elements/createHeading';
import { createImg } from '../elements/createImg';
import { createInput } from '../elements/createInput';
import { createLabel } from '../elements/createLabel';
import { createSection } from '../elements/createSection';
import { createTextarea } from '../elements/createTextarea';
import { load } from '../localStorage/load';
import { renderListings } from '../render/renderListings';
import { clearError } from '../validate/clearError';
import { sanitizeInput } from '../validate/sanitize/sanitizeInput';
import { setError } from '../validate/setError';

export function newListingModal() {
  const element = createDiv('rounded-xl', 'shadow-customShadow', 'flex', 'flex-col', 'grow', 'overflow-y-auto', 'max-h-[90%]', 'max-w-lg', 'md:max-w-2xl');

  const headingTopWrap = createSection('bg-secondary', 'text-white', 'uppercase', 'font-serif', 'font-medium', 'px-2.5', 'py-2', 'md:px-5', 'md:py-4');
  const headingTop = createHeading(2, 'create auction');

  const listingContents = createForm('new-listing', 'create', 'flex', 'flex-col', 'gap-5', 'pt-5', 'px-2.5', 'pb-8', 'bg-neutralBg');

  let imageContainer = [];

  listingContents.addEventListener('submit', async (event) => {
    try {
      event.preventDefault();
      console.log('Form submit event triggered');

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

      const generalFeedback = document.getElementById('generalFeedback') || createDiv('text-error', 'mt-2');
      generalFeedback.setAttribute('id', 'generalFeedback');
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
      const payload = {
        title,
        description: description || '',
        tags,
        media: imageContainer,
        endsAt,
      };

      console.log('Payload to be sent:', payload);

      const response = await fetchData(`${API_Base}${API_Listings}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'X-Noroff-API-Key': API_Key,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Response:', response);

      listingContents.reset();
      imageContainer = [];
      images.innerHTML = '';

      const listings = await fetchData(`${API_Base}${API_Listings}?_seller=true&_bids=true`);
      renderListings(listings.data);
    } catch (error) {
      console.error('Error during form submission:', error);

      const generalFeedback = document.getElementById('generalFeedback') || createDiv('text-error', 'mt-2');
      generalFeedback.setAttribute('id', 'generalFeedback');
      generalFeedback.innerText = 'An error occurred during submission. Please try again.';
      listingContents.appendChild(generalFeedback);
    }
  });

  const titleWrap = createDiv('flex', 'flex-col', 'gap-1');
  const titleLabel = createLabel('newListingTitle', 'title: *', 'capitalize');
  const titleInput = createInput('text', '', 'newListingTitle', 'bg-white', 'rounded-xl', 'shadow-customShadow', 'py-2.5', 'px-2');
  const titleValidate = createDiv('relative');
  titleValidate.setAttribute('id', 'titleValidate');

  const descriptionWrap = createDiv('flex', 'flex-col', 'gap-1');
  const descriptionLabel = createLabel('newListingDescription', 'description:', 'capitalize');
  const descriptionInput = createTextarea('newListingDescription', 'Describe your item...', 4, 'bg-white', 'rounded-xl', 'shadow-customShadow', 'py-2.5', 'px-2');
  const descriptionValidate = createDiv('relative');
  descriptionValidate.setAttribute('id', descriptionValidate);

  const tagsWrap = createDiv('flex', 'flex-col', 'gap-1');
  const tagsLabel = createLabel('newListingTags', 'tags:', 'capitalize');
  const tagsInput = createInput('text', '', 'newListingTags', 'bg-white', 'rounded-xl', 'shadow-customShadow', 'py-2.5', 'px-2');
  const tagsValidate = createDiv('relative');
  tagsValidate.setAttribute('id', tagsValidate);

  const timeWrap = createDiv('flex', 'flex-col', 'gap-1');
  const timeLabel = createLabel('newListingTime', 'Auction ends: *');
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
  imageBtn.setAttribute('type', 'button');
  const images = createDiv('mt-2');
  images.setAttribute('id', 'imagePreviewContainer');
  const imageValidate = createDiv('relative');

  const cta = createBtn('create listing', 'uppercase', 'bg-secondary', 'hover:bg-hoverSecondary', 'py-2', 'px-4', 'rounded-xl', 'text-white', 'shadow-customShadow', 'mx-auto', 'font-serif', 'font-medium', 'mt-5');

  imageBtn.addEventListener('click', () => {
    try {
      const imageUrl = sanitizeInput(imageInput.value.trim());
      if (!imageUrl) {
        setError(imageValidate, 'Please enter a valid and accessible image URL.');
        return;
      }

      if (!isValidUrl(imageUrl)) {
        setError(imageValidate, 'Please enter a valid and accessible image URL');
        return;
      }

      clearError(imageValidate);

      const imageElement = createDiv('flex', 'gap-2', 'items-center', 'mb-2');
      const imgPreview = createImg(imageUrl, 'image preview', 'w-20', 'h-20', 'object-cover', 'rounded-xl');
      const altInput = createInput('text', 'Alt text', '', 'bg-white', 'rounded-xl', 'shadow-customShadow', 'py-2', 'px-4');

      imageElement.appendChild(imgPreview);
      imageElement.appendChild(altInput);
      images.appendChild(imageElement);

      imageContainer.push({ url: imageUrl, alt: '' });
      console.log('Image added', { url: imageUrl, alt: '' });

      imageInput.value = '';

      altInput.addEventListener('input', (event) => {
        const index = Array.from(images.children).indexOf(imageElement);
        imageContainer[index].alt = event.target.value;
        console.log('Alt text updated', imageContainer[index]);
      });
    } catch (error) {
      console.error('Error while adding image:', error);
      setError(imageValidate, 'Error while adding image');
    }
  });

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
