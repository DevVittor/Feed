import PropTypes from "prop-types";
import { useState } from "react";
import { BsSendCheckFill } from "react-icons/bs";
import { Proposal } from "./Proposal";

export function CardPost(props) {
  const [proposal, setProposal] = useState(false);

  function modalProposal() {
    setProposal(!proposal);
  }

  return (
    <div className="flex flex-col gap-2 h-auto md:w-[600px] w-full rounded-md bg-zinc-900 border-none p-3">
      <div className="flex md:justify-between justify-center items-center flex-wrap gap-2">
        <ol className="flex items-center md:justify-start justify-center flex-wrap gap-2">
          {props.skills.map((skill, index) => (
            <li
              key={index}
              className="text-zinc-300 text-sm px-2 py-1 border border-zinc-700 rounded-sm bg-transparent hover:bg-zinc-700 transition-colors ease-linear duration-100 font-medium hover:cursor-pointer hover:shadow-sm"
            >
              {skill}
            </li>
          ))}
        </ol>
        <button className="px-3 py-1 rounded-sm text-sm border-none bg-zinc-800 text-zinc-100 font-medium">
          134 | Proposals
        </button>
      </div>
      <div className="flex-grow w-full">
        <h2
          className="text-3xl font-bold text-zinc-100 text-pretty"
          title={props.title}
        >
          {props.title}
        </h2>
      </div>
      <div className="">
        <p className="leading-5 font-light text-pretty">{props.description}</p>
      </div>
      <div className="flex items-center justify-between">
        <ol className="flex items-center gap-1 bg-zinc-800 text-zinc-100 px-3 py-1 rounded-sm font-medium">
          <li>R$ 350</li>
          <li>-</li>
          <li>R$ 500</li>
        </ol>
        <button
          className="px-3 py-1 rounded-md bg-zinc-800 text-zinc-100 font-medium flex items-center gap-1.5"
          onClick={modalProposal}
        >
          <BsSendCheckFill />
          Send
        </button>
        {proposal && <Proposal setProposal={setProposal} />}
      </div>
    </div>
  );
}
CardPost.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  description: PropTypes,
  photo: PropTypes.string,
};
