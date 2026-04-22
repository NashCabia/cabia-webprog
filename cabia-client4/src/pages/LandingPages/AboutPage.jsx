const AboutPage = () => {
  return (
    <section>
      <div className="page-heading">
        <h1>About This Project</h1>
        <p>
          This project is a sample React application for Lab Activity 4. It focuses on navigation,
          route handling, component reusability, and improved design for authentication pages.
        </p>
      </div>

      <div className="grid-3">
        <article className="card">
          <h3>Purpose</h3>
          <p>To practice creating multiple pages inside one React app using routing.</p>
        </article>
        <article className="card">
          <h3>Approach</h3>
          <p>Reusable components and layouts are used to make the structure more organized.</p>
        </article>
        <article className="card">
          <h3>Outcome</h3>
          <p>The final result is cleaner, easier to maintain, and more visually appealing.</p>
        </article>
      </div>
    </section>
  );
};

export default AboutPage;
