export function newListingAlertMessage(alertStatus) {
  let message;

  switch (alertStatus) {
    case 201:
      message = null;
      break;
    case 400:
      message = 'Image URL cannot be greater than 300 characters';
      break;
    default:
      message = 'An unknown error occurred. Please try again.';
      break;
  }
  return message;
}
