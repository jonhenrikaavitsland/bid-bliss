export function bidAlertMessage(alertStatus) {
  let message;

  switch (alertStatus) {
    case 201:
      break;
    case 400: // Unauthorized
      message = 'Your bid must be higher than the current bid.';
      break;
    default: // Any other status
      message = 'An unknown error occurred. Please try again.';
      break;
  }
  return message;
}
