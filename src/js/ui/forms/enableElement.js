export function enableElements(...elementIds) {
  elementIds.forEach((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      if (element.disabled) {
        element.disabled = false;
      }
    } else {
      console.error(`Element with ID "${elementId}" not found.`);
    }
  });
}
