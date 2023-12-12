import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useUserContext } from "../context/UserContextProvider";

function Login() {
    const {setUser} = useUserContext();

    const [username, setUserName] = useState('');

    return (<>
    <div>
        <input
        type="text"
        className="border"
        placeholder="User Name"
        value={username}
        onChange={event => setUserName(event.target.value)}
        />
        <input
        type="password"
        className="border"
        placeholder="Password"
        />
        <button onClick={() => setUser(username)}>Submit</button>
    </div>
    </>);
}

export default Login;