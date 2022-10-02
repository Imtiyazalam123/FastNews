import React from "react";

export default function NewsItem(props) {
  
  return (
    <div className="card">
      <span
        style={{ left: "90%", zIndex: 1 }}
        className="position-absolute top-0  translate-middle badge rounded-pill bg-success"
      >
        {props.source}{" "}
      </span>
      <img
        src={
          props.imageUrl
            ? props.imageUrl
            : "https://thumbs.dreamstime.com/z/world-news-background-news-text-earth-globe-front-mov-moving-directions-76276244.jpg"
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>

        <p className="card-text">
          <small className="text-muted">
            By {props.author ? props.author : "Unknown"} on {new Date(props.date).toGMTString()}
          </small>
        </p>
        <a
          href={props.newsUrl}
          className="btn btn-primary"
          rel="noreferrer"
          target="_blank"
        >
          Read More...
        </a>
      </div>
    </div>
  );
};
