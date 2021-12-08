import React, { useState, useEffect } from "react";

import "./Feed.scss";
import Title from "../Atoms/Title";
import Input from "../Molecules/Input";
import ArticlesGrid from "../Organisms/ArticlesGrid";
import { getArticles } from "../../Services/BackendService";

/**
 * Page with a list of articles
 * and a search bar.
 *
 * @return {*} {JSX.Element}
 */
const Feed = () => {
  // search query
  const [searchQuery, setSearchQuery] = useState("");
  // articles
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchArticles = async () => {
    // indicate loading start
    setIsLoading(true);
    // make request to an api
    const response = await getArticles();
    // check if response has been successfully made
    if (response.success) {
      // set articles
      setArticles(response.data);
      setFilteredArticles(response.data);
    } else {
      // set error
      setError(response.error);
    }
    // indicate loading finish
    setIsLoading(false);
  };

  /**
   * Fetch articles after the
   * component did mount.
   */
  useEffect(() => {
    fetchArticles();
  }, []);

  /**
   * Filters a list of articles
   * based on searchQuery param.
   *
   * @param {*} searchQuery - phrase to find in 'text' or 'title' fields.
   */
  const filterArticles = (searchQuery) => {
    let nextArticles = articles;

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      nextArticles = articles.filter((article) => {
        const searchTarget =
          article.title.toLowerCase() + article.text.toLowerCase();
        return searchTarget.includes(lowerQuery);
      });
    }

    setFilteredArticles(nextArticles);
  };

  /**
   * Filter articles on every
   * 'searchQuery' change.
   */
  useEffect(() => {
    filterArticles(searchQuery);
  }, [searchQuery]);

  return (
    <div className="feed">
      <Title>Новости</Title>
      <Input
        value={searchQuery}
        setValue={setSearchQuery}
        placeholder="Поиск"
        labelText="Поиск"
        disableValidation
      />
      <ArticlesGrid articles={filteredArticles} isLoading={isLoading} />
    </div>
  );
};

export default Feed;
