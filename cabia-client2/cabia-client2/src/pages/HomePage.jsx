import Button from '../components/Button'

const HomePage = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
      <section className="grid items-center gap-8 rounded-3xl bg-white/5 backdrop-blur-md p-8 shadow-sm md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
            Music Studio
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
  Feel the Sound with Echo
</h1>

<p className="mt-4 text-base leading-7 text-white/70">
  Echo is a modern music studio inspired by the immersive experience of
  streaming platforms like Spotify and Apple Music. We help artists
  record, mix, and produce high-quality sound.
</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/about">Discover More</Button>
            <Button to="/articles" variant="secondary">
              View Services
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-md">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80"
            alt="Music studio"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { number: '120+', label: 'Tracks Produced' },
          { number: '50+', label: 'Artists Served' },
          { number: '10', label: 'Studio Rooms' },
          { number: '24/7', label: 'Creative Energy' },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 shadow-sm"
          >
            <p className="text-3xl font-bold text-red-500">{item.number}</p>
            <p className="mt-2 text-sm font-medium text-slate-600">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      <section>
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
            Featured Services
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            What we offer
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Recording Sessions',
              text: 'Capture vocals and instruments with clear, professional studio-quality sound.',
              image:
                'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80',
            },
            {
              title: 'Mixing and Mastering',
              text: 'Balance every element of your track and prepare it for streaming platforms.',
              image:
                'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&w=800&q=80',
            },
            {
              title: 'Music Production',
              text: 'Develop beats, melodies, and arrangements that bring your creative vision to life.',
              image:
                'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80',
            },
          ].map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-sm"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {card.text}
                </p>
                <Button className="mt-5">Explore</Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage