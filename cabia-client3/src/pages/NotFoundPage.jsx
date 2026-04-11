import Button from '../components/Button';

function NotFoundPage() {
  return (
    <div className="page">
      <section className="notfound-box">
        <div className="notfound-code">404</div>
        <h1 className="page-title">Page Not Found</h1>
        <p className="page-description">
          The page you are trying to access does not exist or the link may be broken.
        </p>
        <div className="button-row">
          <Button to="/">Go Home</Button>
          <Button to="/articles" className="secondary-btn">
            View Articles
          </Button>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;