import Button from '../components/Button';
import ArticleList from '../components/ArticleList';
import articles from '../assets/article-content';

const ArticleListPage = () => {
  return (
    <div className="page">
      <section className="section-card">
        <p className="eyebrow">Articles</p>
        <h1 className="page-title">Featured articles in a simple card grid</h1>
        <p className="page-description">
          A clean article section for article thumbnails, titles, short
          descriptions, and one clear action per card.
        </p>

        <div className="button-row">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="section-card">
        <div className="section-header">
          <p className="eyebrow">Featured Articles</p>
          <h2 className="section-title">Article card grid</h2>
        </div>

        <ArticleList articles={articles} />
      </section>
    </div>
  );
};

export default ArticleListPage;