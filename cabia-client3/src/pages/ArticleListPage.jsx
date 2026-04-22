import Button from '../components/Button';
import ArticleList from '../components/ArticleList';
import articles from '../assets/article-content';

const ArticleListPage = () => {
  return (
    <div className="page">
      <section className="section-card">
        <p className="eyebrow">Articles</p>
        <h1 className="page-title">Betta fish guides and tips</h1>
        <p className="page-description">
          Browse quick reads on betta care: tank setup, feeding routines, and
          spotting common health issues early.
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