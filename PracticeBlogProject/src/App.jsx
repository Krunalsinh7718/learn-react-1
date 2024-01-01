import { Outlet } from "react-router-dom";
import { Header } from "./components";

function App() {
  // console.log("projectURL", conf.appwriteProjectUrl);
  // console.log("appwritePorjectId", conf.appwritePorjectId);
  // console.log("appwriteDatabaseId", conf.appwriteDatabaseId);
  // console.log("appwriteCollectionId", conf.appwriteCollectionId);
  // console.log("appwriteBucketId", conf.appwriteBucketId);
  // console.log("tinymiceApiKey", conf.tinymiceApiKey);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
