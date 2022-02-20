import React from 'react'
import { useParams, Link } from "react-router-dom";
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import api from "../api/posts";

const PostPage = () => {
  const { posts, setPosts, navigate } = useContext(DataContext);

  const onDelete = async (id) => {
    const newPosts = posts.filter(post => post.id !== id);

    try {
      const response = await api.delete(`/posts/${id}`);
      
      setPosts(newPosts);
      navigate("./");
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  }
  
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
            <Link to={`/edit/${post.id}`}>
              <button className="editButton" type="button">Edit</button>
            </Link>
            <button className="deleteButton" onClick={() => onDelete(post.id)}>Delete</button>
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