import { IoMdShare } from "react-icons/io";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { RiAlertFill } from "react-icons/ri";
export function LikeDeslikeShare() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <button className="px-3 py-1 rounded-md bg-transparent border border-zinc-800 hover:bg-blue-500 text-zinc-100 transition-colors ease-linear duration-100 text-sm font-medium flex items-center gap-1">
          <AiFillLike />
          Like
        </button>
        <button className="px-3 py-1 rounded-md bg-transparent border border-zinc-800 hover:bg-red-500 text-red-500 transition-colors ease-linear duration-100 hover:text-white text-sm font-medium flex items-center gap-1">
          <AiFillDislike />
          Dislike
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button className="px-3 py-1 rounded-md bg-transparent border border-zinc-800 hover:bg-zinc-800 text-zinc-100 text-sm font-medium flex items-center gap-1">
          <IoMdShare />
          Share
        </button>
        <button className="px-3 py-1 rounded-md border border-red-500 bg-red-500 text-zinc-100 transition-colors ease-linear duration-100 text-sm font-medium flex items-center gap-1">
          <RiAlertFill />
          Denúnciar
        </button>
      </div>
    </div>
  );
}
