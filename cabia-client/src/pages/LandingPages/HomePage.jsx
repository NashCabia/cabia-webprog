
import Button from '../../components/Button';
import betta1 from '../../images/betta1.webp';
import betta2 from '../../images/betta2.jpg';
import betta3 from '../../images/betta3.jpg';

const HomePage = () => {
  return (
    <div className="page">
      <section className="hero-section">
        <p className="eyebrow">Welcome</p>
        <h1 className="page-title">Betta Blog</h1>
        <p className="page-description">
          Learn the basics of betta fish care  tank setup, feeding checks, and common mistakes  with short, beginner-friendly articles.
        </p>

        <div className="home-images" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', margin: '2rem 0' }}>
          <img src={betta1} alt="Colorful betta fish" style={{ width: 120, borderRadius: 12, boxShadow: '0 2px 8px #0003' }} />
          <img src={betta2} alt="Betta in a tank" style={{ width: 120, borderRadius: 12, boxShadow: '0 2px 8px #0003' }} />
          <img src={betta3} alt="Closeup betta fish" style={{ width: 120, borderRadius: 12, boxShadow: '0 2px 8px #0003' }} />
        </div>

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
