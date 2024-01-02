import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({children}) {
    const navigate = useNavigate();
    const authStatus = useSelector(state => state.auth.status);
  
    useEffect(() => {
        if(authStatus){
            navigate("/");
        }else{
            navigate("/signin");
        }

    },[])
    return ( <>
    <div>
        {/* {JSON.stringify(currentUser)} */}
    {children}
    </div>
    </>);
}

export default AuthLayout;