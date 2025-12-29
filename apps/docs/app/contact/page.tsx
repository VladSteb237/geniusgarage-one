"use client";
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      {/* Hero */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact <span className="text-orange-500">GeniusGarage</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-600">
            Have a project in mind or need expert guidance? Let’s start the
            conversation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="text-3xl font-semibold">Get in touch</h2>
            <p className="mt-4 text-neutral-600">
              We work with startups, scale-ups, and product teams worldwide.
              Tell us what you’re building and how we can help.
            </p>

            <div className="mt-8 space-y-6 text-neutral-700">
              <div>
                <div className="text-sm text-neutral-500">Email</div>
                <a
                  href="mailto:hello@geniusgarage.com"
                  className="font-medium hover:text-orange-500">
                  hello@geniusgarage.com
                </a>
              </div>

              <div>
                <div className="text-sm text-neutral-500">Location</div>
                <span>Remote / Worldwide</span>
              </div>

              <div>
                <div className="text-sm text-neutral-500">Response time</div>
                <span>Within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-600">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-600">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-600">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your idea or project..."
                  className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:border-orange-500 focus:outline-none"
                />
              </div>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400"
                onClick={() => {
                  window.location.href = "/";
                }}>
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-neutral-900 p-12 text-center text-white">
          <h2 className="text-3xl font-semibold">Prefer a quick call?</h2>
          <p className="mt-4 text-neutral-300">
            We’re happy to discuss your idea and suggest next steps.
          </p>

          <a
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400">
            Schedule a call
          </a>
        </div>
      </section>
    </main>
  );
}
