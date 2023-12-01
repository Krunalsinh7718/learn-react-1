import { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
    const [password, setPassword] = useState("pA$$W0rD");
    const [passwordLength, setPasswordLength] = useState(10);
    const [numEnabled, setNumEnabled] = useState(true);
    const [spCharEnabled, setSpCharEnabled] = useState(true);

    const passTextElement = useRef(null);

 

    const getPassword = useCallback(() => {
        let newPassword = '';
        let passwordStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if(numEnabled){
            passwordStr += "1234567890";
        }
        if(spCharEnabled){
            passwordStr += "!@#$%&*?";
        }
        
        for (let i = 0; i < passwordLength; i++) {
            let charIndex = Math.floor(Math.random() * passwordStr.length);
            newPassword += passwordStr[charIndex]
            
        }
        setPassword(newPassword);
    },[numEnabled, spCharEnabled, passwordLength, setPassword])

    const handleCopyText = useCallback(() => {
        let currentEle = passTextElement.current;
        currentEle?.select();
        currentEle?.setSelectionRange(0, 99999); // For mobile devices
        window.navigator.clipboard.writeText(currentEle.value);
    },[password])

    useEffect(() => {
        getPassword();
    },[numEnabled, spCharEnabled, passwordLength, getPassword]);
    
    


    return (<>
        <div className="min-h-screen" style={{ backgroundColor: "#444" }}>
            <div className="fixed top-10 left-0 right-0 p-4 m-auto max-w-xl bg-gray-200 rounded-md flex flex-col gap-2">
                <div className="flex w-full items-center gap-2 ">
                    <input 
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    ref={passTextElement}
                    value={password} 
                    readOnly/>
                    <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        onClick={handleCopyText}
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
                        min="8" 
                        max="16" 
                        value={passwordLength} 
                        onChange={ e => setPasswordLength(parseInt(e.target.value)) }
                        />
                        <span style={{width : "20px"}}>{passwordLength}</span>
                    </div>
                    <div className="flex gap-2">
                        <input 
                        type="checkbox" 
                        id="specialChar" 
                        defaultChecked={spCharEnabled} 
                        onChange={ () => {
                            setSpCharEnabled(prev => !prev)
                        }}/>
                        <label htmlFor="specialChar">Special Character</label>
                    </div>
                    <div className="flex gap-2">
                        <input 
                        type="checkbox" 
                        id="passNumbers"
                        defaultChecked={numEnabled} 
                        onChange={() => {
                            setNumEnabled(prev => !prev)
                        }}/>
                        <label htmlFor="passNumbers">Numbers</label>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default PasswordGenerator;