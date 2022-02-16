import React from 'react'
import Feed from "./Feed";

const Home = ({ posts }) => {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{marginTop: "2rem"}}>There are no posts</p>
      )}
    </main>
  );
}

export default Home;