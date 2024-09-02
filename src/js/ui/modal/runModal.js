import { linkListener } from '../../listeners/linkListener.js';
import { modalRouter } from '../../router/modalRouter.js';
import { gatherUserData } from '../login Form/gatherUserData.js';
import { openGallery } from './openGallery.js';
import { openModal } from './openModal.js';

export function runModal(state = 'false', modalValue) {
  const currentModal = modalRouter(modalValue);

  if (state === true && modalValue === 'gallery') {
    openGallery(currentModal);
  } else if (state === true) {
    openModal(currentModal);
    if (modalValue === 'register' || modalValue === 'login') {
      linkListener(modalValue);
      console.log('Test-1');
      console.log(document.querySelector('#email'));
      gatherUserData();
    }
  }
}
