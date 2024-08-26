export function createTime(datetime, textContent, ...classes) {
  const timeElement = document.createElement('time');
  timeElement.setAttribute('datetime', datetime);
  timeElement.textContent = textContent;
  timeElement.classList.add(...classes);
  return timeElement;
}
