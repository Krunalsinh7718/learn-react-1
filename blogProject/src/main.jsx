import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import AllPost from "./components/AllPost.jsx";
import PageLayout from "./PageLayout.jsx";
import EditPost from "./components/EditPost.jsx";
import Post from "./components/Post.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/all-posts",
        element: (
        <PageLayout authentication={false}>
          <AllPost />
        </PageLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
        <PageLayout authentication={false}>
          <CreatePost />
        </PageLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
        <PageLayout authentication={false}>
          <EditPost />
        </PageLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: (
        <PageLayout authentication={false}>
          <Post />
        </PageLayout>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
