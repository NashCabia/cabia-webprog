import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const SignInPage = () => {
  return (
    <section className="auth-card">
      <h2>Log In</h2>
      <p className="subtext">Access your account using the same clean layout and reusable components.</p>

      <form className="form-grid">
        <div className="form-group">
          <label htmlFor="signin-email">Email Address</label>
          <input id="signin-email" type="email" placeholder="example@email.com" className="input" />
        </div>

        <div className="form-group">
          <label htmlFor="signin-password">Password</label>
          <input id="signin-password" type="password" placeholder="Enter password" className="input" />
          <p className="helper">It must be a combination of letters, numbers, and symbols.</p>
        </div>

        <div className="row-between">
          <label className="remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>

          <button type="button" style={{ background: 'none', border: 'none', color: '#1d4ed8', fontWeight: 700, cursor: 'pointer' }}>
            Forgot Password?
          </button>
        </div>

        <Button type="submit">Log In</Button>

        <div className="alt-buttons">
          <Button type="button" variant="secondary">Login with Google</Button>
          <Button type="button" variant="secondary">Login with Apple</Button>
        </div>
      </form>

      <p className="center-text" style={{ marginTop: '1rem' }}>
        No account yet? <Link to="/auth/signup">Sign Up</Link>
      </p>
    </section>
  );
};

export default SignInPage;
