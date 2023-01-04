import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Pokeapi from './pokeapi-itnetwork/Pokeapi';
import GalleryFeed from './gallery/GalleryFeed';
import GalleryClassic from './gallery/GalleryClassic';
import Eshop from './eshop/Eshop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  //   <App2 />
  // </React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="pokeapi" element={<Pokeapi />} />
        <Route path="gallery-classic" element={<GalleryClassic />} />
        <Route path="gallery-feed" element={<GalleryFeed />} />
        <Route path="eshop" element={<Eshop />} />
      </Route>
    </Routes>
  </Router>
);
