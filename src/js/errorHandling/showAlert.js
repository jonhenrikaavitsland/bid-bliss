export function showAlert(message) {
  const alertContainer = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('alert-message');
  const alertButton = document.getElementById('alert-button');

  if (!alertContainer || !alertMessage || !alertButton) {
    console.error('Alert elements are missing in the DOM.');
    return;
  }

  alertMessage.textContent = message;

  alertContainer.classList.remove('hidden');
  alertContainer.classList.add('flex');
  document.body.classList.add('overflow-hidden');

  const hideAlert = () => {
    alertContainer.classList.remove('flex');
    alertContainer.classList.add('hidden');
    console.clear();
    alertButton.removeEventListener('click', hideAlert);
  };

  alertButton.addEventListener('click', hideAlert);
}
