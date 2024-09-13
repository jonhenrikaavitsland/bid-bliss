export function closeModal(modal) {
  modal.classList.remove('flex', 'items-center', 'justify-center', 'px-5');
  modal.classList.add('hidden');
  modal.innerHTML = '';
  document.body.classList.add('pointer-events-none');
  document.body.classList.remove('overflow-hidden');
  setTimeout(() => {
    document.body.classList.remove('pointer-events-none');
  }, 1000);
}
