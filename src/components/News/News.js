import React, { useContext } from "react";
import { NewsContext } from "../../NewsContext";
import NewsArticle from "./../NewsArticle/NewsArticle";
const News = () => {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div className="all_news">
      {data
        ? data.articles.map((news) => (
            <NewsArticle data={news} key={news.url} />
          ))
        : "Loading..."}
    </div>
  );
};

export default News;
