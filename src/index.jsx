import React from "react";
// createRoot yerine ReactDOM.createRoot kullanmak daha yaygındır,
// ancak createRoot'u da destekliyorum. React 18 ile uyumlu.
import ReactDOM from 'react-dom/client'; 
// UYGULAMANIN TEK ROUTER'I BURADA!
import { BrowserRouter } from "react-router-dom"; 
import App from "./App";
// Tailwind CSS importu
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Bu, uygulamadaki TEK <BrowserRouter> (veya Router) örneğidir. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);