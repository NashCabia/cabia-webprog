import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <div className="page-shell">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
