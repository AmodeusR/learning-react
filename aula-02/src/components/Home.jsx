import React from 'react'
import Feed from "./Feed";
import { useContext } from 'react';
import DataContext from '../context/DataContext';


const Home = () => {
  const { searchResults: posts, fetchError, isLoading } = useContext(DataContext);
  
  return (
    <main className="Home">
      {isLoading &&
        <p className="statusMsg">Loading database...</p>
      }
      {fetchError &&
        <p className="statusMsg" style={{color: "crimson"}}>An error occurred: {fetchError}</p>
      }
      {!isLoading && !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p style={{marginTop: "2rem"}}>There are no posts</p>
        ))
      }
    </main>
  );
}

export default Home;