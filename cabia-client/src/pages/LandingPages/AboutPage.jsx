
import Button from '../../components/Button';
import betta4 from '../../images/betta4.jpg';

const AboutPage = () => {
  return (
    <div className="page">
      <section className="section-card">
        <p className="eyebrow">About</p>
        <h1 className="page-title">About This Project</h1>
        <p className="page-description">
          Betta Blog is a small article site focused on beginner-friendly betta fish care. The goal is to make the basics easy to understand  from tank setup and feeding to spotting common health issues.
        </p>
        <p className="page-description">
          Each article is organized into short sections with images so you can skim quickly and still get practical, helpful tips.
        </p>
        <p className="page-description">
          <b>Features:</b>
          <ul style={{ margin: '0.5em 0 1.5em 1.5em' }}>
            <li>Beginner-friendly guides for betta fish care</li>
            <li>Step-by-step tank setup and feeding tips</li>
            <li>Common mistakes and how to avoid them</li>
            <li>Photo-rich articles for easy learning</li>
            <li>Modern, responsive design with dark mode</li>
          </ul>
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', margin: '2rem 0' }}>
          <img src={betta4} alt="Betta fish in a planted tank" style={{ width: 180, borderRadius: 14, boxShadow: '0 2px 8px #0003' }} />
          <div>
            <p style={{ margin: 0 }}><b>Why Betta Blog?</b></p>
            <p style={{ margin: 0 }}>We noticed that many new fish keepers struggle to find clear, concise, and visually helpful information. Betta Blog was created to fill that gap with practical, easy-to-read articles and real photos.</p>
          </div>
        </div>
        <p className="page-description">
          <b>Who made this?</b><br />
          Betta Blog is a personal project by a betta fish enthusiast and web developer, aiming to help others enjoy healthy, happy bettas.
        </p>
        <div className="button-row">
          <Button to="/articles">Go to Articles</Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
