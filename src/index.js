import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './routes/root'
//import ErrorPage from "./routes/errorPage";
//import App from "./App";


const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>
);