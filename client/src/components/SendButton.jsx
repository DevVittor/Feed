import { BsSendArrowUpFill } from "react-icons/bs";
export function SendButton() {
  return (
    <div className="">
      <button className="flex items-center gap-1.5 text-zinc-100 font-medium text-sm hover:bg-blue-500 bg-zinc-700 transition-colors ease-linear duration-100 px-3 py-1 rounded-md">
        <BsSendArrowUpFill />
        Send
      </button>
    </div>
  );
}
