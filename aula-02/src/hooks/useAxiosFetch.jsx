import { useState, useEffect } from "react";
import axios from "axios";
import api from "../api/posts";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();
    
    const fetchData = async (url) => {    
      setIsLoading(true);
      
      try {
        const response = await api.get(url, {
          cancelToken: source.token
        });

        if (isMounted) {
          setData(response.data);
        }
      } catch (err) {
        setFetchError(err.message);
      } finally {
        isMounted && setIsLoading(false);
      }
    }

    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    }

    return cleanUp;
  }, [dataUrl]);


  return {data, fetchError, isLoading};
}

export default useAxiosFetch;