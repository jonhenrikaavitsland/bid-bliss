export function enableElements(...elementIds) {
  elementIds.forEach((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.disabled = false;
    } else {
      console.error(`Element with ID "${elementId}" not found.`);
    }
  });
}
