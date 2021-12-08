import React from "react";

import "./ArticlesGrid.scss";
import ArticleCard from "../Molecules/ArticleCard";
import Loading from "../Atoms/Loading";

/**
 * Grid with articles cards.
 *
 * @param {*} { articles } - articles to render
 * @return {*} {JSX.Element}
 */
const ArticlesGrid = ({ articles, isLoading }) => {
  const articlesNotFound = articles.length === 0 && !isLoading;

  const sortByDateDesc = (a, b) => b.date - a.date;

  return (
    <section className="articles">
      {isLoading && (
        <div className="articles__loading-container">
          <Loading />
        </div>
      )}
      {articlesNotFound && (
        <p className="articles__no-articles">
          Новостей с такими параметрами не существует :(
        </p>
      )}
      {!articlesNotFound && (
        <div className="articles__grid">
          {articles.sort(sortByDateDesc).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ArticlesGrid;
