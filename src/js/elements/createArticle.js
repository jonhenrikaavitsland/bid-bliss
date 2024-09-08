export function createArticle(...classes) {
  const article = document.createElement('article');

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    article.classList.add(...validClasses);
  }

  return article;
}
