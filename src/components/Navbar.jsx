import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;
