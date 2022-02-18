import React from 'react'
import Feed from "./Feed";

const Home = ({ posts, fetchError, isLoading }) => {

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