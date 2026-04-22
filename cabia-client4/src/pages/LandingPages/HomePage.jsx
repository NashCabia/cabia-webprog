import Button from '../../components/Button';

const HomePage = () => {
  return (
    <div className="page">
      <section className="hero-section">
        <p className="eyebrow">Welcome</p>
        <h1 className="page-title">Betta Blog</h1>
        <p className="page-description">
          Learn the basics of betta fish care — tank setup, feeding checks, and common mistakes — with short, beginner-friendly articles.
        </p>

        <div className="button-row">
          <Button to="/articles">Browse Articles</Button>
          <Button to="/about" className="secondary-btn">
            Learn More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
