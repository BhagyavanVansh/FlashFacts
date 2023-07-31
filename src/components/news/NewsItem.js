import React from "react";
import "./news.css";

const NewsItem = (props) => {
  return (
    <div className="news__item container">
      <div className="card__image">
        <img src={props.urlToImage} alt="News" />
        <span className="card__source">{props.source}</span>
      </div>
      <div className="card__content">
        <h3 className="card__title">{props.title.slice(0, 60)}...</h3>

        <p className="card__description">
          {props.description.slice(0, 100)}...
        </p>
        <p className="card__timeline">
          By {props.author} on {new Date(props.date).toGMTString()}
        </p>
        <a
          href={props.newsurl}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Read more...
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
