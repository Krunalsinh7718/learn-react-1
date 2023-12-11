import { Link } from "react-router-dom";

function NoMatch() {
    return (
        <>
            <h1 className="text-center text-3xl text-red-500">No matching routes found </h1>
            <Link path="/home">Back to home</Link>
        </>
    );
}
export default NoMatch;