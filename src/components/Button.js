import PropTypes from "prop-types";

const Button = ({ bcolor, tcolor, onAdd, AddOrSave }) => {
  return (
    <button
      style={{ backgroundColor: bcolor, color: tcolor }}
      onClick={onAdd}
      className="btn"
    >
      {AddOrSave ? "Close Form" : "Add Task"}
    </button>
  );
};

Button.defaultProps = {
  bcolor: "#008fb3",
  tcolor: "white",
  text: "Add new Task"
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
