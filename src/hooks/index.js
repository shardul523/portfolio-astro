import { useState, useEffect } from "react";

const getWindowWidth = () => window.innerWidth;

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const updateWidth = () => setWindowWidth(getWindowWidth());
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return windowWidth;
};
