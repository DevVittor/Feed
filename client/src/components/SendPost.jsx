import { SendButton } from "./SendButton";
import { useState } from "react";
import { ModalPriceMinMax } from "./ModalPriceMinMax";
export function SendPost() {
  const [priceMinMax, setPriceMinMax] = useState(false);

  function modalPriceMinMax() {
    setPriceMinMax(!priceMinMax);
  }

  return (
    <div className="flex flex-col w-full">
      <div className="bg-zinc-900 w-full max-h-[400px] p-2 rounded-lg flex flex-col gap-2">
        <textarea
          className="px-3 py-1 rounded-md min-h-min bg-zinc-800 resize-none outline-none text-3xl font-bold text-zinc-100"
          name=""
          id=""
          maxLength={70}
          placeholder="What are you needing?"
        ></textarea>
        <textarea
          className="px-3 py-1 rounded-md nax-h-[250px] h-[110px] bg-zinc-800 resize-none outline-none leading-5 font-light text-zinc-100"
          name=""
          id=""
          maxLength={350}
          placeholder="Tell me more details about your project"
        ></textarea>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 bg-zinc-700 rounded-md">Skills</button>
            <button
              className="px-3 py-1 bg-zinc-700 rounded-md"
              onClick={modalPriceMinMax}
            >
              Price
            </button>
            {priceMinMax && (
              <ModalPriceMinMax setPriceMinMax={setPriceMinMax} />
            )}
          </div>
          <SendButton />
        </div>
      </div>
    </div>
  );
}
