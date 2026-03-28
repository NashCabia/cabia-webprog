import Button from '../components/Button'

const AboutPage = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
      <section className="grid items-center gap-8 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl shadow-md">
          <img
            src="https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=900&q=80"
            alt="Music production"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            The story of Echo Music Studio
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Echo is a music studio focused on delivering high-quality sound
            production for artists. Inspired by modern streaming platforms,
            it provides a clean and immersive experience for music creation.
          </p>
          <p className="mt-4 text-base leading-7 text-slate-600">
            We focus on creativity, technical excellence, and artist
            collaboration. From recording to final mastering, every project is
            handled with care and attention to detail.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/">Back Home</Button>
            <Button to="/articles" variant="secondary">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { number: '8', label: 'Years of Experience' },
          { number: '200+', label: 'Sessions Completed' },
          { number: '90+', label: 'Creative Clients' },
          { number: '4', label: 'Core Services' },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-3xl font-bold text-red-500">{item.number}</p>
            <p className="mt-2 text-sm font-medium text-slate-600">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            A studio made for sound and creativity
          </h2>

          <div className="mt-6 space-y-4">
            <article className="rounded-2xl bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">
                Professional Equipment
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We use reliable studio tools and modern production software to
                deliver quality audio.
              </p>
            </article>

            <article className="rounded-2xl bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">
                Artist-Focused Process
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Every session is tailored to the artist’s style, genre, and
                creative goals.
              </p>
            </article>

            <article className="rounded-2xl bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">
                Complete Production Support
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                From first demo to final release, we support each stage of the
                music creation process.
              </p>
            </article>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-md">
          <img
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
            alt="Studio equipment"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  )
}

export default AboutPage