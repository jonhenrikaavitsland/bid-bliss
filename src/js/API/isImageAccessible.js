export async function isImageAccessible(url) {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      mode: 'no-cors',
    });

    if (response.ok) {
      return true;
    } else {
      console.error(`Image not accessible: ${response.status} ${response.statusText}`);
      return false;
    }
  } catch (error) {
    console.error('Error while checking image accessibility:', error);
    return false;
  }
}
