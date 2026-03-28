import Button from '../components/Button'

const articles = [
  {
    
    title: 'Recording Session',
    text: 'Capture vocals and instruments with clear and professional sound.',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
  },
  {
    title: 'Mixing and Mastering',
    text: 'Enhance your track for streaming platforms like Spotify.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
  },
  {
    title: 'Music Production',
    text: 'Create beats and full compositions with professional tools.',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
  },
  
]

const ArticlePage = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
          Services
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Studio services for every artist
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          EchoVerse Studio provides music production services designed to help
          artists create, refine, and release their work with confidence.
        </p>

        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section>
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
            Featured Services
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            What artists can book
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {article.text}
                </p>
                <Button className="mt-5" variant="secondary">
                  Book Now
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ArticlePage