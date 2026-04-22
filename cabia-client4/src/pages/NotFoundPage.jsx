import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <section className="not-found">
      <div className="not-found-box">
        <h1>404 - Page Not Found</h1>
        <p className="subtext" style={{ marginTop: '0.8rem', marginBottom: '1.2rem' }}>
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link to="/"><Button>Back to Home</Button></Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
