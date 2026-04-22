import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="page">
      <section className="section-card auth-card">
        <p className="eyebrow">Account</p>
        <h1 className="page-title">Sign Up</h1>
        <p className="page-description">
          Create an account to access the site.
        </p>

        <form className="auth-form">
          <div className="form-field">
            <label className="form-label" htmlFor="signup-name">Full Name</label>
            <input id="signup-name" type="text" placeholder="Nash Cabia" className="form-input" />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="signup-email">Email</label>
            <input id="signup-email" type="email" placeholder="example@email.com" className="form-input" />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="signup-password">Password</label>
            <input id="signup-password" type="password" placeholder="Create password" className="form-input" />
            <p className="form-helper">Use a secure password with letters, numbers, and symbols.</p>
          </div>

          <div className="auth-actions">
            <Button type="submit">Create Account</Button>
            <Button to="/auth/signin" variant="secondary">Back to Sign In</Button>
          </div>
        </form>

        <p className="auth-switch">
          Already have an account?{' '}
          <Link className="auth-link" to="/auth/signin">Log In</Link>
        </p>
      </section>
    </div>
  );
};

export default SignUpPage;
