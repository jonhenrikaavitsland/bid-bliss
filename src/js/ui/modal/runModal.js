import { linkListener } from '../../listeners/linkListener.js';
import { modalRouter } from '../../router/modalRouter.js';
import { gatherUserData } from '../login Form/gatherUserData.js';
import { openGallery } from './openGallery.js';
import { openModal } from './openModal.js';

export function runModal(state = 'false', modalValue) {
  const currentModal = modalRouter(modalValue);

  if (state === true && modalValue === 'gallery') {
    openGallery(currentModal);
  } else if (state === true && modalValue === 'profile') {
    openModal(currentModal);
  } else if (state === true) {
    openModal(currentModal);
    linkListener(modalValue);
    gatherUserData();
  }
}
