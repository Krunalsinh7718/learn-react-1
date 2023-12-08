import { useParams } from "react-router-dom";

function User() {
    
    const {userid} = useParams();

    return ( <>
        <h1 className="text-center p-10 text-lg">User : {userid}</h1>
    </> );
}

export default User;