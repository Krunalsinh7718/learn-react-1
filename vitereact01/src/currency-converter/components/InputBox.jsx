import { useId } from "react";

function InputBox({
    label,
    currencyOptions = [],
    selectCurrency = 'usd',
    amount,
    onAmountChange,
    onCurrencyChange,
    amountDisable = false,
    currencyDisabled = false,
    className = ''
}) {
  const amountInputId = useId();
    return (<>
        <div className={`flex relative focus-within:shadow-lg p-2 py-8 border border-solid border-slate-200 rounded-md items-center gap-2 ${className}`}>
            <div className="flex flex-col flex-1 py-2 h-8">
              <label htmlFor={amountInputId} className="absolute top-2 text-xs text-slate-400" >
                {label}
              </label>
              <input 
              type="number" 
              id={amountInputId} 
              className="outline-none" 
              placeholder="Currency Amount" 
              value={amount}
              onChange={e => onAmountChange && onAmountChange(e.target.value)}
              disabled={amountDisable}/>
            </div>
            <select 
            className="w-20 h-8"
            value={selectCurrency}
            onChange={e => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisabled}>
              {
                currencyOptions.map(cur => (
                    <option key={cur} value={cur}>{cur.toUpperCase()}</option>
                ))
              }
            </select>
          </div>
    </>);
}

export default InputBox;