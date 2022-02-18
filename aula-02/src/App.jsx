import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import EditPost from "./components/EditPost";
import About from "./components/About";
import Missing from "./components/Missing";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import api from "./api/posts";

// custom hooks

import useWindowSize from './hooks/useWindowSize';
import useAxiosFetch from './hooks/useAxiosFetch';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { width: windowWidth } = useWindowSize();
  const navigate = useNavigate();

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  useEffect(() => {
    const filteredPosts = posts.filter(post => (
      (post.title).toLowerCase().includes(search.toLowerCase()) ||
      (post.body).toLowerCase().includes(search.toLowerCase())
    ));

    setSearchResults(filteredPosts.reverse());

  }, [search, posts]);

  // API Storage Management

  const {data: postsData, fetchError, isLoading} = useAxiosFetch("/posts");

  useEffect(() => {
    setPosts(postsData);

  }, [postsData]);

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
      const response = api.post("/posts", newPost);
      const newPosts = [...posts, response.data];
      
      setPosts(newPosts);
      setPostTitle("");
      setPostBody("");
  
      navigate(`./`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  }

  const handleDelete = async (id) => {
    const newPosts = posts.filter(post => post.id !== id);

    try {
      const response = await api.delete(`/posts/${id}`);
      
      setPosts(newPosts);
      navigate("./");
    } catch (err) {
      console.error(`Error: ${err.message}`);
    }
  }

  const handleEdit = async (id) => {
    const datetime = new Date().toLocaleTimeString("en-us", {month: 'long', day: 'numeric', year: "numeric",})

    const updatedPost = {
      id,
      title: editTitle,
      datetime,
      body: editBody
    };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
      console.log(posts.map(post => post.id === id ? { ...response.data } : post));

      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }

  }

  return (
    <div className="App">
      <Header title="ReactJS Blog" windowWidth={windowWidth} />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" index element={
          <Home
            posts={searchResults}
            fetchError={fetchError}
            isLoading={isLoading}
          />}
        />
        
        <Route path="/post" element={<NewPost
          onSubmission={handleSubmit}
          postTitle={postTitle}
          postBody={postBody}
          setPostTitle={setPostTitle}
          setPostBody={setPostBody}
        />} />
        <Route path="/edit/:id" element={<EditPost
          posts={posts}
          onEdit={handleEdit}
          editTitle={editTitle}
          editBody={editBody}
          setEditTitle={setEditTitle}
          setEditBody={setEditBody}
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
