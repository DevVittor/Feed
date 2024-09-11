import PropTypes from "prop-types";
import { useState } from "react";

export function ModalPriceMinMax({ setPriceMinMax }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleConfirm = () => {
    // Aqui você pode realizar a lógica de validação e envio dos preços
    console.log({ minPrice, maxPrice });
    setPriceMinMax(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-zinc-700 p-4 rounded-md shadow-md flex flex-col gap-4 ">
        <h2 className="text-zinc-100 text-lg font-semibold">Set Price Range</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center ">
            <span className="bg-zinc-800 text-zinc-100 rounded-l-md px-2 border-r border-zinc-700 py-1">
              R$
            </span>
            <input
              type="number"
              className="bg-zinc-800 px-2 py-1 rounded-r-md text-zinc-100 w-full outline-none border-none"
              placeholder="Min price"
              min={30}
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <span>-</span>
          <div className="flex items-center">
            <span className="bg-zinc-800 text-zinc-100 rounded-l-md px-2 border-r border-zinc-700 py-1">
              R$
            </span>
            <input
              type="number"
              className="bg-zinc-800 px-2 py-1 rounded-r-md text-zinc-100 w-full outline-none border-none"
              placeholder="Max price"
              min={35}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="px-3 py-1 bg-red-600 rounded-md text-zinc-100"
            onClick={() => setPriceMinMax(false)}
          >
            Cancel
          </button>
          <button
            className="px-3 py-1 bg-green-600 rounded-md text-zinc-100"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

ModalPriceMinMax.propTypes = {
  setPriceMinMax: PropTypes.func.isRequired,
};
