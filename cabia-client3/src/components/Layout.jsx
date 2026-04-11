import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="site-wrapper">
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;