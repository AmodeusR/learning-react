import React from 'react';
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';


const EditPost = () => {
  const editTitle = useStoreState(state => state.editTitle);
  const editBody = useStoreState(state => state.editBody);
  const setEditTitle = useStoreActions(actions => actions.setEditTitle);
  const setEditBody = useStoreActions(actions => actions.setEditBody);
  const editPost = useStoreActions(actions => actions.editPost);
  const navigate = useNavigate();
  const getPostById = useStoreState(state => state.getPostById);

  const onEdit = (id) => {
    const datetime = new Date().toLocaleTimeString("en-us", {month: 'long', day: 'numeric', year: "numeric",})

    const updatedPost = {
      id,
      title: editTitle,
      datetime,
      body: editBody
    };

    editPost(updatedPost);
    navigate(`/post/${id}`)

  }

  const { id } = useParams();
  const post = getPostById(id);

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