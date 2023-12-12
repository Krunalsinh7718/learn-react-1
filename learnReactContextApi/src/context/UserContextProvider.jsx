import { useContext, useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({children}) {

    const [user,setUser] = useState("");
    return (<>
    
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    </>);
}

export default UserContextProvider;

export function useUserContext(){
    return useContext(UserContext);
}