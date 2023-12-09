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
            <div><img src={data?.avatar_url} alt="User Image" height="200" width="200" className="m-auto h-300 w-300 rounded-full"/></div>
            <div>followers: {data?.followers}</div>
        </div>
    </>);
}

export default Github;

export const GitLoaderData = async () => {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    return data;
}