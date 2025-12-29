export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About <span className="text-orange-500">GeniusGarage</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-600">
            GeniusGarage is a product engineering studio helping teams turn
            ideas into scalable, real-world products.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="mt-4 text-neutral-600">
              We partner with founders and product teams to design, build, and
              launch digital products. Our focus is long-term value, clean
              architecture, and rapid iteration.
            </p>
            <p className="mt-4 text-neutral-600">
              From MVPs to full-scale platforms, we help businesses grow with
              confidence.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <ul className="space-y-4 text-neutral-700">
              <li>⚙️ Full-stack product engineering</li>
              <li>🚀 Startup & MVP development</li>
              <li>🧠 AI-driven solutions</li>
              <li>📐 Scalable system architecture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold">Our Values</h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="text-2xl">{value.icon}</div>
                <h3 className="mt-4 font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 text-center sm:grid-cols-3">
          <Stat value="50+" label="Products launched" />
          <Stat value="10+" label="Industries served" />
          <Stat value="4.9/5" label="Client rating" />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-neutral-900 p-12 text-center text-white">
          <h2 className="text-3xl font-semibold">
            Let’s build something great
          </h2>
          <p className="mt-4 text-neutral-300">
            Tell us about your idea and we’ll help bring it to life.
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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-bold">{value}</div>
      <div className="mt-2 text-neutral-600">{label}</div>
    </div>
  );
}

const values = [
  {
    icon: "🧩",
    title: "Craftsmanship",
    description: "Thoughtful engineering, clean code, and attention to detail.",
  },
  {
    icon: "⚡",
    title: "Speed",
    description: "Fast execution without compromising quality.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    description: "We work as an extension of your team.",
  },
  {
    icon: "🚀",
    title: "Innovation",
    description: "We adopt modern tools and push technical boundaries.",
  },
];
