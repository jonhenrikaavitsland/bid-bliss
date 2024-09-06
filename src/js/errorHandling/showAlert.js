export function showAlert(message) {
  const alertContainer = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('alert-message');

  alertMessage.textContent = message;
  alertContainer.classList.remove('hidden');
  alertContainer.classList.add('flex');

  const alertButton = document.getElementById('alert-button');
  alertButton.onclick = () => {
    alertContainer.classList.remove('flex');
    alertContainer.classList.add('hidden');
  };
}
