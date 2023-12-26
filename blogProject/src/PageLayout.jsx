import { useEffect } from "react";
import { Header } from "./components";
import { useNavigate, Outlet } from "react-router-dom";

function PageLayout({ children, authentication = true }) {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!authentication) {
  //     navigate("/login");
  //   } else {
  //     navigate("/");
  //   }
  // }, [authentication]);


  return <>{children}</>;
}

export default PageLayout;
