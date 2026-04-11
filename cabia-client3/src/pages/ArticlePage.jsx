import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import articles from '../assets/article-content';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);

  if (!article) {
    return (
      <div className="page">
        <section className="section-card centered-card">
          <h1 className="page-title">Article not found</h1>
          <div className="button-row">
            <Button to="/articles">Back to Articles</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="section-card">
        <div className="button-row">
          <Button to="/articles">← Back to Articles</Button>
        </div>

        <p className="eyebrow">Article</p>
        <h1 className="page-title">{article.title}</h1>
        <p className="slug-text">{article.name.split('-').join(' ')}</p>
      </section>

      <section className="section-card article-content-box">
        <div className="article-hero-image">
          <div className="image-placeholder large" />
        </div>

        <div className="article-full-content">
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="button-row top-space">
          <Button to="/articles">Back to Articles</Button>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;