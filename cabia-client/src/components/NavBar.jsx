import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/articles') return location.pathname.startsWith('/articles');
    if (path === '/auth/signin') return location.pathname.startsWith('/auth');
    return location.pathname === path;
  };

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
          <Link className={isActive('/articles') ? 'nav-link active' : 'nav-link'} to="/articles">
            Articles
          </Link>
          <Link
            className={isActive('/auth/signin') ? 'nav-link active' : 'nav-link'}
            to="/auth/signin"
          >
            Sign In
          </Link>
          <Link
            className={location.pathname === '/auth/signup' ? 'nav-link active' : 'nav-link'}
            to="/auth/signup"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
