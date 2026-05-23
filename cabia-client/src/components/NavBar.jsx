import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const load = () => {
      try {
        const u = localStorage.getItem('user');
        setUser(u ? JSON.parse(u) : null);
      } catch (e) {
        setUser(null);
      }
    };

    load();

    const handler = () => load();
    window.addEventListener('authChange', handler);
    window.addEventListener('storage', handler);

    return () => {
      window.removeEventListener('authChange', handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  const isActive = (path) => {
    if (path === '/articles') return location.pathname.startsWith('/articles');
    if (path === '/auth/signin') return location.pathname.startsWith('/auth');
    return location.pathname === path;
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    localStorage.removeItem('type');
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('authChange'));
    navigate('/');
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

          {user ? (
            <>
              <Link
                className={isActive('/dashboard') ? 'nav-link active' : 'nav-link'}
                to="/dashboard"
              >
                Hi, {user.firstName || user.name || (user.email ? user.email.split('@')[0] : 'User')}
              </Link>
              <button className="nav-link" onClick={handleLogout} style={{background:'none',border:'none',cursor:'pointer'}}>
                Logout
              </button>
            </>
          ) : (
            <Link
              className={isActive('/auth/signin') ? 'nav-link active' : 'nav-link'}
              to="/auth/signin"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
