import Button from '../components/Button'

const AboutPage = () => {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
      <section className="grid items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?auto=format&fit=crop&w=1000&q=80"
            alt="Music producer at work"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
            About Echo
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white">
            A studio built for artists and sound
          </h1>

          <p className="mt-4 text-base leading-7 text-white/70">
            Echo is a music studio dedicated to helping artists transform ideas
            into refined and meaningful sound. It combines creativity,
            production tools, and technical care to support each stage of music
            development.
          </p>

          <p className="mt-4 text-base leading-7 text-white/70">
            Inspired by the premium feel of modern music platforms, Echo offers
            a dark and immersive visual identity that reflects a stylish,
            contemporary music experience.
          </p>

          <p className="mt-4 text-base leading-7 text-white/70">
            The studio values originality, collaboration, and clarity. Whether
            the artist is recording a first single or finalizing a full track,
            Echo aims to provide an environment that feels professional,
            creative, and welcoming.
          </p>

          <div className="mt-6">
            <Button to="/">Back Home</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage