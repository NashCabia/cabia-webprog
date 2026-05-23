  import { Link } from "react-router-dom";
  import Button from "./Button";

  const ArticleList = ({ articles = [] }) => {
    if (!Array.isArray(articles) || articles.length === 0) {
      return <div className="article-grid empty">No articles available.</div>;
    }

    return (
      <div className="article-grid">
        {articles.map((article, index) => {
          const key = article?.id || article?._id || index;
          const title = article?.title || "Untitled";
          const image = article?.image || null;
          const desc = article?.description || "";
          const slug = article?.name || article?.slug || article?.id || article?._id || index;

          return (
            <article key={key} className="article-card">
              <div className="article-card-image">
                {image ? (
                  <img
                    className="article-image"
                    src={image}
                    alt={title}
                    loading="lazy"
                  />
                ) : (
                  <div className="image-placeholder" />
                )}
              </div>

              <p className="article-number">Article {String(index + 1).padStart(2, "0")}</p>

              <h3 className="article-title">{title}</h3>

              <p className="article-preview">{(desc || "").substring(0, 120)}{desc?.length > 120 ? "..." : ""}</p>

              <Link to={`/articles/${slug}`}>
                <Button className="read-more-btn">Read More</Button>
              </Link>
            </article>
          );
        })}
      </div>
    );
  };

  export default ArticleList;