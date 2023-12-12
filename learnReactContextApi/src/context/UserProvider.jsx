import { useContext, useState } from "react";

function UserProvider({children}) {

    const [user,setUser] = useState("");

    return (<>
        <useContext.Provider value={{user,setUser}}>
            {children}
        </useContext.Provider>
    </>);
}

export default UserProvider;