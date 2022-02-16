import React from 'react';
import { Link } from "react-router-dom";


const Post = ({ post }) => {
  const {id, title, datetime, body} = post;

  return (
    <article className="post">
      <Link to={`/post/${id}`}>
        <h2>{title}</h2>
        <p className="postDate">{datetime}</p>
        <p>
          {
            body.length < 28 ? body : `${body.slice(0, 28)}...`
          }
        </p>
      </Link>
    </article>
  )
}

export default Post;