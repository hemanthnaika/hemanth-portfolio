import "./index.css";


import ReactDOM from "react-dom/client";

import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <Toaster position="bottom-center" reverseOrder={false} />
    <App />
  </StrictMode>
);
