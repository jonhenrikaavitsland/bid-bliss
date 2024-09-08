export async function isImageAccessible(url) {
  if (typeof url !== 'string' || !url.trim()) {
    console.error('Invalid URL provided for image accessibility check.');
    return false;
  }

  try {
    const response = await fetch(url, { method: 'HEAD' });

    if (response.ok) {
      return true;
    }

    console.error(`Image not accessible at ${url}: ${response.status} ${response.statusText}`);
    return false;
  } catch (error) {
    console.error(`Error while checking image accessibility at ${url}:`, error);
    return false;
  }
}
