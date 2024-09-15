export function adjustBottomMargin(target) {
  const element = document.querySelector(target);

  if (!element) return;

  const isOverflowY = document.documentElement.scrollHeight > document.documentElement.clientHeight;

  if (isOverflowY) {
    element.classList.add('mb-5', 'md:mb-10');
  } else {
    element.classList.add('mb-auto');
  }
}
