import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="site-header">
      <div className="page-shell navbar">
        <Link to="/" className="brand">Betta Blog</Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/articles" className="nav-link">Articles</Link>
          <Link to="/auth/signin" className="nav-link nav-cta">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
