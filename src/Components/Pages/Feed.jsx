import React, { useState, useEffect } from "react";

import "./Feed.scss";
import Title from "../Atoms/Title";
import Input from "../Molecules/Input";
import ArticlesGrid from "../Organisms/ArticlesGrid";
import { getArticles } from "../../Services/BackendService";

/**
 * Page with feed
 *
 * @return {*} {JSX.Element}
 */
const Feed = () => {
  // search query
  const [searchQuery, setSearchQuery] = useState("");
  // articles
  const [articles, setArticles] = useState([]);
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

  useEffect(() => {}, [searchQuery]);

  return (
    <div className="feed">
      <Title>Новости</Title>
      <Input
        value={searchQuery}
        setValue={setSearchQuery}
        placeholder="Поиск"
        labelText="Поиск"
      />
      <ArticlesGrid articles={articles} isLoading={isLoading} />
    </div>
  );
};

export default Feed;
