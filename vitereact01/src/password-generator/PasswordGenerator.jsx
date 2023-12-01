import { useEffect, useState } from "react";

function PasswordGenerator() {
    const [password, setPassword] = useState("abcdefghijklm");
    const [passwordLength, setPasswordLength] = useState(13);
    const [numEnabled, setNumEnabled] = useState(true);
    const [spCharEnabled, setSpCharEnabled] = useState(true);

    const a2z = "abcdefghijklmnopqrstuvwxyz";
    const o29 = "1234567890";
    const spChar = "`!@#$%^&*()_+{}<>?{}.,-=";

    function getPassword(){
        let password = '';
        
        for (let i = 0; i < passwordLength; i++) {
            const passCharSelect = Math.floor(Math.random() * 3 + 1);
            
           if(passCharSelect === 1 && numEnabled){
                password += o29[Math.floor(Math.random() * o29.length)]
            }else if(passCharSelect === 2 && spCharEnabled){
                password += spChar[Math.floor(Math.random() * spChar.length)]
            }else{
                password += a2z[Math.floor(Math.random() * a2z.length)]
           }
            
        }
        return password;
    }
    // let passwordStr = getPassword();
    // console.log(passwordStr, passwordStr.length);

    useEffect(() => {
        setPassword(getPassword())
    },[numEnabled]);
    useEffect(() => {
        setPassword(getPassword())
    },[spCharEnabled]);
    


    return (<>
        <div className="min-h-screen" style={{ backgroundColor: "#444" }}>
            <div className="fixed top-10 left-0 right-0 p-4 m-auto max-w-xl bg-gray-200 rounded-md flex flex-col gap-2">
                <div className="flex w-full items-center gap-2 ">
                    <div className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50">
                        <span>{password}</span>
                    </div>
                   
                    <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Copy
                    </button>
                </div>
                <div className="flex w-full items-center gap-6 ">
                    <div className="flex gap-2">
                        <input 
                        type="range" 
                        id="volume" 
                        name="volume" 
                        min="0" 
                        max="13" 
                        value={passwordLength} 
                        onChange={ e => setPasswordLength(parseInt(e.target.value)) }
                        onMouseUp={ e => setPassword(getPassword())}/>
                        <span style={{width : "20px"}}>{passwordLength}</span>
                    </div>
                    <div className="flex gap-2">
                        <input 
                        type="checkbox" 
                        id="specialChar" 
                        checked={spCharEnabled} 
                        onChange={e => setSpCharEnabled(e.target.checked)}/>
                        <label htmlFor="specialChar">Special Character</label>
                    </div>
                    <div className="flex gap-2">
                        <input 
                        type="checkbox" 
                        id="passNumbers"
                        checked={numEnabled} 
                        onChange={e => setNumEnabled(e.target.checked)}/>
                        <label htmlFor="passNumbers">Numbers</label>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default PasswordGenerator;