import { createDiv } from '../elements/createDiv';

export function createLoadingOverlay() {
  const overlay = createDiv('absolute', 'bottom-0', 'lef-0', 'w-full', 'h-24', 'md:h-40', 'bg-white', 'bg-opacity-50', 'animate-pulse', 'transition-all', 'duration-500', 'hidden');
  return overlay;
}
