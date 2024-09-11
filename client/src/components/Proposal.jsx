import PropTypes from "prop-types";
export function Proposal({ setProposal }) {
  return (
    <div className="flex justify-center items-center bg-black/30 backdrop-blur-md fixed w-full left-0 right-0 z-20 h-screen bottom-0">
      <div className="flex flex-col gap-1 p-2 rounded-md bg-zinc-900 shadow-md">
        <div className="">
          <textarea
            className="h-[200px] w-full resize-none outline-none p-2 bg-zinc-800 text-zinc-100 font-light"
            name=""
            id=""
            placeholder="Proposal Details"
          ></textarea>
        </div>
        <div className="flex justify-between items-center flex-col gap-2">
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <input
              className="px-3 py-1 rounded-sm text-zinc-100 font-medium outline-none bg-zinc-800 flex-grow"
              type="text"
              name=""
              id=""
              placeholder="Price"
            />
            <input
              className="px-3 py-1 rounded-sm text-zinc-100 font-medium outline-none bg-zinc-800 flex-grow"
              type="text"
              name=""
              id=""
              placeholder="Contact"
            />
          </div>
          <div className="flex justify-between items-center w-full gap-2">
            <button
              className="px-3 py-1 bg-red-500 font-medium text-zinc-100 rounded-sm w-auto"
              onClick={() => setProposal(false)}
            >
              Cancel
            </button>
            <button
              className="px-3 py-1 bg-blue-500 font-medium text-zinc-100 rounded-sm md:w-auto w-full"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
Proposal.propTypes = {
  setProposal: PropTypes.func.isRequired,
};
