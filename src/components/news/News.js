import React, { useEffect, useState } from "react";
import "./news.css";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=85ad5d8264af409888a637ae62b26f9f
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const apiKey = "468b0f3b387b44c79bd70568935a8559";

  const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apiKey}&page=${page}&pagesize=6`;

  const updateNews = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
      setTotalResults(data.totalResults);
    } catch (e) {
      console.log("Error accured");
    }
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(articles.concat(data.articles));
      setTotalResults(data.totalResults);
    } catch (e) {
      console.log("Error accured");
    }
  };

  useEffect(() => {
    updateNews();
    setPage(page + 1);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main__section">
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
      >
        <div className="container section__container">
          {articles.map((element, index) => {
            return (
              <NewsItem
                urlToImage={
                  element.urlToImage
                    ? element.urlToImage
                    : "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                }
                title={element.title ? element.title : ""}
                description={element.description ? element.title : ""}
                date={element.publishedAt}
                author={element.author ? element.author : "unknown"}
                newsurl={element.url}
                source={element.source.name}
                key={index}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
