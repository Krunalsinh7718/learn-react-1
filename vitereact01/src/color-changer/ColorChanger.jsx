import { useState } from "react";

function ColorChanger() {
  const [bgColor, setBgColor] = useState("olive");
  return (
    <>
      <div className="min-h-screen" style={{ backgroundColor: bgColor }}>
        <div className="fixed bottom-10 left-0 right-0 flex p-4 m-auto max-w-xl bg-gray-200 rounded-md flex gap-4">
          <button
            type="button"
            class="rounded-md px-3 py-2 text-sm font-semibold text-dark shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            style={{backgroundColor: "yellow"}}
            onClick={() => setBgColor("yellow")}
          >
            yellow
          </button>
          <button
            type="button"
            class="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            style={{backgroundColor: "green"}}
            onClick={() => setBgColor("green")}
          >
            green
          </button>
          <button
            type="button"
            class="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            style={{backgroundColor: "blue"}}
            onClick={() => setBgColor("blue")}
          >
            blue
          </button>
          <button
            type="button"
            class="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            style={{backgroundColor: "red"}}
            onClick={() => setBgColor("red")}
          >
            red
          </button>
          <button
            type="button"
            class="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            style={{backgroundColor: "orange"}}
            onClick={() => setBgColor("orange")}
          >
            red
          </button>
        </div>
      </div>
    </>
  );
}

export default ColorChanger;
