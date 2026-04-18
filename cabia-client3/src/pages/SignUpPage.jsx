import { Link } from 'react-router-dom';

function SignUpPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="page">
      <section className="section-card auth-card">
        <p className="eyebrow">Account</p>
        <h1 className="page-title">Create your account</h1>
        <p className="page-description">
          Sign up to keep track of your favorites and get back to what you were reading.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label className="form-label" htmlFor="name">
              Full name
            </label>
            <input
              className="form-input"
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              required
            />
          </div>

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
              autoComplete="new-password"
              placeholder="Create a password"
              required
              minLength={6}
            />
            <p className="form-helper">Use at least 6 characters.</p>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              className="form-input"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              placeholder="Repeat your password"
              required
              minLength={6}
            />
          </div>

          <div className="auth-actions">
            <button className="btn" type="submit">
              Create Account
            </button>
            <Link className="btn secondary-btn" to="/signin">
              I already have an account
            </Link>
          </div>
        </form>

        <p className="auth-switch">
          By creating an account, you agree to keep it friendly.
        </p>
      </section>
    </div>
  );
}

export default SignUpPage;
