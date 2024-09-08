export function isValidUrl(url) {
  if (typeof url !== 'string') {
    console.error('Invalid input: URL must be a string.');
    return false;
  }

  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
