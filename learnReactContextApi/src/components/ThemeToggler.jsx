import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import useTheme from "../context/ThemeContext";

function ThemeToggler() {

    const {theme, setDarkTheme, setLightTheme} = useTheme();
    
    const handleOnChange = event => {
        const checkStatus = event.currentTarget.checked;

        if(checkStatus){
            setDarkTheme();
        }else{
            setLightTheme();
        }
    }
    
    return (<>
        ThemeToggler :  
        <input 
        type="checkbox"  
        onChange={handleOnChange}
        checked={theme === "dark"}/>
    </>);
}

export default ThemeToggler;