import { Link } from 'react-router-dom';
import Button from './Button';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-grid">
      {articles.map((article, index) => (
        <article key={article.name} className="article-card">
          <div className="article-card-image">
            {article.thumbnail ? (
              <img
                className="article-image"
                src={article.thumbnail}
                alt={article.thumbnailAlt ?? `${article.title} thumbnail`}
                loading="lazy"
              />
            ) : (
              <div className="image-placeholder" />
            )}
          </div>

          <p className="article-number">Article {String(index + 1).padStart(2, '0')}</p>
          <h3 className="article-title">{article.title}</h3>
          <p className="article-preview">{article.content[0].substring(0, 120)}...</p>

          <Link to={`/articles/${article.name}`}>
            <Button className="read-more-btn">Read More</Button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
