import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleSubmit = () => {
    console.log("submitting");
  }

  const handleDelete = (id) => {
    const newPosts = posts.filter(post => post.id !== id);
    
    setPosts(newPosts);
    navigate("/");
  }

  return (
    <div className="App">
      <Header title="ReactJS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" index element={
          <Home
            posts={posts}
            setPosts={setPosts}
          />}
        />
        
        <Route path="/post" element={<NewPost
          onSubmission={handleSubmit}
          postTitle={postTitle}
          postBody={postBody}
          setPostTitle={setPostTitle}
          setPostBody={setPostBody}
        />} />
        <Route path="/post/:id" element={<PostPage posts={posts} onDelete={handleDelete} />} />
      
        <Route path="/about" element={ <About /> } />
        <Route path="*" element={ <Missing /> } />
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
