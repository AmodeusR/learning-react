import React from 'react';
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditPost = ({
  posts,
  editTitle, editBody,
  setEditTitle, setEditBody,
  onEdit
}) => {
  const { id } = useParams();
  const post = posts.find(post => String(post.id) === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, []);

  return (
    <main className="NewPost">
      { editTitle &&
        <>
          <h1>Edit post</h1>
          <form onSubmit={(e) => e.preventDefault()} className="newPostForm">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              required
              value={editTitle}
              onChange={e => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post body</label>
            <textarea
              style={{resize: "vertical"}}
              id="postBody"
              required
              value={editBody}
              onChange={e => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={() => onEdit(post.id)}>Submit</button>

          </form>
        </>
      }
      { !editTitle &&
        <main className="Missing">
        <h2>Page not Found</h2>
        <p>Well, that's disappointing.</p>
        <Link to="/">
          <p>Go to homepage.</p>
        </Link>
      </main>
      }
    </main>
  )
}

export default EditPost;