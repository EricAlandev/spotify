// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { LibraryProvider } from "./context/LibraryContext";
import App from './App.jsx'

import './index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LibraryProvider>
      <App />
    </LibraryProvider>
  </React.StrictMode>
);
