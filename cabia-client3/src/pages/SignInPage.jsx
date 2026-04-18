import { Link } from 'react-router-dom';

function SignInPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="page">
      <section className="section-card auth-card">
        <p className="eyebrow">Account</p>
        <h1 className="page-title">Sign in</h1>
        <p className="page-description">
          Welcome back. Sign in to continue reading and managing your saved articles.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Your password"
              required
              minLength={6}
            />
            <p className="form-helper">Use at least 6 characters.</p>
          </div>

          <div className="auth-actions">
            <button className="btn" type="submit">
              Sign In
            </button>
            <Link className="btn secondary-btn" to="/articles">
              Continue as guest
            </Link>
          </div>
        </form>

        <p className="auth-switch">
          New here?{' '}
          <Link className="auth-link" to="/signup">
            Create an account
          </Link>
        </p>
      </section>
    </div>
  );
}

export default SignInPage;
