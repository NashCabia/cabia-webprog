import { Link } from 'react-router-dom';

const ArticleList = ({ articles = [] }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <article key={article.id} className="article-card">
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <div className="row-between">
            <span>Article #{article.id}</span>
            <Link to={`/articles/${article.name}`} className="btn btn-primary">Read More</Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
