import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./routes/about";
import Contact from "./routes/contact";
import Education from "./routes/education";
import Portfolio from "./routes/portfolio";
import Work from "./routes/work";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/work" element={<Work />}></Route>
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
