import React from 'react'
import Feed from "./Feed";
import { useStoreState } from 'easy-peasy';

const Home = ({ fetchError, isLoading }) => {
  const posts = useStoreState(state => state.searchResults);

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