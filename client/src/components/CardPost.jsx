import PropTypes from "prop-types";
export function CardPost(props) {
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
        <button className="px-3 py-1 rounded-sm text-sm border-none text-zinc-800 bg-zinc-200 font-medium">
          {props.category}
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
        <p className="leading-5 font-light text-pretty">{props.details}</p>
      </div>
      <div className="flex items-center justify-start gap-2">
        <ol className="flex items-center gap-1 bg-zinc-800 text-zinc-100 px-3 py-1 rounded-sm font-medium">
          <li>R$ {props.min}</li>
          <li>-</li>
          <li>R$ {props.max}</li>
        </ol>
        <button className="flex items-center gap-1 bg-zinc-800 text-zinc-100 px-3 py-1 rounded-sm font-medium">
          134 | Proposals
        </button>
      </div>
    </div>
  );
}
CardPost.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  details: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};
