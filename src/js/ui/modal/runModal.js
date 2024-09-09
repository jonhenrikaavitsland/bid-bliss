import { linkListener } from '../../listeners/linkListener.js';
import { setupUploadAvatarListener } from '../../listeners/setupUploadAvatarListener.js';
import { modalRouter } from '../../router/modalRouter.js';
import { gatherUserData } from '../login Form/gatherUserData.js';
import { openGallery } from './openGallery.js';
import { openModal } from './openModal.js';

export async function runModal(state = 'false', modalValue) {
  const currentModal = await modalRouter(modalValue);
  console.log(currentModal);

  if (state === true && modalValue === 'gallery') {
    openGallery(currentModal);
    return;
  }

  if (state === true) {
    openModal(currentModal);

    if (modalValue === 'register' || modalValue === 'login') {
      linkListener(modalValue);

      gatherUserData();
    }
    if (modalValue === 'profile') {
      setupUploadAvatarListener();
    }
  }
}
