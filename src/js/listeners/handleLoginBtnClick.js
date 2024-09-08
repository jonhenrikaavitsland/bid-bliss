import { runModal } from '../ui/modal/runModal';

export function handleLoginBtnClick() {
  try {
    runModal(true, 'login');
  } catch (error) {
    console.error('Error running login modal:', error);
  }
}
