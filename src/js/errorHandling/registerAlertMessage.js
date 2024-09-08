export function registerAlertMessage(alertStatus) {
  let message;

  switch (alertStatus) {
    case 201:
      message = 'Registration successful! Your profile has been created.';
      break;
    case 400:
      message = 'An account with this email already exists. Please use a different email.';
      break;
    default:
      message = 'An unknown error occurred. Please try again.';
      break;
  }
  return message;
}
