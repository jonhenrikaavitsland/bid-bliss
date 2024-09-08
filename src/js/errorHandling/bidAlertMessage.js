export function bidAlertMessage(alertStatus) {
  let message;

  switch (alertStatus) {
    case 201:
      message = null;
      break;
    case 400:
      message = 'Your bid must be higher than the current bid.';
      break;
    case 403:
      message = 'You cannot bid on your own listing';
      break;
    default:
      message = 'An unknown error occurred. Please try again.';
      break;
  }
  return message;
}
