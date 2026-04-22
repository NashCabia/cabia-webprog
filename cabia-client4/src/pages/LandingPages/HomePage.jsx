import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const HomePage = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>Modern React Layout for Lab Activity 4</h1>
          <p>
            This sample project shows a component-based structure with reusable pages, layouts,
            and navigation.
          </p>
          <div className="button-row">
            <Link to="/auth/signin"><Button>Get Started</Button></Link>
            <Link to="/articles"><Button variant="secondary">Browse Articles</Button></Link>
          </div>
        </div>
        <div className="hero-card">
          <div>
            <h3 style={{ marginBottom: '0.75rem' }}>Quick Overview</h3>
            <p style={{ color: '#475569', lineHeight: 1.7 }}>
              Clean UI, proper routing, reusable components, and a polished auth design.
            </p>
          </div>
        </div>
      </section>

      <section className="grid-3">
        <article className="card">
          <h3>Reusable Components</h3>
          <p>Buttons, navigation, and article cards are separated into components for cleaner code.</p>
        </article>
        <article className="card">
          <h3>Routing Structure</h3>
          <p>The project includes home, about, articles, single article, sign in, and sign up pages.</p>
        </article>
        <article className="card">
          <h3>Improved Design</h3>
          <p>The sign in and sign up pages are enhanced with a more modern and readable layout.</p>
        </article>
      </section>
    </>
  );
};

export default HomePage;
