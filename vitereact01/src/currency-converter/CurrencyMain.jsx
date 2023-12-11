import { useState } from "react";
import {InputBox} from "./components/";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function CurrencyMain() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('inr');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const data = useCurrencyInfo(from);
    const keys = Object.keys(data);

    function swap(e){
        e.preventDefault();

        setFrom(to);
        setTo(from);

        setConvertedAmount(
            prevConvAmt => {
                setAmount(prevConvAmt)
                return amount;
            }
        )
    }

    const swap1 = (e) => {
        e.preventDefault();

        const tempAmount = amount;
        const tempFrom = from;

        setAmount(convertedAmount);
        setFrom(to);

        setConvertedAmount(tempAmount);
        setTo(tempFrom)


    }

    const convert = () => {
        setConvertedAmount(amount * data[to])
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
            <form onSubmit={ e => {
                e.preventDefault();
                convert();
            }}>
                <div className="p-5  flex flex-col ">
                <InputBox 
                    label="From"
                    currencyOptions={keys}
                    selectCurrency={from}
                    amount={amount}
                    onAmountChange={setAmount}
                    onCurrencyChange={ (currency) => {
                        setFrom(currency)
                        setAmount(amount)}
                    }
                />
                <div className="relative h-0.5">
                    <button 
                    className="absolute left-0 right-0 -top-4 m-auto rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black w-20 z-10"
                    type="button"
                    onClick={swap}>
                    SWAP
                    </button>
                </div>
                <InputBox 
                    label="To"
                    currencyOptions={keys}
                    selectCurrency={to}
                    amount={convertedAmount}
                    onCurrencyChange={ (currency) => setTo(currency)}
                    amountDisable={true}
                />
                <button
                    type="submit"
                    className="items-center rounded-md bg-cyan-600 px-3 py-3 text-md font-semibold text-white hover:bg-cyan/800 mt-5 text-center rounded-md"
                >
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
                </div>
            </form>
            {
                ""
            }
        </div>
      </div>
    </>
  );
}

export default CurrencyMain;
