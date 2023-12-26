import "./App.css";
import { Header, Home } from "./components";
import { Outlet } from "react-router-dom";
import conf from "./conf/conf";
import authService from "./appwrite/auth";
import { useEffect } from "react";

function App() {
  

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
