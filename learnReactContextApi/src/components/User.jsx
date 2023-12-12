import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useUserContext } from "../context/UserContextProvider";

function User() {
    const {user} = useUserContext();

    if(!user){
        return (<><p>Please submit user</p></>)
    }
    return (<>
            User Name : {user}
    </>);
}

export default User;