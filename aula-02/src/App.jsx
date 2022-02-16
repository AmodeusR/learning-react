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
import api from "./api/posts";


function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    const filteredPosts = posts.filter(post => (
      (post.title).toLowerCase().includes(search.toLowerCase()) ||
      (post.body).toLowerCase().includes(search.toLowerCase())
    ));

    setSearchResults(filteredPosts.reverse());

  }, [search, posts]);

  // API Storage Management

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);

      } catch (err) {
        if (!err.response) console.log(`Error: ${err.message}`);

        const {response: {data, status, headers}} = err;
        console.table(data, status, headers);
      }

    }

    fetchAPI();
  }, []);

  // Local Storage Management

  // useEffect(() => {
  //   localStorage.setItem("posts", JSON.stringify(posts) || "[]");
  // }, [posts]);

  // useEffect(() => {
  //   setPosts(JSON.parse(localStorage.getItem("posts")));
  // }, []);

  const handleSubmit = async (e) => {
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
      const response = api.post("./posts", newPost);
      const newPosts = [...posts, response.data];
      
      setPosts(newPosts);
      setPostTitle("");
      setPostBody("");
  
      navigate(`./`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  }

  const handleDelete = (id) => {
    const newPosts = posts.filter(post => post.id !== id);
    
    setPosts(newPosts);
    navigate("./");
  }

  return (
    <div className="App">
      <Header title="ReactJS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" index element={
          <Home
            posts={searchResults}
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
