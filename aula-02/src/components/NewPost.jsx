import React from 'react'
import { useState, useContext } from 'react';
import DataContext from '../context/DataContext';
import api from "../api/posts";

const NewPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { posts, setPosts, navigate } = useContext(DataContext)

  const onSubmission = async (e) => {
    e.preventDefault();

    const id = new Date().getTime();
    const datetime = new Date().toLocaleTimeString("en-us", {month: 'long', day: 'numeric', year: "numeric",})

    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody
    };

    
    try {
      const response = await api.post("/posts", newPost);
      const newPosts = await [...posts, response.data];
      
      setPosts(newPosts);
      setPostTitle("");
      setPostBody("");
  
      navigate(`./`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
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