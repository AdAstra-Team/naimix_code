import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, baseColor, focusColor, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-[4px] px-[24px] py-[14px]
                  ${baseColor}
                  focus:${focusColor}
                  transition-all duration-200`}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  baseColor: PropTypes.string.isRequired,
  focusColor: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
