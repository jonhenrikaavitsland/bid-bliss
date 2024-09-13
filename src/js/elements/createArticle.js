/**
 * Creates an `<article>` element with specified CSS classes.
 *
 * Generates an article element and optionally adds valid CSS classes passed as arguments.
 * Filters out any non-string or empty classes before adding them to the article.
 *
 * @param {...string} classes Optional CSS classes to add to the article element.
 * @returns {HTMLElement} The created article element with the specified classes.
 * @example
 * ```js
 * // Create an article with multiple classes
 * const article = createArticle('featured', 'highlight', 'responsive');
 * document.body.appendChild(article);
 *
 * // Create an article without any classes
 * const plainArticle = createArticle();
 * document.body.appendChild(plainArticle);
 * ```
 */
export function createArticle(...classes) {
  const article = document.createElement('article');

  const validClasses = classes.filter((cls) => typeof cls === 'string' && cls.trim() !== '');

  if (validClasses.length > 0) {
    article.classList.add(...validClasses);
  }

  return article;
}
