import Button from '../components/Button';

function HomePage() {
  return (
    <div className="page">
      <section className="hero-section">
        <p className="eyebrow">Welcome</p>
        <h1 className="page-title">React Article Website</h1>
        <p className="page-description">
          This project demonstrates reusable components, routing, dynamic article
          pages, and a custom not found page.
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
}

export default HomePage;