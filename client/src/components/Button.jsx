import PropTypes from "prop-types";
export function Button({ className, children }) {
  return <button className={className}>{children}</button>;
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
