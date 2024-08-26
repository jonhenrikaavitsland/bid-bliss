export function createArticle(...classes) {
  const article = document.createElement('article');
  article.classList.add(...classes);
  return article;
}
