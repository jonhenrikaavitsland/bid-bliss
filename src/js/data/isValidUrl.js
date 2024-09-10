export function isValidUrl(url) {
  if (typeof url !== 'string') {
    console.error('Invalid input: URL must be a string.');
    return false;
  }

  const specificPathPattern = /^\/(src\/images|assets)\/[\w\-./]*$/;
  if (specificPathPattern.test(url)) {
    return true;
  }

  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
