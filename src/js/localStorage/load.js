export function load(key) {
  if (typeof key !== 'string' || key.trim() === '') {
    console.error('Invalid key provided for localStorage load');
    return null;
  }

  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error parsing JSON from localStorage:', error);
    return null;
  }
}
