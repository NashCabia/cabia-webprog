import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { authStorage } from '../../utils/authStorage';

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const result = authStorage.loginUser(email, password);
      if (result.success) {
        navigate("/dashboard");
      } else {
        setError(result.error);
      }
    }, 1000);
  };

  return (
    <div className="page">
      <section className="section-card auth-card">
        <p className="eyebrow">Account</p>
        <h1 className="page-title">Sign In</h1>
        <p className="page-description">
          Access your account using a simple form layout.
        </p>

        <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-field">
            <label className="form-label" htmlFor="signin-email">Email Address</label>
            <input
              id="signin-email"
              type="email"
              placeholder="example@email.com"
              className="form-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="signin-password">Password</label>
            <input
              id="signin-password"
              type="password"
              placeholder="Enter password"
              className="form-input"
              value={password}
              onChange={e => setPassword(e.target.value)}
              disabled={loading}
            />
            <p className="form-helper">It must be a combination of letters, numbers, and symbols.</p>
          </div>

          {error && <div className="form-error" style={{ color: '#e53935', marginBottom: 8 }}>{error}</div>}

          <div className="auth-actions">
            <Button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Log In'}</Button>
            <Button type="button" variant="secondary" disabled={loading}>Forgot Password?</Button>
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
