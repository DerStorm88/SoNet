import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>SoNet</h1>
      <div className="links">
        <Link to="/">Home page</Link>
        <Link to="/create">New Topic</Link>
      </div>
    </nav>
  );
};

export default Navbar;
