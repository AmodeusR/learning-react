import React from 'react'

const NewPost = ({
  onSubmission,
  postTitle, setPostTitle,
  postBody, setPostBody
}) => {
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