import { articles } from '../../assets/article-content';
import ArticleList from '../../components/ArticleList';

const ArticleListPage = () => {
  return (
    <section>
      <div className="page-heading">
        <h1>Article List</h1>
        <p>Browse the sample articles below. Each article uses the same page template through a dynamic route.</p>
      </div>
      <ArticleList articles={articles} />
    </section>
  );
};

export default ArticleListPage;
