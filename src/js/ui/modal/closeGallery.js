export function closeGallery(gallery) {
  gallery.classList.remove('flex', 'items-center', 'justify-center', 'px-5');
  gallery.classList.add('hidden');
  gallery.innerHTML = '';
}
