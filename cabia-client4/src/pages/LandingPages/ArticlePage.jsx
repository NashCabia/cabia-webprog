import { Link, useParams } from 'react-router-dom';
import { articles } from '../../assets/article-content';
import Button from '../../components/Button';

const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find((item) => item.name === name);

  if (!article) {
    return (
      <section className="article-single">
        <h1>Article not found</h1>
        <p style={{ marginTop: '0.7rem', marginBottom: '1rem', color: '#6b7280' }}>
          The requested article does not exist in the sample content.
        </p>
        <Link to="/articles"><Button>Back to Articles</Button></Link>
      </section>
    );
  }

  return (
    <section className="article-single">
      <div className="page-heading">
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>
      </div>

      {article.content.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <div style={{ marginTop: '1.25rem' }}>
        <Link to="/articles"><Button variant="secondary">Back to Articles</Button></Link>
      </div>
    </section>
  );
};

export default ArticlePage;
