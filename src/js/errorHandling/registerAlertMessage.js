export function registerAlertMessage(alertStatus) {
  let message;

  switch (alertStatus) {
    case 201: // Success
      message = 'Registration successful! Your profile has been created.';
      break;
    case 400: // Bad Request
      message = 'There was an issue with your registration request. Please review your input and try again.';
      break;
    case 401: // Unauthorized
      message = 'You are not authorized to perform this action. Please ensure you are logged in properly.';
      break;
    case 409: // Conflict
      message = 'An account with this email or username already exists. Please use a different email or username.';
      break;
    case 429: // Too Many Requests
      message = 'You have made too many requests in a short time. Please wait a moment and try again.';
      break;
    case 500: // Internal Server Error
      message = 'An unexpected error occurred. Please try again later.';
      break;
    case 503: // Service Unavailable
      message = 'The service is currently unavailable. Please try again later.';
      break;
    default: // Any other status
      message = 'An unknown error occurred. Please try again.';
      break;
  }
  return message;
}
