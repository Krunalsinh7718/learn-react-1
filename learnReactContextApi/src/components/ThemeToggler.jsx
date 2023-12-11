import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeToggler() {
    const {setTheme} = useContext(ThemeContext);

    

    return (<>
        ThemeToggler :  <input type="checkbox"  onChange={(event) => setTheme(event.target?.checked)}/>
    </>);
}

export default ThemeToggler;