import Button from '../components/Button'

const HomePage = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
      <section className="grid items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
            Welcome to Echo
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight text-white md:text-5xl">
            Feel the Music. Shape the Sound.
          </h1>

          <p className="mt-4 text-base leading-7 text-white/70">
            Echo is a modern music studio inspired by the smooth and immersive
            feel of platforms like Spotify and Apple Music. It is built for
            artists who want their music to sound clear, expressive, and
            professional.
          </p>

          <p className="mt-4 text-base leading-7 text-white/70">
            From recording vocals to mixing and mastering tracks, Echo provides
            a creative environment where musical ideas can grow into polished
            productions.
          </p>

          <div className="mt-6 flex gap-3">
            <Button to="/about">Learn More</Button>
            <Button to="/articles" variant="secondary">
              View Services
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80"
            alt="Music studio setup"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-bold text-white">Recording</h3>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Professional vocal and instrument recording sessions with clean,
            high-quality sound capture.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-bold text-white">Mixing</h3>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Balanced and polished audio that enhances every layer of the music.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-bold text-white">Mastering</h3>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Final sound enhancement for streaming-ready release on digital
            platforms.
          </p>
        </div>
      </section>
    </div>
  )
}

export default HomePage