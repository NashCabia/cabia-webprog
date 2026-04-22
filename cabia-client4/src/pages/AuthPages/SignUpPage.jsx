import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const SignUpPage = () => {
  return (
    <section className="auth-card">
      <h2>Sign Up</h2>
      <p className="subtext">Create your account using the same shared form components and improved design.</p>

      <form className="form-grid">
        <div className="form-grid two">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input id="first-name" type="text" placeholder="Nash" className="input" />
          </div>

          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input id="last-name" type="text" placeholder="Cabia" className="input" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="signup-email">Email</label>
          <input id="signup-email" type="email" placeholder="example@email.com" className="input" />
        </div>

        <div className="form-group">
          <label htmlFor="signup-password">Password</label>
          <input id="signup-password" type="password" placeholder="Create password" className="input" />
          <p className="helper">Use a secure password with letters, numbers, and symbols.</p>
        </div>

        <Button type="submit">Create Account</Button>

        <div className="alt-buttons">
          <Button type="button" variant="secondary">Sign Up with Google</Button>
          <Button type="button" variant="secondary">Sign Up with Apple</Button>
        </div>
      </form>

      <p className="center-text" style={{ marginTop: '1rem' }}>
        Already have an account? <Link to="/auth/signin">Log In</Link>
      </p>
    </section>
  );
};

export default SignUpPage;
