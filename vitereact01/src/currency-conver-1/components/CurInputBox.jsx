import { useId } from "react";

function CurInputBox({
    label = "From",
    curAmount,
    setCurAmount,
    selectCur = 'usd',
    setSelectCurrency,
    currencyOptions = [],
    isInputDisabled = false,
    isSelectDisabled = false
}) {

  const id = useId();
  return (
    <>
      <div
        className={`flex relative focus-within:shadow-lg p-2 py-8 border border-solid border-slate-200 rounded-md items-center gap-2 ${"className"}`}
      >
        <div className="flex flex-col flex-1 py-2 h-8">
          <label
            htmlFor={id}
            className="absolute top-2 text-xs text-slate-400"
          >
            {label}
          </label>
          <input
            type="number"
            id={id}
            className="outline-none"
            placeholder="Currency Amount"
            value={curAmount}
            onChange={ e => setCurAmount(Number(e.target.value))}
            disabled={isInputDisabled}
          />
        </div>
        <select 
        className="w-20 h-8" 
        value={selectCur}
        onChange={ e => setSelectCurrency(e.target.value)}
        disabled={isSelectDisabled}>
            {
              currencyOptions.map(currency => (
                <option key={currency} value={currency}>{currency.toUpperCase()}</option>
              ))
            }
        </select>
      </div>
    </>
  );
}

export default CurInputBox;
