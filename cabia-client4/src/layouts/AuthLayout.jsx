import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="auth-shell">
      <aside className="auth-side">
        <div className="auth-side-content">
          <h1>Welcome to Betta Blog</h1>
          <p>
            This lab activity demonstrates routing, reusable components, and better user interface
            design using React.
          </p>
        </div>
      </aside>
      <main className="auth-panel">
        <Outlet />
      </main>
    </section>
  );
};

export default AuthLayout;
