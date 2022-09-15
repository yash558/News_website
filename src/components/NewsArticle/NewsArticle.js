import React from "react";

const NewsArticle = ({ data }) => {
  return (
    <div className="card" style={{ width: "23rem" }}>
      <img className="card_img" src={data.urlToImage} alt="card_img" />
      <div className="card-body">
        <h4 className="card-title">{data.title}</h4>
        <h5 className="card-text">{data.description}</h5>
        <div className="news_data">
          <a href="/" className="btn btn-primary">
            Read More
          </a>
          <span className="news__publish mt-2">{data.publishedAt}</span>
        </div>
        {/* <span className="news__src">{data.source.name}</span> */}
      </div>
    </div>
  );
};

export default NewsArticle;
