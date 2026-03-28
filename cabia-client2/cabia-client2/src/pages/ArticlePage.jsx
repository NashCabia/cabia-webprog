import Button from '../components/Button'

const articles = [
  {
    title: 'Recording Sessions',
    text: 'Capture vocals and instruments with studio-quality clarity in a creative recording environment.',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Mixing and Mastering',
    text: 'Improve balance, depth, and final loudness so tracks sound polished and ready for streaming.',
    image:
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Music Production',
    text: 'Develop instrumentals, arrangements, and overall musical direction with professional support.',
    image:
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80',
  },
]

const ArticlePage = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
          Articles
        </p>

        <h1 className="mt-3 text-4xl font-bold text-white">
          Studio highlights and services
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
          This page presents selected studio services in a card layout with
          supporting images and content write-ups. It keeps the original
          article-style structure while expanding the content into a music
          studio theme.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.title}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{article.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {article.text}
              </p>
              <Button className="mt-5" variant="secondary">
                Read More
              </Button>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default ArticlePage