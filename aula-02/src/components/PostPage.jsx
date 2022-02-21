import React from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';

const PostPage = () => {  
  const deletePost = useStoreActions(actions => actions.deletePost);
  const getPostById = useStoreState(state => state.getPostById);
  const navigate = useNavigate();
  
  const onDelete = (id) => {    
    deletePost(id);
    navigate("/");
  }
  
  const { id } = useParams();
  const post = getPostById(id);

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