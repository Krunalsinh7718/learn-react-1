import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const user = "Krunalsinh7718";
function Github() {
    const data = useLoaderData();
    //const [data, setData] = useState([]);
    // useEffect(function(){
    //     fetch(`https://api.github.com/users/${user}`)
    //     .then(response => response.json())
    //     .then( data => setData(data))
    // })
    return (<>
        <div className="text-center">
            <div>Github</div>
            <div><img src={data?.avatar_url} alt="User Image" height="200" width="200" className="m-auto h-6 w-6 rounded-full"/></div>
            <div>followers: {data?.followers}</div>
        </div>
    </>);
}

export default Github;

export const GitLoaderData = async () => {
    const data = await fetch(`https://api.github.com/users/${user}`);
    return data.json();
}