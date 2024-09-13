export function closeGallery(gallery) {
  gallery.classList.remove('flex', 'items-center', 'justify-center', 'py-5');
  gallery.classList.add('hidden');
  gallery.innerHTML = '';
  document.body.classList.add('pointer-events-none');
  setTimeout(() => {
    document.body.classList.remove('pointer-events-none');
  }, 1000);
}
