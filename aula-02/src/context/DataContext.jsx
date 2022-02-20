import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/posts";
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  
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

  return (
    <DataContext.Provider value={{
      search, setSearch,
      searchResults, fetchError, isLoading,
      posts, setPosts,
      navigate
    }} >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;