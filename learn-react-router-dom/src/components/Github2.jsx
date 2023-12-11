import { useLoaderData } from "react-router-dom";

function Github2() {
    const data = useLoaderData();
    return (<>
        <h1>{data?.name}</h1>
        <img src={data?.avatar_url} alt="User Image" />
        <h4>{data?.followers}</h4>

    </>);
}


export default Github2;
export const getGitUserData = async () => {
    const userData = await fetch("https://api.github.com/users/Krunalsinh7718");
    const data = await userData.json();

    return data;

}
