export function loginAlertMessage(alertStatus) {
  let message;

  switch (alertStatus) {
    case 200:
      break;
    case 401: // Unauthorized
      message = 'Incorrect email or password. Please try again.';
      break;
    default: // Any other status
      message = 'An unknown error occurred during login. Please try again.';
      break;
  }
  return message;
}
