import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

const Root = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <StrictMode>
      {isMounted ? (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      ) : null}
    </StrictMode>
  );
};

const rootElement = document.getElementById("app");
if (rootElement) {
  createRoot(rootElement).render(<Root />);
} else {
  console.error("Root element with id 'app' not found");
}