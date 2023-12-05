import { useState } from "react";
import {CurInputBox} from "./components/index.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function CurrencyConvMain() {
    const [curAmount, setCurAmount] = useState(0);
    const [fromCur, setFromCur] = useState('usd');
    const [convertedAmount,setConvertedAmount] = useState(0);
    const [toCur, setToCur] = useState('inr');

    const data = useCurrencyInfo(fromCur);
    // const keys = Object.keys(data);
    // console.log(data);

    const convertAmount = () => {
        setConvertedAmount(curAmount * data[toCur])
    };

    const swap = () => {
        setFromCur(toCur);
        setToCur(fromCur);
        setCurAmount(prev => {
            setConvertedAmount(prev)
            return convertedAmount;
        });
    }
  return (
    <>  
      <div
        className="main-wrapper h-screen grid "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="m-auto max-w-xl bg-white rounded-md w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertAmount();
            }}
          >
            <div className="p-5  flex flex-col ">
              <CurInputBox 
              label="From"
              curAmount={curAmount}
              setCurAmount={setCurAmount}
              selectCur={fromCur}
              setSelectCurrency={setFromCur}
              currencyOptions={Object.keys(data)}
              />
              <div className="relative h-0.5">
                <button
                  className="absolute left-0 right-0 -top-4 m-auto rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-20 z-10"
                  type="button"
                  onClick={swap}
                >
                  SWAP
                </button>
              </div>
              <CurInputBox 
               label="To"
               curAmount={convertedAmount}
               setCurAmount={setConvertedAmount}
               selectCur={toCur}
               setSelectCurrency={setToCur}
               currencyOptions={Object.keys(data)}
               isInputDisabled
              />
              <button
                type="submit"
                className="items-center rounded-md bg-cyan-600 px-3 py-3 text-md font-semibold text-white hover:bg-cyan/800 mt-5 text-center rounded-md"
              >
                Convert {fromCur.toUpperCase()} to {toCur.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CurrencyConvMain;
