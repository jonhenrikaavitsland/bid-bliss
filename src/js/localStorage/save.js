export function save(key, value) {
  if (typeof key !== 'string' || key.trim() === '') {
    console.error('Invalid key provided for localStorage save');
    return;
  }

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}
