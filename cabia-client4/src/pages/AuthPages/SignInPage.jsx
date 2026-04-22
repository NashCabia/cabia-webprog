import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <div className="page">
      <section className="section-card auth-card">
        <p className="eyebrow">Account</p>
        <h1 className="page-title">Sign In</h1>
        <p className="page-description">
          Access your account using a simple form layout.
        </p>

        <form className="auth-form">
          <div className="form-field">
            <label className="form-label" htmlFor="signin-email">Email Address</label>
            <input id="signin-email" type="email" placeholder="example@email.com" className="form-input" />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="signin-password">Password</label>
            <input id="signin-password" type="password" placeholder="Enter password" className="form-input" />
            <p className="form-helper">It must be a combination of letters, numbers, and symbols.</p>
          </div>

          <div className="auth-actions">
            <Button type="submit">Log In</Button>
            <Button type="button" variant="secondary">Forgot Password?</Button>
          </div>
        </form>

        <p className="auth-switch">
          No account yet?{' '}
          <Link className="auth-link" to="/auth/signup">Sign Up</Link>
        </p>
      </section>
    </div>
  );
};

export default SignInPage;
