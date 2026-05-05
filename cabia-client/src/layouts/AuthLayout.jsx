import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <section className="auth-shell">
      <aside className="auth-side">
        <div className="auth-side-content">
          
        </div>
      </aside>
      <main className="auth-panel">
        <Outlet />
      </main>
    </section>
  );
};

export default AuthLayout;
