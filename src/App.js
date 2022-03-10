import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Album from "./Pages/Album";
import Blog from "./Pages/Blog";
import Features from "./Pages/Features";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Album" element={<Album />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/" element={<Home />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
