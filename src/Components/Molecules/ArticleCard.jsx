import React from "react";

import "./ArticleCard.scss";

/**
 * Renders an article card
 *
 * @param {*} { article } - article data
 * @return {*} {JSX.Element}
 */
const ArticleCard = ({ article }) => {
  return (
    <article className="article-card">
      <h2 className="article-card__title">{article.title}</h2>
      <span className="article-card__date">
        {article.date.toLocaleDateString()}
      </span>
      <p className="article-card__text">{article.text.slice(0, 150)}...</p>
    </article>
  );
};

export default ArticleCard;
