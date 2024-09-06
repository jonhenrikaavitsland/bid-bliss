export function registerAlertMessage(alertStatus) {
  let message;

  switch (alertStatus) {
    case 201: // Success
      message = 'Registration successful! Your profile has been created.';
      break;
    case 400: // Bad Request
      message = 'An account with this email already exists. Please use a different email.';
      break;
    default: // Any other status
      message = 'An unknown error occurred. Please try again.';
      break;
  }
  return message;
}
