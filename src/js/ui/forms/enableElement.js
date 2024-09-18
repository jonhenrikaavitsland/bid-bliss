export function enableElements(...elementIds) {
  elementIds.forEach((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      if (element.disabled) {
        element.disabled = false;
        elementIds = [];
      }
    }
  });
}
