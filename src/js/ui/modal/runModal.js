import { linkListener } from '../../listeners/linkListener.js';
import { modalRouter } from '../../router/modalRouter.js';
import { openModal } from './openModal.js';

export function runModal(state = 'false', modalValue) {
  const currentModal = modalRouter(modalValue);

  if (state === true) {
    openModal(currentModal);
    linkListener(modalValue);
  }
}
