import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import Navbar from "./Navbar";
import NewsArticle from "./NewsArticle";

function News(props) {
  const { data } = useContext(NewsContext);

  return (
    <div>
      <Navbar />
      <div className="all__news" style={{ marginTop: 100 }}>
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading..."}
      </div>
    </div>
  );
}

export default News;
