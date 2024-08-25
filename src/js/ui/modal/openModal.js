export function openModal(target) {
  const modal = document.querySelector(`[data-modal="modalObject"]`);
  console.log(modal);

  modal.classList.remove('hidden');
  modal.append(target);
}
