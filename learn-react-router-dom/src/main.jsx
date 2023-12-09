import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Layout} from './Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { About, Canvas, ContactUs, Github, Home, Learn, Login, NoMatch, User } from './components'
import { GitLoaderData } from './components/Github'

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout />,
//     children : [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "/about",
//         element : <About />
//       },
//       {
//         path: "/contactUs",
//         element: <ContactUs />
//       }
//     ]
//   },
//   {
//     path: "/login",
//     element : <Login />
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contactUs" element={<ContactUs />}/>
      <Route path="user/:userid" element={<User />}/>

      <Route 
        loader={GitLoaderData}
        path="github" 
        element={<Github />}
      />
      <Route path="learn" element={<Learn />}>
        <Route path="canvas" element={<Canvas /> }/>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Route>,
    <Route path="/login" element={<Login />} />,
    <Route path="*" element={<NoMatch />} />
  ])
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
