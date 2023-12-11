import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Card() {
    const {theme} = useContext(ThemeContext);
  return (
    <>
      <div className={`bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl ${theme ? 'dark:bg-slate-800' : '' }`}>
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            ></svg>
          </span>
        </div>
        <h3 className={`text-slate-900 mt-5 text-base font-medium tracking-tight ${theme ? 'dark:text-white' : '' }`}>
          Writes Upside-Down
        </h3>
        <p className={`text-slate-500 mt-2 text-sm ${theme ? 'dark:text-slate-400' : '' }`}>
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
      </div>
    </>
  );
}

export default Card;
