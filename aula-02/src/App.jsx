import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import EditPost from "./components/EditPost";
import About from "./components/About";
import Missing from "./components/Missing";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useStoreActions } from "easy-peasy";

function App() {
  const setPosts = useStoreActions(actions => actions.setPosts);
  const {data: postsData, fetchError, isLoading} = useAxiosFetch("/posts");

  useEffect(() => {
    setPosts(postsData);

  }, [postsData, setPosts]);


  return (
    <div className="App">
      <Header title="ReactJS Blog"/>
        <Nav  />
        <Routes>
          <Route path="/" index element={<Home fetchError={fetchError} isLoading={isLoading} />} />
        
          <Route path="/post" element={<NewPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostPage />} />
        
          <Route path="/about" element={ <About /> } />
          <Route path="*" element={ <Missing /> } />
        
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
