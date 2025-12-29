export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About <span className="text-orange-500">GeniusGarage</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            GeniusGarage is a creative engineering studio where ideas turn into
            real products. We build, experiment, and innovate.
          </p>
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-neutral-300">
              Our mission is to empower founders, creators, and teams by
              building scalable digital products with clean architecture and
              modern technologies.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <ul className="space-y-4 text-neutral-300">
              <li>⚙️ Product engineering & architecture</li>
              <li>🚀 Startup & MVP development</li>
              <li>🎨 Design-driven solutions</li>
              <li>🧠 AI & automation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-900/50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold">Our Values</h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-orange-500/50">
                <div className="text-2xl">{item.icon}</div>
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-orange-500/10 to-neutral-900 p-12 text-center">
          <h2 className="text-3xl font-semibold">
            Build something genius with us
          </h2>
          <p className="mt-4 text-neutral-300">
            Have an idea? Let’s turn it into a real product.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

const values = [
  {
    icon: "🧩",
    title: "Craftsmanship",
    description: "Clean code, thoughtful design, and scalable solutions.",
  },
  {
    icon: "⚡",
    title: "Speed",
    description: "Fast iterations without sacrificing quality.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    description: "We work as part of your team, not just contractors.",
  },
  {
    icon: "🚀",
    title: "Innovation",
    description: "We explore new technologies and push boundaries.",
  },
];
