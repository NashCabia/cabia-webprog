import Button from '../../components/Button';

const AboutPage = () => {
  return (
    <div className="page">
      <section className="section-card">
        <p className="eyebrow">About</p>
        <h1 className="page-title">About This Project</h1>
        <p className="page-description">
          Betta Blog is a small article site focused on beginner-friendly betta fish care. The goal is to make the basics easy to understand — from tank setup and feeding to spotting common health issues.
        </p>
        <p className="page-description">
          Each article is organized into short sections with images so you can skim quickly and still get practical, helpful tips.
        </p>

        <div className="button-row">
          <Button to="/articles">Go to Articles</Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
