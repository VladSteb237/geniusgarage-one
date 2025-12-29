export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Product <span className="text-orange-500">Reviews</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-600">
            Honest feedback from founders and teams who built products with
            GeniusGarage.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-neutral-500">
                    {review.role}, {review.company}
                  </p>
                </div>
                <div className="text-orange-500">
                  {"★".repeat(review.rating)}
                </div>
              </div>

              <p className="mt-4 text-neutral-700">“{review.text}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-200 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <Stat value="50+" label="Products shipped" />
            <Stat value="4.9/5" label="Average rating" />
            <Stat value="100%" label="Client satisfaction" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-neutral-900 p-12 text-center text-white">
          <h2 className="text-3xl font-semibold">
            Ready to build your product?
          </h2>
          <p className="mt-4 text-neutral-300">
            Join the founders who trust GeniusGarage.
          </p>

          <a
            href="/about"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400">
            About a project
          </a>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-4xl font-bold text-neutral-900">{value}</div>
      <div className="mt-2 text-neutral-600">{label}</div>
    </div>
  );
}

const reviews = [
  {
    name: "Alex Johnson",
    role: "Founder",
    company: "StartupX",
    rating: 5,
    text: "GeniusGarage helped us go from idea to MVP in record time. Clean code and great communication.",
  },
  {
    name: "Maria Lopez",
    role: "Product Manager",
    company: "FinTech Pro",
    rating: 5,
    text: "Very strong engineering culture. They think like product owners, not just developers.",
  },
  {
    name: "Daniel Kim",
    role: "CTO",
    company: "HealthAI",
    rating: 4,
    text: "Solid architecture and fast iterations. Perfect partner for early-stage startups.",
  },
];
