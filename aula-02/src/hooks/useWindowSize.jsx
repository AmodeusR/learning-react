import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {

    const getWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    getWindowSize();

    window.addEventListener("resize", getWindowSize);

    const cleanUp = () => {
      window.removeEventListener("resize", getWindowSize);
    }

    return cleanUp;
  }, []);
  
  return windowSize;
}

export default useWindowSize;