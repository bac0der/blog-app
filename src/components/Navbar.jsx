import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className=""></h1>
      <div className="nav-link-container">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/blog">Blog</Link>
        <Link className="nav-link" to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
