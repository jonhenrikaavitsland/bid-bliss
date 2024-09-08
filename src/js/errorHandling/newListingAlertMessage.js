export function newListingAlertMessage(alertStatus) {
  let message;

  switch (alertStatus) {
    case 201: // Success - Listing created
      message = null; // No alert needed for successful listing creation
      break;
    case 400: // Unauthorized
      message = 'Image URL cannot be greater than 300 characters';
      break;
    default: // Any other status
      message = 'An unknown error occurred. Please try again.';
      break;
  }
  return message;
}
