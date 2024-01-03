import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { useEffect } from "react";
import service from "./appwrite/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/authSlice";

function App() {
  // console.log("projectURL", conf.appwriteProjectUrl);
  // console.log("appwritePorjectId", conf.appwritePorjectId);
  // console.log("appwriteDatabaseId", conf.appwriteDatabaseId);
  // console.log("appwriteCollectionId", conf.appwriteCollectionId);
  // console.log("appwriteBucketId", conf.appwriteBucketId);
  // console.log("tinymiceApiKey", conf.tinymiceApiKey);

  const authStatus = useSelector(state => state.auth.status);

  const dispatch = useDispatch();

  useEffect(() => {
   
      service.getCurrentUser().then((user) => {
        
        if(user){
          dispatch(login(user));
        }else{
          dispatch(logout());
        }
      })
      .catch(error => {
        console.log("error >> app >> currentUser", error);
       })
       .finally(() => console.log("main layout data fetch process done."))
   
  },[])
  return (
    <>
    {authStatus && <Header />}
      
      <Outlet />
    </>
  );
}

export default App;
