import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">BETTA BLOG</div>

        <nav className="nav-links">
          <Link className={isActive('/') ? 'nav-link active' : 'nav-link'} to="/">
            Home
          </Link>
          <Link className={isActive('/about') ? 'nav-link active' : 'nav-link'} to="/about">
            About
          </Link>
          <Link
            className={isActive('/articles') ? 'nav-link active' : 'nav-link'}
            to="/articles"
          >
            Articles
          </Link>
          <Link
            className={isActive('/signin') ? 'nav-link active' : 'nav-link'}
            to="/signin"
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;