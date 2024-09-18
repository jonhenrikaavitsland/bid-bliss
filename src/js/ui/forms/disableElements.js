export function disableElements(...elementIds) {
  elementIds.forEach((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.disabled = true;
    } else {
      console.error(`Element with ID "${elementId}" not found.`);
    }
  });
}
