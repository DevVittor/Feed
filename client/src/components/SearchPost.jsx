import { IoIosSearch } from "react-icons/io";
import { ListCategory } from "./ListCategory";
import { useState } from "react";
import { TbCategoryFilled } from "react-icons/tb";
export function SearchPost() {
  const [modalCagegory, setModalCategory] = useState(false);

  function activeModal() {
    setModalCategory(!modalCagegory);
  }

  return (
    <div className="w-full flex items-center h-full ">
      <button
        className="h-[40px] px-4 bg-zinc-700 text-zinc-100 text-lg rounded-l-md flex items-center justify-center md:hidden"
        onClick={activeModal}
        title="Category"
      >
        <TbCategoryFilled />
      </button>
      {modalCagegory && (
        <div className="p-3 bg-black/90 backdrop-blur-md z-20 fixed bottom-0 left-0 right-0 flex justify-center items-center flex-col gap-2">
          <ListCategory />
          <button
            className="px-3 py-1 rounded-md bg-red-500 text-zinc-100 font-medium md:w-auto w-full"
            onClick={activeModal}
          >
            Close
          </button>
        </div>
      )}
      <input
        className="h-[40px] px-3 text-lg font-medium bg-zinc-800 text-zinc-100 w-full md:rounded-l-md rounded-none outline-none"
        type="text"
        placeholder="Search Post"
      />
      <button
        className="h-[40px] px-4 bg-zinc-700 text-zinc-100 text-lg rounded-r-md flex items-center justify-center"
        type="submit"
      >
        <IoIosSearch />
      </button>
    </div>
  );
}
