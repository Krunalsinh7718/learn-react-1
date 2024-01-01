import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {AddPost,
  AllPost,
  EditPost,
  Home,
  Post,
  SignIn,
  SignUp} from './pages/';
import {Provider} from "react-redux";
import Store from "./store/store.js";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path : "/all-post",
        element : <AllPost />
      },
      {
        path : "/add-post",
        element : <AddPost />
      },
      {
        path : "/edit-post",
        element : <EditPost />
      },
      {
        path : "/post",
        element : <Post />
      }
    ]
  },
  {
    path : "/signin",
    element : <SignIn />
  },
  {
    path : "/signup",
    element : <SignUp />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>,
)
