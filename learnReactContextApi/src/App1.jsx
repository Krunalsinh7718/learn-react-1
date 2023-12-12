import { Login, User } from "./components";
import UserContextProvider from "./context/UserContextProvider";

function App1() {
    return (<>
        <UserContextProvider>
            <div className="p-4">
                <Login />
                <User />
            </div>
        </UserContextProvider>
    </>);
}

export default App1;