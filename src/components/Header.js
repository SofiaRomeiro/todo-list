import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1> {title} </h1>
      <h4> {getCurrentDate()} </h4>
    </header>
  );
};

Header.defaultProps = {
  title: "TODO List"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export function getCurrentDate() {
  let newDate = new Date();
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${day}-${month < 10 ? `0${month}` : `${month}`}-${year}`;
}

export default Header;
