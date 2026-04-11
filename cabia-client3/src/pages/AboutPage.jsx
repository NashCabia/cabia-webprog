import Button from '../components/Button';

function AboutPage() {
  return (
    <div className="page">
      <section className="section-card">
        <p className="eyebrow">About</p>
        <h1 className="page-title">About This Project</h1>
        <p className="page-description">
          This website was built using React and React Router. It shows how
          components can be reused to create a clean and organized project
          structure.
        </p>
        <p className="page-description">
          The application includes navigation, an article list, dynamic article
          pages, and a fallback page for invalid routes.
        </p>

        <div className="button-row">
          <Button to="/articles">Go to Articles</Button>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;