import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import articles from '../../assets/article-content';

const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find((item) => item.name === name);

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
          {article.heroImage ? (
            <img
              className="article-image"
              src={article.heroImage}
              alt={article.heroAlt ?? `${article.title} image`}
              loading="lazy"
            />
          ) : (
            <div className="image-placeholder large" />
          )}
        </div>

        <div className="article-full-content">
          {article.content.map((block, index) => {
            if (typeof block === 'string') {
              return <p key={index}>{block}</p>;
            }

            if (block?.type === 'image' && block.src) {
              return (
                <figure key={index} className="article-media">
                  <img className="article-image" src={block.src} alt={block.alt ?? ''} loading="lazy" />
                  {block.caption ? (
                    <figcaption className="article-caption">{block.caption}</figcaption>
                  ) : null}
                </figure>
              );
            }

            return null;
          })}
        </div>

        <div className="button-row top-space">
          <Button to="/articles">Back to Articles</Button>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
