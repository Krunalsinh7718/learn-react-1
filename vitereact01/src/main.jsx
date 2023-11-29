import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (<h1>Hello</h1>);

const reactElement = React.createElement(
  'a',
  { href : "https://www.google.com", className: "dir-llink" }, 
  "go to google"
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   [reactElement,anotherElement]
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     <App />
//   </>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     {anotherElement}
     {reactElement}
  </>
)
