import { useState } from "react";

function AppCounter() {
    let [counter, setCounter] = useState(0);

    const incrCount = () => {
        setCounter(counter + 1)
    }
    const decrCount = () => {
        setCounter(Math.max(counter - 1, 0))
    }
    return (
        <>
            <h1>count : {counter}</h1> 
            <button onClick={incrCount}>+ Add</button>
            <button onClick={decrCount}>- Remove</button>
            <footer>latest count : {counter}</footer>
        </>
    );
}

export default AppCounter;