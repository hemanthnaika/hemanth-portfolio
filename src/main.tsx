import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import AllProjects from "./components/AllProjects";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <AllProjects />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <Toaster position="bottom-center" reverseOrder={false} />
    <RouterProvider router={router} />
  </StrictMode>
);
