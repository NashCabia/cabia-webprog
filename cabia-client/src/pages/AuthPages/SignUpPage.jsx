import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../../services/userService";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const splitName = (fullName) => {
    const parts = fullName.trim().split(" ");
    const firstName = parts[0] || "";
    const lastName = parts.slice(1).join(" ") || "User";

    return { firstName, lastName };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    const { firstName, lastName } = splitName(name);

    const payload = {
      firstName,
      lastName,
      age: "18",
      gender: "other",
      contactNumber: "00000000000",
      email: email.trim().toLowerCase(),
      type: "editor",
      username: email.split("@")[0].toLowerCase(),
      password,
      address: "N/A",
      isActive: true,
    };

    try {
      setLoading(true);

      await createUser(payload);

      setSuccess("Account created! You can now sign in.");
      setName("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/auth/signin");
      }, 1000);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to create account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <section className="section-card auth-card">
        <p className="eyebrow">Account</p>
        <h1 className="page-title">Sign Up</h1>
        <p className="page-description">
          Create an account to access the site.
        </p>

        <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-field">
            <label className="form-label" htmlFor="signup-name">
              Full Name
            </label>
            <input
              id="signup-name"
              type="text"
              placeholder="Name (e.g. John Doe)"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="signup-email">
              Email
            </label>
            <input
              id="signup-email"
              type="email"
              placeholder="example@email.com"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="signup-password">
              Password
            </label>
            <input
              id="signup-password"
              type="password"
              placeholder="Create password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
            <p className="form-helper">
              Use a secure password with letters, numbers, and symbols.
            </p>
          </div>

          {error && (
            <div
              className="form-error"
              style={{ color: "#e53935", marginBottom: 8 }}
            >
              {error}
            </div>
          )}

          {success && (
            <div
              className="form-success"
              style={{ color: "#43a047", marginBottom: 8 }}
            >
              {success}
            </div>
          )}

          <div className="auth-actions">
            <Button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Account"}
            </Button>

            <Button to="/auth/signin" variant="secondary" disabled={loading}>
              Back to Sign In
            </Button>
          </div>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link className="auth-link" to="/auth/signin">
            Log In
          </Link>
        </p>
      </section>
    </div>
  );
};

export default SignUpPage;