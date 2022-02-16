import React from 'react'
import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, onDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => String(post.id) === id);

  return (
    <main className="PostPage">
      <article className="post">
        { post &&
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button onClick={() => onDelete(post.id)}>Delete</button>
          </>
        }
        {!post &&
          <>
            <h2>Page not Found</h2>
            <p>Well, that's disappointing.</p>
            <Link to="/">
              <p>Go to homepage.</p>
            </Link>
          </>
        }
      </article>
    </main>
  );
}

export default PostPage;