import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
  const postTitle = useStoreState(state => state.postTitle);
  const postBody = useStoreState(state => state.postBody);

  const setPostTitle = useStoreActions(actions => actions.setPostTitle);
  const setPostBody = useStoreActions(actions => actions.setPostBody);
  const savePost = useStoreActions(actions => actions.savePost);

  const navigate = useNavigate();

  const onSubmission = (e) => {
    e.preventDefault();

    const id = new Date().getTime();
    const datetime = new Date().toLocaleTimeString("en-us", {month: 'long', day: 'numeric', year: "numeric",})

    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody
    };

    savePost(newPost);
    navigate("/");
  }

  return (
    <main className="NewPost">
      <h1>New post</h1>
      <form onSubmit={onSubmission} className="newPostForm">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          required
          value={postTitle}
          onChange={e => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post body</label>
        <textarea
          style={{resize: "vertical"}}
          id="postBody"
          required
          value={postBody}
          onChange={e => setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>

      </form>
    </main>
  );
}

export default NewPost;