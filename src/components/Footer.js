import { Link } from "react-router-dom";

const Footer = () => {
  const signature = "Made by Sofia Romeiro";

  return (
    <footer>
      <p>{signature}</p>
      <Link to="https://github.com/SofiaRomeiro">GitHub</Link>
    </footer>
  );
};

export default Footer;
