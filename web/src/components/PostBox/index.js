import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const PostBox = (data) => {
  return (
    <div className="postbox">
      <div className="post-image">
        <Link to={data.postURL}>
          <img src={data.imageURL} alt={data.title} />
        </Link>
      </div>
      <div className="post-header">
        <h2>
          <Link to={data.postURL}>{data.title}</Link>
        </h2>
        <div className="details">
          <span>
            Por <Link to={data.authorURL}>{data.author}</Link>
          </span>
          <span>Data: {data.postDate}</span>
        </div>
      </div>
      <div className="post-body">
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default PostBox;
